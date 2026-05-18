# 2. Ordnerstruktur und Benennung

Dateinamen und Ordnerstrukturen dienen vorrangig den Menschen um sich möglichst intuitiv zurecht zu finden.
Für eine automatisierte Verarbeitung von Daten (z. B. Parser, Crawler, Toolchains/Pipelines) ist jedoch die strikte Einhaltung von Spezifikationen notwendig.
Änderungen der Strukturen und Namen ziehen häufig Anpassungen an anderen Stellen nach sich.
Abkürzungen sind hilfreich solange ihre Bedeutung im entsprechenden Kontext möglichst eindeutig sind.
Um späteren Aufwand zu minimieren ist es daher wichtig die Dinge so ausdrucksstark wie möglich zu benennen. („Wozu ist das? Das ist blaues Licht. Und was macht es? Es leuchtet blau.")
Diese Empfehlung bezieht sich sowohl auf die Benennung von Dateien als auch auf die Benennung von Baugruppen und Unterbaugruppen sowie Einzelteilen in einem CAD-Modell innerhalb einer CAD-Datei (Featurebaum).

---


## Ordnerstruktur

Im Rahmen des Interfacer Projekts wurde für Open-Source-Hardware-Projekte ein Entwurf für eine Projektordnerstruktur entwickelt: **„OSH project directory structure standards"**.[^5]

Der Standard ist aktuell ein erster Entwurf und erhebt keinen Anspruch auf Vollständigkeit. Je nach Projektanforderungen kann es notwendig werden die vorgegebene Struktur sinnvoll zu ergänzen. Kostenkalkulationen können bspw. unter `/res/economic/` oder weitere spezifische Dokumente wie Wartungsanleitungen unter `/doc/maintenance/` gespeichert werden.

Es wurden bereits eine Reihe Projekte nach diesem Standard strukturiert.[^6] Einige Bezeichnungen und Abkürzungen erscheinen anfänglich ungewohnt, insb. in der Konstruktion, wie „mech" oder „manuf". Bereits wenige ähnlich strukturierte Projekte zeigen ein erleichtertes Zurechtfinden.

Auf Basis einer vereinheitlichten Struktur lassen sich ferner einfacher Automatisierungen („Toolchains") entwickeln.

Nachfolgend ist die **Hauptstruktur (Auszug)** aufgeführt. Der vollständige Standard ist im [Anhang](anhang_osh-dir-std.md) zu finden.

```txt
.
├─┬ LICENSES/                       # Verzeichnis für Lizenztexte der verwendeten Lizenzen
│ ├── CERN─OHL─S─2.txt
│ └── AGPL─3.0─or─later.txt
├─┬ doc/                            # Dokumentation, Anleitungen
│ ├─┬ assembly/                     # Montageanleitung
│ │ └── main.{md|odt|svg}
│ ├── history/                      # Projektgeschichte
│ ├── manuf/                        # Herstellungsdokumente
│ ├── recycling/                    # Recyclingdokumente
│ ├── user/                         # Benutzeranleitungen
│ ├── maintenance/                  # Wartungsanleitungen
│ └── main.md                       # Allgemeine Dokumentation, Index, Überblick
├─┬ gen/                            # Automatisch generierte Inhalte (nicht in Git)
│ ├── doc/
│ ├── mech/
│ ├── software/
│ ├── bom.{csv|ods}                 # Automatisch generierte Stückliste
│ └── okh.toml                      # Automatisch generiertes OKH-Manifest
├── mod/                            # Git-Submodule, Abhängigkeiten
├─┬ res/                            # Projektbegleitende Dokumente
│ ├── assets/                       # Ablageort für große Dateien
│ ├── concept/                      # Konzeptbeschreibung, Roadmap
│ ├── economic/                     # Kostenkalkulationen
│ └── var/                          # Sonstige Dokumente
├── run/                            # Projektverwaltungs- und Installationsskripte
├─┬ src/                            # Quelldateien der Komponente
│ ├── anim/                         # Quelldateien für Animationen
│ ├── calc/                         # Berechnungen
│ ├── elec/                         # Elektronik, PCB-Designs
│ ├── firmware/                     # Firmware-Quellen
│ ├─┬ mech/                         # Mechanische Designs, 3D-CAD-Modelle
│ │ └── case.fcstd
│ ├── software/                     # Software-Quellen
│ └── test/                         # Testcode oder Designs für Testvorrichtungen
├── bom.{csv|ods}                   # Stückliste (Bill-of-Materials)
├── LICENSE.txt                     # Repository-Lizenz
├── okh.toml                        # OKH-Manifest, manuell verwaltet
└── README.md                       # Grundlegende Projektbeschreibung
```

---


## Namenskonvention

Schema: `<Funktion>[_<Parameter>][_<Norm>|<Artikel-/Produktbezeichnung>].ext`

| Bestandteil | Beschreibung |
|---|---|
| **Funktion** | So kurz, aber so bezeichnend wie möglich anhand der Funktion (Funktionsaspekt[^7]). Abkürzungen in der übergeordneten Ordnerbezeichnung angeben: `tool-changer_tc` |
| **Parameter** *(optional)* | Wenn Funktion allein nicht ausreicht: Ort (Ortsaspekt[^7]) oder Ausprägung (Geometrie, Leistung, Anschlüsse …) |
| **Norm** *(optional)* | Bei normierten Teilen: Norm angeben |
| **Artikel-/Produktbezeichnung** *(optional)* | Bei konkreten Herstellerprodukten: eindeutige Bezeichnung statt Norm |

**Weitere Regeln:**

- Wörter innerhalb eines Aspekts werden mit `-` voneinander getrennt, Aspekte mit `_`
- Schreibe alle Wörter **klein**
- Verwende **englische** Bezeichnungen


### Beispiel

```txt
../tool-changer-system_tcs/
    └ actuation-mechanism/
        └ circlip-for-shafts_din-471-6x0p7.fcstd

../tool-storage-system_tss/
    └ tss.prt
```

[^5]: <https://gitlab.com/OSEGermany/osh-dir-std>
[^6]: <https://www.interfacerproject.eu/news/buildworkshops/>
[^7]: DIN EN 81346-1
