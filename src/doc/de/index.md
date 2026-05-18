# Open Source Hardware Guide

**Leitfaden für die Entwicklung von Open Source Hardware**

Wir versuchen mit diesem Leitfaden alle relevanten Aspekte bei der Open Source Hardware Entwicklung zu identifizieren und miteinander zu verknüpfen. Es gibt bereits sehr gute Empfehlungen, welche allerdings gerade Neulingen einen zu großen Raum an Freiheitsgraden lassen und diese mit der Frage "was am besten für sie passt" allein lassen. Dieser Leitfaden beschreibt detailliert *einen* möglichen Weg um den Einstieg zu erleichtern.
Ziel ist es konkrete Empfehlungen bspw. zur Lizenzierung, Strukturierung, Versionierung oder Dokumentation von OSH-Projekten zu geben.

![OSH-Guide Konzept](https://raw.githubusercontent.com/IIoTTestBed/osh-guide/refs/heads/gh-pages-src/gen/osh-guide_concept.png)

---


## Inhalt

| Kapitel | Thema |
| --- | --- |
| [Vorbemerkungen](vorbemerkungen.md) | Kontext und Ziele dieses Leitfadens |
| [1. Versionsverwaltung & Versionierung](01-versionsverwaltung.md) | Git, Semantische Versionierung |
| [2. Ordnerstruktur & Benennung](02-ordnerstruktur.md) | OSH Directory Standard, Namenskonventionen |
| [3. Dokumentation](03-dokumentation.md) | Readme, Markdown |
| [4. Lizenzierung](04-lizenzierung.md) | CERN-OHL, AGPL, REUSE-Tool |
| [5. Kompatibilität & Modularisierung](05-kompatibilitaet.md) | Lizenzkompatibilität |
| [6. Haftung & Gewährleistung](06-haftung.md) | z.B. Produkthaftungsrichtlinie |
| [7. Prinzipien](07-prinzipien.md) | Unix-Philosophie, Designregeln |
| **Anhang** | |
| [OSH Directory Standard](anhang_osh-dir-std.md) | Vollständige Verzeichnisstruktur des OSH Directory Standard |
| [OSH Contributors License Agreement](anhang_osh-cla.md) | Vorlage für ein Contributors License Agreement |

---


## Status

Dieser Leitfaden wird im Rahmen des [OSHOP-Projekts](https://www.oshop-network.de/) der HTW Dresden aktiv entwickelt.


## Standards

Es gibt eine Reihe bereits existierender Standards, die hier zur Anwendung kommen:

- `DIN EN 81346-1:2010-05`: "Industrielle Systeme, Anlagen und Ausrüstungen und Industrieprodukte – Strukturierungsprinzipien und Referenzkennzeichnung – Teil 1: Allgemeine Regeln (IEC 81346-1:2009)"
- `OSH-DIR-STD`: "OSH project directory structure standards"
    - <https://gitlab.fabcity.hamburg/software/template-osh-repo-structure-minimal/>
- `Semantic Versioning`: "Semantic Versioning 2.0.0", Versionierungsschema für aussagekräftige Versionsnummern zur Vermeidung von Abhängigkeitskonflikten
    - <https://semver.org/lang/de/>
- `ISO IEC 5692:2021 (SPDX)`: "System Package Data Exchange", Standard zur Lizenzierung offener und freier Software, Hardware, Daten oder Dokumentationen
    - <https://spdx.dev/>


## OSH-Guidelines

Es gibt bereits eine Reihe von Guidelines, die die Entwicklung dieses OSH-Guides beeinflussten. Die Auswertung der einzelnen Guides ist allerdings noch nicht abgeschlossen. Diese Liste soll zunächst die verfügbaren Ressourcen bündeln.

- `Best Practices for Open Source Hardware`: <https://oshwa.org/resources/sharing-best-practices/>
- `Open-Documentation-Guide` des #ASKnet der r0g_agency: <https://github.com/opencultureagency/Open-Documentation-Guide>
- `Open-Hardware-Guide` des #ASKnet der r0g_agency: <https://github.com/opencultureagency/Open-Hardware-Guide>, <https://openculture.agency/outcomes/open-hardware-guide/>, <https://asknet.community/tools>
- `Hardware Documentation Guide`: <https://open-make.github.io/Hardware-template-guide/>
- Hardware Research Template: <https://codeberg.org/openmake/Hardware-template-guide>>
- `Open Hardware Design Guide`: <https://hardware.prototypefund.de/open-hardware-design-guide/>
- `How to Open Source Hardware` der Open Hardware Alliance: <https://open-hardware-allianz.de/oer.html>
- Open Hardware Promotional (Poster) der TU Delft: <https://gitlab.tudelft.nl/nemoandrea/poster-open-hardware>
- The Turing Way handbook to reproducible, ethical and collaborative data science/Open SOurce Hardware: <https://book.the-turing-way.org/reproducible-research/open/open-hardware>
- Best Practices for OSH-Projects des CERN Open Source Program Office: <https://ospo.docs.cern.ch/recommendations/hw-best-practices/>


## Lizenz

Dieser Leitfaden wird selbst unter der `GPL-3.0-or-later` bereitgestellt.

??? info "Lizenz"
    Da dieser Leitfaden nicht direkter Bestandteil einer Dokumentation eines OSH-Projekts ist, sondern ein eigenständiges Projekt darstellt ist die Anwendung der `CERN-OHL-2.0` hier u.U. irreführend. Die `GPL` wurde in der Vergangenheit auch für Dokumentationen angewendet.


## Förderung

Dieser OSH-Guide ist im Rahmen des Open Source Hardware Innovation Platform Projekts (OSHOP) der HTW Dresden entstanden und wird vom Bundesministerium für Forschung, Technologie und Raumfahrt als Teil der T!Raum-Initiative gefördert.

<img height="100" style="height: 100px" alt="BMFTR Logo" src="https://raw.githubusercontent.com/IIoTTestBed/osh-guide/refs/heads/gh-pages-src/assets/images/bmftr_logo.png" />
<img height="100" style="height: 100px" alt="T!Raum Logo" src="https://raw.githubusercontent.com/IIoTTestBed/osh-guide/refs/heads/gh-pages-src/assets/images/traum_logo.png" />
<img height="100" style="height: 100px" alt="OSHOP Logo" src="https://raw.githubusercontent.com/IIoTTestBed/osh-guide/refs/heads/gh-pages-src/assets/images/oshop_logo.png" />


!!! info "Lebendiges Dokument"
    Dieser Leitfaden muss ständig an die sich ändernden Anforderungen von Open Source Hardware angepasst werden. Beiträge und Verbesserungsvorschläge sind ausdrücklich erwünscht.
