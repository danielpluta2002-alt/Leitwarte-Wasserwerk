# Leitwarte Wasser

Prozessbild-Editor im Stil eines Leitsystems für die Wasserversorgung, als Windows-Programm (Electron).

## Funktionen
- **Prozessbild:** Hochbehälter, Pumpwerke, Tiefbrunnen und Wasserquellen per Drag & Drop platzieren und mit Leitungen verbinden (Saug-, Druck-, Brunnen-, Fall- und Quellleitung).
- **Armaturen:** Klappen und Wasserzähler direkt in Leitungen ziehen. Klappen fahren vor Ort, fern über die Fernwirkstation oder automatisch nach Füllstand. Zähler zeigen Durchfluss und Zählerstand, auch am Netzabgang eines Hochbehälters.
- **Simulation:** Füllstände, Pumpenschaltung nach Schaltpunkten, Tagesganglinie der Abgabe, Brunnenabsenkung, Quellschüttung, Alarme.
- **Stationsansicht** (Doppelklick auf ein Objekt):
  - Pumpen hinzufügen und parametrieren (Förderstrom, Förderhöhe, Motor, Anlaufart, Rolle Grundlast/Spitzenlast/Reserve).
  - Fernwirk-Rack mit Netzteil, CPU, Kommunikation, DI/DO/AI/AO- und Zählermodulen bestücken, Kanalbelegung und Signalliste.
  - Schaltschrank mit Hutschienen: Klemmen, Schütze, Relais, Messumformer, Schutzschalter, Netzteil, FU und Fernwirkstation einsetzen und verdrahten. Betriebsmittel- und Verbindungsliste.
- Anlagen als `.leitwarte`-Datei speichern und öffnen.

## Starten
Fertiges Programm: unter **Releases** die ZIP-Datei laden, entpacken, `Leitwarte Wasser.exe` starten.

Aus dem Quellcode (Node.js 18 oder neuer):
```
cd app
npm install --save-dev electron@33
npx electron .
```
Einen eigenen Installer mit Symbol erzeugst du zum Beispiel mit `electron-builder`.
