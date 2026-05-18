# 3. Dokumentation

## README erstellen

!!! tip "Empfehlung"
    Erstelle eine **README**!

Die README stellt die erste grundlegende Projektdokumentation dar, welche eine Person sieht.
Von ihr ausgehend können weitere Dokumente referenziert werden, wie eine Montageanleitung, Gefährdungsbeurteilung oder die Stückliste (BOM).

**Empfehlung:** `README.md` in der obersten Dateiebene (siehe [Ordnerstruktur](02-ordnerstruktur.md)) – Quasi-Standard in Git-Repositorys auf GitHub und Co.

### Grundlegende Struktur einer README

- **Titel**
- **Beschreibung**
- **Aktueller Status** (aktiv, inaktiv, …)
    - Projekte, welche nicht mehr aktiv betreut werden können, sollten in der Beschreibung darauf hinweisen
- **Abhängigkeiten** (inkl. konkrete Versionen und Lizenzen)
    - Software
    - Zukaufteile
- **Ordnerstruktur**
- **Bauanleitung**
- **Arbeitsweise**
    - Informationen für Beitragende
        - Developer-Guidelines, Namenskonventionen (wie diese Richtlinie), Branching-Struktur usw.
    - Contributors License Agreement
        - Regeln, wie mit Beiträgen Dritter rechtlich umgegangen werden soll
- **Lizenzierung**

---

## Markdown verwenden

!!! tip "Empfehlung"
    Verwende **Markdown**!

- **Link:** <https://www.markdownguide.org/basic-syntax/>
- **Extensions für VSCode:**
    - `Markdown All in One`[^8]
    - `markdownlint`[^9]

Markdown (`*.md`) hat sich in den letzten Jahren als Standard zur einfachen Formatierung von Texten etabliert.
Mit voranschreitender Entwicklung des Projekts wird eine umfangreichere Dokumentation notwendig.

Es existieren eine Reihe von Werkzeugen, welche auf Basis von Markdown automatisch ergonomische statische Webseiten generieren und direkt z. B. via Diensten wie **GitHub Pages** zur Verfügung stellen.
Die Dokumentation findet somit synchron mit den Komponenten im Repository statt und wird über das Versionsverwaltungssystem überwacht.

!!! info "Diese Seite als Beispiel"
    Diese Dokumentation wurde mit [Zensical](https://zensical.org/) aus Markdown-Quelldateien generiert und via GitHub Pages bereitgestellt. Auf dem [`gh-pages-src`-Branch](https://github.com/IIoTTestBed/osh-guide/tree/gh-pages-src) des Repositorys ist die Konfiguration zu sehen.

[^8]: <https://github.com/yzhang-gh/vscode-markdown>
[^9]: <https://github.com/DavidAnson/vscode-markdownlint>
