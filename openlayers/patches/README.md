# Modifizierter OpenLayers Build

## Hinweis

Der Patch `patches/advgml3.js` funktioniert ausschließlich mit der Version
4.6.4. Da mit Version v5.0.0 die Bibliothek als eine Reihe von ES-Modulen
überarbeitet wurde, um jegliche Abhängigkeit vom Closure Compiler zu beseitigen
und die Kompatibilität mit Mainstream-Modul-Bundlern zu verbessern.

Der Patch ist zur Zeit leider nicht als ES-Modul verfügbar!

## Einrichtung der Entwicklungsumgebung

Für die Erstellung eines modifizierten OpenLayers Build wird zunächst der
Quellcode von OpenLayers in der Version 4.6.4 benötigt. Dieser ist unter
`https://github.com/openlayers/openlayers/archive/v4.6.4.zip` herunterzuladen.
In dem entpackten Archiv ist eine `README`-Datei enthalten, mit dessen Hilfe
eine Entwicklungsumgebung für OpenLayers eingerichtet werden kann.

## Build

Nach der Einrichtung der Entwicklungsumgebung können modifizierte und neue
Quellcode-Dateien in das `src` Verzeichnis des OpenLayers Repositorys abgelegt
werden.

Am Beispiel der `patches/advgml3.js` sollte die Datei in das Verzeichnis
`openlayers-4.6.4/src/ol/format` gelegt werden.

Der build kann danach mit dem Befehl

```shell
make build
```

gestartet werden.

Im Ordner `build` ist dann die modifizierte und minifizierte OpenLayers
Bibliothek `ol.js` zu finden, die im WFS ALKIS Beispiel genutzt werden kann.

