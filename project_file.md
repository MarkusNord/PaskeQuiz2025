Her kommer en samling av **escape room-inspirerte oppgaver** – fokus på interaktive puzzles og kunnskapsbaserte utfordringer. Alle kan implementeres på en nettside og gir rom for progresjon, hint og kreativ utførelse.

---

### Overordnet historie: Jakten på Det Glemte Egget

En mørk påskenatt mottar du, [Navn], et mystisk brev under døren. Brevet er skrevet med sirlig håndskrift, underskrevet av "P. Hare". Det forteller om et legendarisk påskeegg – det Glemte Egget – som har vært skjult i generasjoner. Bare én med skarpsinn, tålmodighet og viljestyrke kan finne det. Nå er det opp til deg, [Navn], å løse oppgavene og finne dets skjulested før tiden renner ut…

Hver oppgave du løser vil bringe deg nærmere sannheten. Hver kode avslører et fragment. Men pass deg – det du tror du vet, kan være et blindspor. Alt henger sammen.

---

**Spillmekanikk:**
- Ved feil svar flasher skjermen rødt og rister.
- Nettsiden må være moderne og ha et tydelig design.
- Mobilvennlig.
- Når oppgaven er løst går spilleren videre til neste oppgave.
- Når alle 10 oppgavene er løst får de vite hvor Egget er gjemt.
- Alle oppgavene hører sammen til ett påskemysterie som må løses. Det kan gjerne være mystisk og litt mørkt (som passer for voksne ungdommer).
- Bruk Navnet (som brukeren angir på første side) på alle følgende sider for å gjøre dem personlige, og lag et mysterie/historie for oppgaven som skal løses som henger sammen i det overordnede påskemysteriet. Navnet kan gjerne inkluderes i historien. Rød tråd med “et forsvunnet egg”, en mystisk avsender (“P. Hare”?).
- Brukeren kan ses på som detektiven som skal løse påskemysteriet.
- Tilstand: Løsninger lagres i localStorage for å gi progresjon
- Design: Enkel og mobilvennlig, påsketema

Oppstartsside:

- Første side: Velkommen til Påskequizzen 2025! Med et påskeegg som vagger frem og tilbake under + input for navn og knapp for Start.
- Introduksjon til påskemysteriet.

---

### **1. Tastelås med skjult tallrekke (Puzzle)**

**Scenario**: Et digitalt låseskap med tallkoder.\
**Oppgave**: Finn tallkoden ved å analysere en lapp med tilsynelatende tilfeldige tall:

```
3, 1, 4, ?, 9, 2, 6
```

**Løsning**: 5 (tallene i Pi)\
**Interaksjon**: Input + “Unlock” knapp\
**Hint**: “En matematisk konstant” etter 45 sek

---

### **2. Kabinett med kodelås (Puzzle)**

**Scenario**: Et skap med 4 tallhjul (som på en koffertlås)\
**Oppgave**: Roter tall til å stave riktig ord, basert på kodekart\
Et bilde av en kylling → løsningen er EGGS

Kodekart som viser hvilke tall som tilsvarer hvilke bokstaver.

**Interaksjon**: Dra for å stille hvert hjul + "Unlock" knapp\
**Hint**: “Hva legger denne skapningen?”

---

### **3. Kart med koordinater (Kunnskap + Logikk)**

**Scenario**: Du får et rutenett (Random 7 bokstaver (W må være rad 3 ) og tall 3-10) og ledetråd:

> Oppgave 1: "Første bokstav i Østerrikes hovedstad + Antall bøker i Harry Potter serien"

**Løsning**: W7 (Wien → W, 7 søsken → 7)\
**Interaksjon**: Klikk riktig rute. Husk ruten som er klikket for hver oppgave. Når 3 oppgaver er løst skal kunden skrive koordinatene inn i 3 felt og trykke "Unlock"\
**Hint**: “Geografi og bøker”

Spilleren må løse 3 ulike oppgaver før de går videre. Lag de to andre med passende rutenett.

---

### **4. Elektrisk krets – Aktiver den skjulte meldingen (Logikk + Puzzle + Mystikk)**

**Scenario**: Et mørkt hjørne av rommet inneholder et gammelt, støvete panel med påskekobbertråder og rare symboler. Panelet har plass til et batteri, bryter, lampe og ledninger – men noen deler er fjernet. Over panelet er det gravert inn: "Bare den rette forbindelsen vil vise deg veien, [Navn]."

**Oppgave**: Spilleren må:
1. Finne og plassere riktige komponenter (blandet inn med falske komponenter som ikke fungerer: f.eks. tomme batterier eller defekte lyspærer).
2. Dra og slippe dem på riktig sted i kretsen (drag & drop)
3. Slå på bryteren og se om kretsen fungerer – hvis ja, aktiveres et UV-lys som viser en skjult melding på veggen (kode eller ledetråd).

**Interaksjon**:
- Komponenter (både riktige og falske) ligger i en «verktøykasse» til venstre
- Kretskortet i midten, med tydelig merkede kontaktpunkter
- Dra komponenter til riktige steder
- «Test krets»-knapp med visuell feedback (f.eks. gnist, pære blinker, eller UV-lys som tennes)

**Hint**: Etter 60 sek vises en glødende tekst: “Alt som lyser er ikke strøm – men alt strøm trenger riktig rekkefølge.”

---

### **5. Morse-kode (Kunnskap + Avkoding)**

**Scenario**: En blinkende lampe eller lyd\
**Oppgave**: Tolke morsekode som blinker/slår ut i morsekoden for SOS (repeter)

**Løsning**: SOS \
**Interaksjon**: Input + "Unlock"\
**Hint**: Alfabettabell vises etter 60 sek

---

### **6. Kombinasjonslås fra historisk info (Kunnskap)**

**Scenario**: Lås som krever tre tall, hint:

- Første mennesket på månen – siste siffer i årstall
- Norges frigjøringsår - 2 siste siffer
- Antall kontinenter

**Løsning**: 9 (1969), 1945, 7\
→ Kombinasjon: `9-45-7`

**Interaksjon**: Tre tallfelter\
**Hint**: "Historietime! - eller Google \:D"

---

### **7. Bilde med skjulte elementer (Puzzle)**

**Scenario**: Et zoombart bilde av en koselig, men overfylt påskestue – tenk fargerike tepper, halvspiste sjokoladeegg, lyslenker, malte egg, en rotekrok, en bokhylle, og en dør som står litt på gløtt. Stemningen er lun, men noe virker mistenkelig.

**Oppgave**: Finn 4 skjulte symboler (kanin, kylling, egg, nøkkel). Når alle er klikket, avsløres en 4-sifret kode i et glimt på skjermen.

**Interaksjon**: Spilleren kan zoome og panorere i bildet, og klikke direkte på de skjulte symbolene. Når alle fire er funnet, vises en «kodesekvens» med blinkende lys bak døren. Inputfelt for koden og knapp for "Unlock".

**Hint**: Etter 60 sek vises en subtil animasjon av en skygge som beveger seg nær døren med teksten “Let i nærheten av døren – og under ting som klukker…”

---

### **8. Fargebasert rekkefølge (Logikk + mønstergjenkjenning)**

**Scenario**: Et panel med fargede ringer vises i en tilsynelatende tilfeldig rekkefølge, men det skjuler seg et mønster bak. Rekkefølgen er:

> Gul, grønn, rød, blå, gul, grønn, rød, blå, gul, grønn, ?

**Oppgave**: Hvilken farge kommer neste? Fargene er ikke bare gjentatt, men også forskjøvet i rotasjon.

**Løsning**: Rød

**Interaksjon**: Klikk én av fire fargevalg (f.eks. som store runde knapper)

**Hint**: "Finn det skjulte rotasjonsmønsteret i rekkene" (vises etter 45 sek)

Ekstra detalj: Dersom spilleren klikker feil, spilles en animasjon hvor fargene 'glitcher', og en stemme sier "Prøv igjen, [navn]… mønstre finnes overalt."

---

### **9. Terminalkode (Tech/pseudo-hacking-stil)**

**Scenario**: Terminalgrensesnitt – ser ut som du må “hacke” en fil\
**Oppgave**: Lese hint som `access.txt`, og velge riktig kommando:

```
A) open vault  
B) decrypt hint.txt  
C) ls -la secrets/  
D) unlock --pin 5241
```

**Løsning:** Åpne access.txt - den må være generert med masse uforståelig tekst, men ulock --pin 5241 som en del av teksten.

Interaksjon: Inputfelt med 4 tall (terminal stil .... input pin: \_ (blinkende)). Ved feil kode: access denied og be om pin på nytt. Ved riktig kode: access granted, unlocking (med lasteindikator). Vent 5 sec før neste side lastes.\
**Hint**: “Se på access.txt først!”

---

### **10. Skyvepuslespill – Sett sammen påskeegget (Puzzle)**

Scenario: Et gammelt, mekanisk spillbrett er bygget inn i veggen. Det består av 9 ruter (3x3), men én brikke mangler. På brikkene er det fragmenter av et vakkert, mønstrete påskeegg. Når puslespillet løses, høres en mekanisk klikk fra veggen.



Oppgave: Spilleren må skyve brikkene én og én (sliding puzzle) for å sette sammen bildet av det hele påskeegget. Når alle brikkene er på riktig plass, låses neste oppgave opp automatisk.



Interaksjon:

Interaktivt 3x3-brett med én tom plass

Brikkene kan skyves inn i tomrommet

Automatisk sjekk om puslespillet er løst

Feedback ved feil forsøk: én tilfeldig brikke "rister" for å antyde feil plassering



Ved løsning: en påskeanimasjon (egg som "lyser opp"), og en stemme som sier: “Bra jobbet, [Navn]. Mønsteret avslører mer enn du tror …”



Hint: Vises etter 60 sekunder: “Tenk på hvordan egg vanligvis ser ut – rund topp, spiss bunn – og følg fargemønsteret.”



Implementasjonstips:

Del opp et bilde av et påskeegg i 9 deler og tilfeldig plasser dem med én tom rute

Bruk canvas eller div-basert drag-mekanikk i JS

Skyvekontroll med touch/piltaster/museklikk

---

### Teknisk spesifikasjon og implementasjonsdetaljer

**1. Teknologivalg**
- HTML5, CSS3, og JavaScript (evt. React for komponentstruktur)
- Bruk `localStorage` til å lagre: brukernavn, progresjon, og hint-status

**2. Navigasjon og struktur**
- Hver oppgave er én side/komponent, lastes sekvensielt
- Navigasjon kan håndteres via `window.location.hash` eller `React Router`
- Startside tar imot brukerens navn og lagrer det i `localStorage`

**3. Responsiv design**
- Bruk CSS Flexbox eller Grid for layout
- Skal fungere like godt på mobil og desktop

**4. Interaksjonstyper**
- **Drag & drop**: HTML5 drag events eller bruk SortableJS
- **Skyvepuslespill**: 3x3 grid hvor én rute er tom – oppdater `position` i array og render
- **Klikkbare områder**: Bruk `getBoundingClientRect()` for å verifisere koordinater
- **Terminal**: Simuler terminal med monospace-font, blinkende input og `setInterval` animasjon

**5. Hint-system**
- Bruk `setTimeout()` for å vise hint etter 60 sek
- Hint vises i et overlay med halvtransparent bakgrunn og stilisert tekst

**6. Lyd og visuelle effekter**
- Lyd: Bruk `new Audio('lydfil.mp3').play()` for tilbakemelding
- Visuelle effekter: Bruk `classList.add('shake')` og `@keyframes` i CSS

**7. Tilgjengelighet (a11y)**
- Legg til `aria-labels` på knapper og interaktive elementer
- Sørg for at tastatur-navigasjon fungerer i alle oppgaver

**8. Kontrollflyt og progresjon**
- Etter korrekt svar: `localStorage.setItem('task-3', 'completed')`
- Neste oppgave validerer at forrige er løst
- Sluttmeldingen vises kun hvis alle 10 er løst (`Object.values(allTasks).every(x => x === 'completed')`)

**9. Hosting**
- Sidene må kunne hostes i en storage bucket på AWS eller GCP.

---

Etter alle oppgavene er løst:

Avslutt påskemysteriet og si hvor påskeegget er gjemt (i skapet på stuen).