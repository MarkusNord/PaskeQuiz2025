// Core navigation and hint timers
const puzzles = ['puzzle1','puzzle2','puzzle3','puzzle4','puzzle5','puzzle6','puzzle7','puzzle8','puzzle9','puzzle10'];
let current = 0;
let hintTimer;
let username = localStorage.getItem('username') || '';
let progress = parseInt(localStorage.getItem('progress')) || 0;

function saveState() {
  localStorage.setItem('username', username);
  localStorage.setItem('progress', progress);
}

function updateHeader() {
  document.getElementById('player-name').textContent = username;
  document.getElementById('progress').textContent = (progress + 1) + '/' + puzzles.length;
}

// Helper views
function showStart() {
  clearTimeout(hintTimer);
  // show start, hide game and puzzles and end
  document.getElementById('start-screen').style.display = 'flex';
  document.getElementById('game-header').style.display = 'none';
  document.getElementById('app').style.display = 'none';
  document.getElementById('end-screen').style.display = 'none';
  // hide all puzzles
  puzzles.forEach(id => document.getElementById(id).style.display = 'none');
}

function showEnd() {
  clearTimeout(hintTimer);
  // hide start, game, puzzles, show end
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('game-header').style.display = 'none';
  document.getElementById('app').style.display = 'none';
  document.getElementById('end-screen').style.display = 'flex';
  // hide all puzzles
  puzzles.forEach(id => document.getElementById(id).style.display = 'none');
}

// Refactor showPuzzle to focus only on puzzles
function showPuzzle(id) {
  clearTimeout(hintTimer);
  // show game UI containers
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('game-header').style.display = 'flex';
  document.getElementById('app').style.display = 'block';
  document.getElementById('end-screen').style.display = 'none';
  // hide all puzzles and show only the current one
  puzzles.forEach(pid => document.getElementById(pid).style.display = 'none');
  const el = document.getElementById(id);
  el.style.display = 'block';
  // start hint timer
  const hint = el.querySelector('.hint');
  hint.classList.add('hidden');
  hintTimer = setTimeout(() => hint.classList.remove('hidden'), 60000);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  // remove initial hidden classes to allow inline display control
  ['game-header','app','end-screen'].forEach(id => document.getElementById(id).classList.remove('hidden'));
  showStart();
  // resume saved progress
  if (username && progress < puzzles.length) {
    current = progress;
    updateHeader();
    showPuzzle(puzzles[current]);
  }
  // start button
  document.getElementById('start-btn').addEventListener('click', () => {
    const input = document.getElementById('username-input').value.trim();
    if (!input) return;
    username = input;
    progress = 0; saveState();
    updateHeader();
    showPuzzle(puzzles[0]);
  });
  // puzzle inits
  initPuzzle1(); initPuzzle2(); initPuzzle3(); initPuzzle4(); initPuzzle5(); initPuzzle6(); initPuzzle7(); initPuzzle8(); initPuzzle9(); initPuzzle10();
});

// progression
function nextPuzzle() {
  progress = current; saveState();
  current++;
  if (current < puzzles.length) {
    updateHeader();
    showPuzzle(puzzles[current]);
  } else {
    // finished
    localStorage.setItem('completed','true');
    showEnd();
    document.getElementById('final-name').textContent = username;
  }
}

// Puzzle 1
function initPuzzle1() {
  const btn = document.getElementById('puzzle1-unlock');
  btn.addEventListener('click', () => {
    const val = document.getElementById('puzzle1-input').value.trim();
    if (val === '5') nextPuzzle();
    else flashError('puzzle1');
  });
}

// Puzzle 2: Letter wheels
function initPuzzle2() {
  const wheels = document.querySelectorAll('#puzzle2 .wheel');
  const letters = Array.from({length:26}, (_,i) => String.fromCharCode(65+i));
  wheels.forEach(w => {
    let idx = 0;
    w.textContent = letters[idx];
    w.addEventListener('click', () => {
      idx = (idx+1)%letters.length;
      w.textContent = letters[idx];
    });
  });
  document.getElementById('puzzle2-unlock').addEventListener('click', () => {
    const code = Array.from(wheels).map(w=>w.textContent).join('');
    if (code === 'EGGS') nextPuzzle();
    else flashError('puzzle2');
  });
}

// Puzzle 3: Coordinate grid
function initPuzzle3() {
  const container = document.getElementById('puzzle3-grid');
  const rows = ['A','B','C','D','E','F','G'];
  const cols = [3,4,5,6,7,8,9];
  rows.forEach(r => cols.forEach(c => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.textContent = r+c;
    cell.addEventListener('click', () => cell.classList.toggle('selected'));
    container.appendChild(cell);
  }));
  document.getElementById('puzzle3-unlock').addEventListener('click', () => {
    const sel = Array.from(document.querySelectorAll('#puzzle3-grid .selected')).map(c => c.textContent);
    const correct = ['A7', 'B3', 'F6'];
    // Sjekk at alle riktige koordinater er valgt
    if (sel.length === 3 && correct.every(coord => sel.includes(coord))) nextPuzzle();
    else flashError('puzzle3');
  });
}

// Puzzle 4: Circuit logic
function initPuzzle4() {
  const slots = {};
  let switchOn = false;
  // drag start for components
  document.querySelectorAll('#puzzle4 .component').forEach(el => {
    el.addEventListener('dragstart', e => e.dataTransfer.setData('text/plain', el.dataset.comp));
  });
  // slots accept drops
  document.querySelectorAll('#puzzle4 .slot').forEach(slot => {
    slot.addEventListener('dragover', e => e.preventDefault());
    slot.addEventListener('drop', e => {
      e.preventDefault();
      const comp = e.dataTransfer.getData('text/plain');
      const compEl = document.querySelector(`#puzzle4 .component[data-comp="${comp}"]`);
      if (compEl) {
        slot.textContent = '';
        slot.appendChild(compEl);
        slots[slot.dataset.slot] = comp;
      }
    });
  });
  // clicking switch toggles power only when all components placed
  const switchSlot = document.querySelector('#puzzle4 .slot[data-slot="switch-slot"]');
  switchSlot.style.cursor = 'pointer';
  switchSlot.addEventListener('click', () => {
    // require battery, resistor, bulb placed first
    if (!slots['battery-slot'] || !slots['resistor-slot'] || !slots['bulb-slot']) {
      flashError('puzzle4');
      return;
    }
    switchOn = !switchOn;
    switchSlot.classList.toggle('on', switchOn);
  });
  // test circuit button
  document.getElementById('puzzle4-unlock').addEventListener('click', () => {
    const correct = slots['battery-slot']==='battery'
                  && slots['switch-slot']==='switch'
                  && slots['resistor-slot']==='resistor'
                  && slots['bulb-slot']==='bulb';
    if (correct && switchOn) {
      document.getElementById('puzzle4-uv').classList.remove('hidden');
      setTimeout(() => nextPuzzle(), 1000);
    } else {
      flashError('puzzle4');
    }
  });
}

// Puzzle 5: Morse SOS
function initPuzzle5() {
  const display = document.querySelector('.morse-display');
  const sequence = [...'...---...'];
  function animateMorse() {
    display.textContent = '';
    let i = 0;
    function showNext() {
      if (i < sequence.length) {
        display.textContent += sequence[i++];
        setTimeout(showNext, 300);
      } else {
        setTimeout(animateMorse, 1000);
      }
    }
    showNext();
  }
  animateMorse();
  document.getElementById('puzzle5-unlock').addEventListener('click', () => {
    const val = document.getElementById('puzzle5-input').value.trim().toUpperCase();
    if (val==='SOS') nextPuzzle(); else flashError('puzzle5');
  });
}

// Puzzle 6: Numeric combination
function initPuzzle6() {
  const cont = document.querySelector('.dial-container');
  const targets = ['9','45','7'];
  targets.forEach((t,i) => {
    const inp = document.createElement('input');
    inp.type = 'text'; inp.maxLength = t.length;
    inp.className = 'dial';
    cont.appendChild(inp);
  });
  document.getElementById('puzzle6-unlock').addEventListener('click', () => {
    const vals = Array.from(document.querySelectorAll('.dial')).map(i=>i.value.trim());
    if (vals.join('-')===targets.join('-')) nextPuzzle(); else flashError('puzzle6');
  });
}

// Puzzle 7: Hidden items
function initPuzzle7() {
  const img = document.getElementById('puzzle7-image');
  let count = 0;
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => {
    count++;
    if (count >= 4) nextPuzzle();
  });
  document.getElementById('puzzle7-unlock-btn').addEventListener('click', () => {
    const val = document.getElementById('puzzle7-unlock').value.trim();
    if (val) nextPuzzle(); else flashError('puzzle7');
  });
}

// Puzzle 8: Color order
function initPuzzle8() {
  const panel = document.querySelector('.color-panel');
  ['yellow','green','red','blue'].forEach(color => {
    const btn = document.createElement('div');
    btn.className = 'color-button ' + color;
    panel.appendChild(btn);
    btn.addEventListener('click', () => {
      if (color === 'red') nextPuzzle(); else flashError('puzzle8');
    });
  });
}

// Puzzle 9: Terminal style
function initPuzzle9() {
  const term = document.querySelector('.terminal');
  term.textContent = 'access.txt: ... unlock --pin 5241 ...';
  document.getElementById('puzzle9-unlock').addEventListener('click', () => {
    const pin = document.getElementById('puzzle9-input').value.trim();
    if (pin === '5241') nextPuzzle(); else flashError('puzzle9');
  });
}

// Puzzle 10: Sliding puzzle
function initPuzzle10() {
  const container = document.querySelector('.slider-puzzle');
  const pieces = [
    'assets/images/egg_left_top.png','assets/images/egg_left_mid.png','assets/images/egg_left_bottom.png',
    'assets/images/egg_mid_top.png','assets/images/egg_mid_center.png','assets/images/egg_mid_bottom.png',
    'assets/images/egg_right_top.png','assets/images/egg_right_mid.png','assets/images/egg_right_bottom.png'
  ];
  let grid = pieces.slice();
  grid.push(null);
  // shuffle
  grid.sort(() => Math.random() - 0.5);

  function render() {
    container.innerHTML = '';
    grid.forEach((src, i) => {
      const cell = document.createElement('div');
      if (src) {
        const img = document.createElement('img'); img.src = src;
        cell.appendChild(img);
      } else {
        cell.className = 'empty';
      }
      cell.addEventListener('click', handleClick(i));
      container.appendChild(cell);
    });
  }

  function handleClick(i) {
    return () => {
      const emptyIdx = grid.indexOf(null);
      const [row, col] = [Math.floor(i / 3), i % 3];
      const [er, ec] = [Math.floor(emptyIdx / 3), emptyIdx % 3];
      if (Math.abs(row - er) + Math.abs(col - ec) === 1) {
        [grid[i], grid[emptyIdx]] = [grid[emptyIdx], grid[i]];
        render();
        checkSolved();
      } else {
        flashError('puzzle10');
      }
    };
  }

  function checkSolved() {
    if (grid.slice(0,9).every((v,i) => v === pieces[i])) nextPuzzle();
  }

  render();
}

// Flash error
function flashError(id) {
  const sec = document.getElementById(id);
  sec.classList.add('shake');
  setTimeout(()=> sec.classList.remove('shake'), 300);
}
