# 4. Lizenzierung

## Allgemeines

Alle Source-Codes/-Designs unterliegen dem **Urheberrecht** der urhebenden Person.
Im deutschen Recht ist das Urheberrecht ein Grundrecht und somit nicht übertragbar (Urheberpersönlichkeitsrecht) – ein Lizenzvermerk (vgl. Copyright etc.) ist nicht notwendig.
Nutzenden Personen werden daher Nutzungsrechte mittels einer **Lizenz** eingeräumt.

Open Source Lizenzen sind „Standard-Nutzungslizenzen" im Urheberrecht und regeln die Verwendung, Veränderung und Verteilung (Veröffentlichung, Verwertung) der bereitgestellten Dateien.

!!! danger "Keine Angabe = Alle Rechte vorbehalten"
    Keine Angabe bedeutet „Alle Rechte vorbehalten": d.h. jegliche Nutzung ohne Erlaubnis der urhebenden Person stellt eine Urheberrechtsverletzung dar!


### Copyleft-Wirkung

Open-Source-Lizenzen werden grundlegend nach ihrer Copyleft-Wirkung unterschieden:

| Typ | Beschreibung |
|---|---|
| **freizügig** (permissive) | Wenige Auflagen, keine Weitergabe-Verpflichtung |
| **schwach** (weak) | Änderungen an der Komponente müssen offen bleiben |
| **stark** (strict) | Alle abgeleiteten Werke müssen unter derselben Lizenz stehen |

!!! warning "Sorgfaltspflicht"
    Dokumentiere und prüfe akribisch die Lizenzen der verwendeten Source-Codes und -Designs und deren Kompatibilität zueinander!

!!! tip "Web-Archiv"
    Webinhalte verändern sich oder können verschwinden. Um zu dokumentieren, dass eine Ressource zu einem bestimmten Zeitpunkt die angegebene Lizenz hatte kann bspw. das Internet Archive[^9] genutzt werden um einen Schnappschuss einer Webseite zu erzeugen.

[^9]: <https://web.archive.org/>


### SPDX & REUSE

Der **„System Package Data Exchange"-Standard** (SPDX, ISO IEC 5692:2021)[^10] definiert eindeutige Bezeichner für die meisten bekannten Open Source Lizenzen und gibt deren Status hinsichtlich ihrer Anerkennung von der Free Software Foundation oder der Open Source Initiative an.

Für eine standardkonforme Lizenzierung ist die Verwendung des **`REUSE`-Tools**[^11] der Free Software Foundation Europe zu empfehlen.

!!! tip "Empfehlung: `REUSE-Tool`"
    Nutze das **REUSE-Tool** zur Lizenzverwaltung!

    - **Link:** <https://github.com/fsfe/reuse-tool>

---

[^10]: <https://spdx.org/licenses/>
[^11]: <https://reuse.software>


## Empfohlene Lizenzen

Sofern die verwendeten externen Komponenten dies zulassen, sollten die eigenen Entwicklungen so **stark/strikt** wie möglich in ihrem Copyleft lizenziert werden:


### Strikte Lizenzierung

| Bereich | Lizenz |
| --- | --- |
| Software | `AGPL-3.0-or-later` |
| Hardware und Elektronik | `CERN-OHL-S-2.0-or-later` |
| Dokumentation | `CERN-OHL-S-2.0-or-later` |

??? note "Warum AGPL statt CERN-OHL-S für Software?"
    Die strikte Variante der CERN-OHL 2 (`CERN-OHL-S-2.0`) schließt Netzwerkdienste als Verbreitungsform nicht mit ein, weshalb für eine strikte Lizenzierung abweichend für Software die `AGPL-3.0` gewählt werden sollte.

??? note "Warum nicht CC-BY-SA-4.0?"
    Für die Dokumentation wird häufig eine `CC-BY-SA-4.0` angewendet. Diese schreibt jedoch die Veröffentlichung der Quelldateien der Dokumentation nicht vor. Sofern die Dokumentation ein integraler Bestandteil des Projekts und für die Herstellung des Produkts notwendig ist kann ebenfalls die CERN-OHL-2.0 in ihrer schwachen und strikten Form verwendet werden. Ansonsten ist sind hier die ``GPL-3.0`` oder die ``EUPL-1.2`` (European Union Public License) zu bevorzugen. Letztere kennt allerdings die CERN-OHL-2.0 noch nicht in ihrer Kompatibilitätsliste[^12].
    Die EUPL-1.2 entspricht allerdings in ihrer Logik ebenfalls einer Software-Lizenz.

[^12]: <https://interoperable-europe.ec.europa.eu/collection/eupl/matrix-eupl-compatible-open-source-licences>


### Schwache und freizügige Lizenzierung

Für alle Aspekte sind jeweils die Varianten der CERN-OHL 2 anwendbar:

| Typ | Lizenz |
| --- | --- |
| Schwach | `CERN-OHL-W-2.0-or-later` |
| Freizügig | `CERN-OHL-P-2.0-or-later` |

**Dokumentation**

Für eine freizügige Lizenzierung einer eigenständigen Dokumentation kann die `CC-BY-4.0` genutzt werden.


### Gemeinfreiheit (Public Domain)

Eine vollständige Freigabe in die Gemeinfreiheit ist nur bedingt möglich – am ehesten mittels `CC0` oder der `Unlicense`.


### Contributors License Agreement (Gemeinschaftswerke)

Sobald mehrere Personen an einer Datei gearbeitet haben, wird diese urheberrechtlich zu einem **Gemeinschaftswerk** – die Zusammenarbeit sollte in einer *Contributors License Agreement* geregelt werden. Ansonsten bedarf es der Zustimmung jeder beteiligten Person!

---


### Erläuterungen

Die urhebende Person darf zu jedem Zeitpunkt ihre Dateien neu lizenzieren. Eine Lizenzänderung wirkt sich nicht auf in der Vergangenheit in Umlauf gebrachte Dateien aus, sondern immer nur auf die aktuell bereitgestellten. Alte Versionen sind daher schwer wieder „einzufangen" und können beliebig weiterlizenziert werden (daher: von strikt zu freizügig).
Für die Dokumentation wird häufig `CC-BY-SA-4.0` angewendet. Diese schreibt jedoch die Veröffentlichung der Quelldateien der Dokumentation nicht vor. Sofern die Dokumentation ein integraler Bestandteil des Projekts und für die Herstellung des Produkts notwendig ist, kann ebenfalls die CERN-OHL-2.0 in ihrer schwachen und strikten Form verwendet werden. Ansonsten sind hier die `GPL-3.0` oder die `EUPL-1.2` (European Union Public License) zu bevorzugen. Letztere kennt allerdings die CERN-OHL-2.0 noch nicht in ihrer [Kompatibilitätsliste](https://interoperable-europe.ec.europa.eu/collection/eupl/matrix-eupl-compatible-open-source-licences).


