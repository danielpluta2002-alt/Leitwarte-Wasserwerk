# Leitwarte Wasser

Prozessbild-Editor im Stil eines Leitsystems für die Wasserversorgung, als Windows-Programm (Electron). `app/index.html` läuft auch direkt im Browser.

## Funktionen
- **Prozessbild:** Tiefbrunnen, Wasserquellen, Hochbehälter, Pumpwerke, Druckerhöhungsanlagen und Schieberschächte per Drag & Drop platzieren und mit Leitungen verbinden. Schieberschächte verteilen das Wasser über eigene Schieber, Druckerhöhungsanlagen halten den Solldruck ihrer Druckzone.
- **Armaturen:** Klappen und Wasserzähler direkt in Leitungen ziehen. Klappen fahren vor Ort, fern über die Fernwirkstation oder automatisch nach Füllstand. Zähler zeigen Durchfluss und Zählerstand, auch am Netzabgang eines Hochbehälters.
- **Simulation:** Füllstände, Pumpenschaltung nach Schaltpunkten, Tagesganglinie der Abgabe, Brunnenabsenkung, Quellschüttung, Alarme.
- **Stationsansicht** (Doppelklick auf ein Objekt):
  - Pumpen hinzufügen und parametrieren (Förderstrom, Förderhöhe, Motor, Anlaufart, Rolle Grundlast/Spitzenlast/Reserve).
  - Fernwirk-Rack mit Netzteil, CPU, Kommunikation, DI/DO/AI/AO- und Zählermodulen bestücken, Kanalbelegung und Signalliste.
  - Schaltschrank mit Hutschienen: rund 50 Bauteile aus Pumpwerk, Hochbehälter und Schieberschacht (Schutz, Motorabgänge, Steuern, Messen, Bedienen, Schrankausstattung) einsetzen und verdrahten. Betriebsmittel- und Verbindungsliste.
  - Klemmleisten mit Durchgangs-, Doppelstock-, 3-Stock-, PE-, N-Trenn-, Trenn- und Sicherungsklemmen, Bezeichnung nach DIN EN IEC 81346 / DIN EN 61666 (`=Anlage+Ort-X1:5`), Brücken, Klemmenplan und Klemmenbedarf.
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
