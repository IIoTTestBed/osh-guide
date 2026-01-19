# Notizen


## SPS Programmierung

- Entwurf einer Konvention vom CERN: <https://mro-dev.web.cern.ch/docs/drafts/expired/plc-guidelines.html>
    - Achtung: Entwurf ist abgelaufen!

- SCL - Structured Control Language
    - ist allen anderen Sprachen vorzuziehen
    - textbasierter Vergleich der Quelltexte möglich


## Namenskonvention für SPS Programmierung


### Variablen und Konstanten

- Regel: `<Präfix>_[<Baugruppe>_]<Funktion>[_<Parameter>][_<Richtung>]`
    - **Präfix**:
        - Namensraum: globale Variablen und Konstanten ein `G` voranstellen
        - Eingänge und Ausgänge:
            - `i` für Eingänge
            - `q` für Ausgänge
            - `iq` für Ein-/Ausgänge
    - **Baugruppe**: abgekürzte Angabe einer Baugruppe um die Variable grob zuordnen zu können
    - **Funktion**: kurze bestmögliche Beschreibung der Bedeutung, Verwendung von üblichen Abkürzungen aber Vorsicht bei möglicher Verwechslungsgefahr
    - **Parameter**: sofern nötig werden weitere Parameter angehängt, wie Frequenz, Position (vorn, hinten, etc.)
    - **Richtung**: abgekürzt, fwd - forward, bwd - backward, up, down
- Aspekte werden mit `_` getrennt
- Wörter werden mit `-` getrennt

- Konstanten werden durchgehend groß geschrieben

Beispiel:

- `Gq_fm_belt_front_fwd`
    - `G`: globale Variable
    - `q`: Ausgang/Aktor
    - `fm`: Festo Modul, muss aber definiert werden
    - `belt`: Förderband
    - `front`: vorn
    - `fwd`: forward, vorwärts


