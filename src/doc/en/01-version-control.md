# 1. Versionsverwaltung und Versionierung

## Versionsverwaltung

Verwende ein **Versionsverwaltungssystem** (Version Control System – VCS)[^1]!

Es überwacht wer, wann, was am Repository ändert.
Neben einer Reihe weiterer Vorteile bildet es die Grundlage für eine gültige Lizenzierung. Häufig verlangen freie Lizenzen, wie die `CERN-OHL-2`, dass Veränderungen dargelegt werden müssen.
Es unterstützt bei der Synchronisierung verschiedener Entwicklungsstände, wodurch eine Parallelisierung der Entwicklung einzelner Features und die effiziente Verwaltung mehrerer Varianten ermöglicht wird.
Konkrete Entwicklungsstände können anhand einer Versionsnummer eindeutig identifiziert, Änderungen zurückverfolgt oder Beiträge zusammengeführt werden – kurz: es sorgt für eine strukturierte Zusammenarbeit mit anderen Personen, weltweit.

---

### Empfehlung: Git

=== "Eigenschaften"

    - Open Source Software
    - Kompatibel zu GitHub, GitLab, …
    - Wird unabhängig lokal verwendet – kein Server oder Service-Anbieter notwendig
    - Verfügbar für Windows, macOS, Linux, Android
    - **Link:** <https://git-scm.com/>

=== "Grafische Oberflächen"

    Git ist ein Kommandozeilenwerkzeug. Es existieren aber zahlreiche Oberflächen für verschiedene Betriebssysteme.
    Fortgeschrittene arbeiten meist direkt mit den Befehlen im Terminal. Alle Werkzeuge/Oberflächen sind miteinander kompatibel.
    Wähle daher das Werkzeug, mit welchem Du am besten zurecht kommst.

    **Empfehlung: `VSCode`** mit `GitGraph`[^2] oder `GitLens`[^3] Extension

    - Der Editor kann für viele weitere Entwicklungsprozesse konfiguriert und erweitert werden, z. B. zur Erstellung Markdown-basierter Dokumentationen (siehe [Dokumentation](03-dokumentation.md)), zur Veränderungsverfolgung mittels Dateivergleich (`diff-tool`), zur Validierung mittels `Linter` usw.
    - `VSCode` bildet damit eine gute Ausgangsbasis für eine „Open Source Hardware Entwicklungsumgebung"
    - **Link:** <https://code.visualstudio.com/Download>

=== "VSCodium (telemetriefrei)"

    Telemetriefreie Version auf Basis von `VSCode`:

    - **Repository:** <https://github.com/VSCodium/vscodium/releases>
    - **Windows:** `VSCodium-x64-<version>.msi`
    - **Linux:** nutze das Paket deines Paketmanagers!

    !!! warning "Hinweis"
        `VSCodium` hat lizenzbedingt keinen Zugriff auf den Visual Studio Code Marketplace, kann aber konfiguriert werden (Verstoß gegen die Nutzungsbedingungen).

Neben Git existieren viele weitere Open Source Versionsverwaltungssysteme, wie Apache Subversion (SVN), Mercurial, Bazaar oder BitKeeper.

---

## Versionierung

Es muss zwischen **interner** und **externer** Versionsnummer unterschieden werden. Eine externe Versionsnummer entspricht mehr einer Produktbezeichnung und ist vor allem aus marketingtechnischer Sicht von Bedeutung. Interne und externe Versionierung können daher voneinander abweichen (siehe Windows NT Versionen 3.1 bis 10).

Die Versionsnummer ist des Weiteren relevant zur eindeutigen Zuordnung der Entwicklungsdokumente zu einem konkreten Artikel, welcher durch eine Artikelnummer identifiziert wird. Die Versionsnummer kann ein Teil der Artikelnummer sein.

Für die Entwicklung ist die **interne Versionsnummer** maßgeblich. Grundsätzlich ist man frei darin ob man nach einem bestimmten Schema Entwicklungsfortschritte markiert und wie dieses Schema aufgebaut ist. Versionsnummern sind häufig mehrteilig. Jede Teilnummer kann hierbei eine spezielle Bedeutung erhalten.

### Semantische Versionierung

Das Konzept der **Semantischen Versionierung** (`Semantic Versioning 2.0.0`)[^4] ist eine Konvention für aussagekräftige Versionsnummern.

Die Versionsnummer nimmt folgende Struktur ein:

```
MAJOR.MINOR.PATCH
```

Eine Erhöhung an den einzelnen Stellen bedeutet:

| Stelle | Bedeutung | Auslöser |
|---|---|---|
| `MAJOR` | Inkompatible Schnittstellenänderungen | Funktionen/Anschlüsse entfernt oder Signaturen verändert |
| `MINOR` | Neue Funktionen mit Abwärtskompatibilität | Rückwärtskompatible Erweiterungen |
| `PATCH` | Abwärtskompatible Fehlerbehebungen | Korrekturen, kleinere Änderungen |

[^1]: <https://de.wikipedia.org/wiki/Versionsverwaltung>
[^2]: <https://github.com/mhutchie/vscode-git-graph>
[^3]: <https://github.com/gitkraken/vscode-gitlens>
[^4]: <https://semver.org/lang/de/>
