# 7. Prinzipien

In der Software-Entwicklung stößt man immer wieder auf sehr zentrale Grundprinzipien. Auch wenn sich diese auf Software beziehen so lassen sich durch aus Parallelen zur Entwicklung von Konstruktionen ziehen. Hier sollen einige Prinzipien genannt werden, die als Hilfestellung und Grundlage für (Design-)Entscheidungen dienen sollen.
Nicht selten widersprechen sich Regeln. Spätestens dann muss von ihnen abgewichen werden. Entscheidend ist sich bewusst zu sein, welche Konsequenzen das Verletzen der Regeln haben wird. Sie dienen daher als Ausgangspunkt einer Entwicklung. "Breche niemals die Regeln, außer du weißt was du tust."

Bekannt als Unix-Philosophie fasst Raymond[^13] diese in 17 Regeln zusammen:

1. Regel der Modularität: Schreibe einfache Bestandteile, die durch saubere Schnittstellen verbunden werden.
2. Regel der Klarheit: Klarheit ist besser als Gerissenheit.
    - Entwerfe Komponenten so, dass ihre Funktion leicht erkennbar ist. Dies reduziert Dokumentationsaufwand.
3. Regel des Zusammenbaus: Entwirf Programme so, dass sie mit anderen Programmen verknüpft werden können.
4. Regel der Trennung: Trenne den Grundgedanken von der Umsetzung, trenne die Schnittstellen von der Verarbeitungslogik.
5. Regel der Einfachheit: Entwirf mit dem Ziel der Einfachheit; füge Komplexität nur hinzu, wenn es unbedingt sein muss. ("Keep it simple and stupid", "Ockhams Rassiermesser")
6. Regel der Sparsamkeit: Schreibe nur dann ein großes Programm, wenn sich klar zeigen lässt, dass es anders nicht geht.
7. Regel der Transparenz: Entwirf mit dem Ziel der Durchschaubarkeit, um die Fehlersuche zu vereinfachen.
8. Regel der Robustheit: Robustheit ist das Kind von Transparenz und Einfachheit.
9. Regel der Darstellung: Stecke das Wissen in die Datenstrukturen, so dass die Programmlogik dumm und robust sein kann.
10. Regel der geringsten Überraschung: Mache beim Entwurf der Schnittstellen immer das Nächstliegende, welches für die wenigsten Überraschungen beim Benutzer sorgt.
11. Regel der Stille: Wenn ein Programm nichts Überraschendes zu sagen hat, soll es schweigen.
12. Regel des Reparierens: Wenn das Programm scheitert, soll es das lautstark und so früh wie möglich tun.
13. Regel der Wirtschaftlichkeit: Die Arbeitszeit von Programmierern ist teuer; spare sie auf Kosten der Rechenzeit.
14. Regel der Code-Generierung: Vermeide Handarbeit; schreibe Programme, die Programme schreiben, falls möglich.
15. Regel der Optimierung: Erstelle Prototypen, bevor du dich an den Feinschliff machst. Mache es lauffähig, bevor du es optimierst.
16. Regel der Vielseitigkeit: Misstraue allen Ansprüchen auf „den einzig wahren Weg“.
17. Regel der Erweiterbarkeit: Entwirf für die Zukunft, denn sie wird schneller kommen als du denkst.

[^13]: Deutsche Übersetzung von: <https://cdn.nakamotoinstitute.org/docs/taoup.pdf>, entnommen aus: <https://de.wikipedia.org/wiki/Unix-Philosophie>

Ergänzend seien folgende Regeln zu nennen:

- “Konvention vor Konfiguration” (wie dieser Leitfaden)
    - Eine Konvention/Richtlinie reduziert späteren Dokumentationsaufwand
- Spezialisierung: Anstatt so viele Funktionen wie möglich zu integrieren ist es besser diese in eigene Komponenten aufzuteilen. ("Jede Komponente/Modul hat eine einzige Aufgabe und die erfüllt es auf die Beste Art und Weise!")
    - Dies führt zu einfacheren Schnittstellen und besserer Austauschbarkeit
