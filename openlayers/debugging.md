# OpenLayer debuggen

## Voraussetzungen
- Webbrowser (Mozilla Firefox oder Google Chrome/Chromium)
  - [Firefox Developer Tools](https://developer.mozilla.org/son/docs/Tools) oder [Chrome DevTools](https://developer.chrome.com/devtools)

## ol-debug.js

```ol-debug.js``` ist eine menschenlesbare Version von ol3, die zum Debuggen &
Fehler melden verwendet werden sollte.

Wenn Sie einen Fehler feststellen, ist es wichtig, dass das Debugging des
Fehlers auf Basis von ```ol-debug.js``` geschieht. Wenn möglich, sollte auch
der zum Fehler führende stack trace Teil der Fehlermeldung sein. Ein solcher
stack trace lässt sich etwa mittels verschiedener Browserwerkzeuge (etwa Chrome
DevTools) generieren.



Produzieren Sie einen Fehler in der Datei ```debug.html```, indem Sie hierzu
den Layertyp von ```ol.layer.Tile``` zu ```ol.layer.Image``` ändern. Auf der
Konsole sollte folgende Fehlermeldung angezeigt werden:

```
ol.js:692 Uncaught TypeError: h.Y is not a function
    at rv.ud (ol.js:692)
    at ei.Dg (ol.js:173)
    at H.k.Ip (ol.js:291)
    at H.<anonymous> (ol.js:277)
```

Niemand wird Ihnen hierzu bei Fragen weitere Informationen oder Hilfe geben können.

Wenn statt ```ol.js``` jedoch ```ol-debug.js``` eingebunden wird, so hält der
JavaScript-Debugger des Browser nach einem Neuladen der Seite an der kritischen
Stelle die Ausführung des Codes an, und ein Debugging ist deutlich vereinfacht.

Auf der Konsole sollte nun folgende Fehlermeldung angezeigt werden:
```
Uncaught TypeError: imageSource.getImage is not a function
    at ol.renderer.canvas.ImageLayer.prepareFrame (ol-debug.js:68258)
    at ol.renderer.canvas.Map.renderFrame (ol-debug.js:23325)
    at ol.Map.renderFrame_ (ol-debug.js:32008)
    at ol.Map.<anonymous> (ol-debug.js:30946)
```
