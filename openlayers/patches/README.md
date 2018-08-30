# Modifizierter OpenLayers Build

## Einrichtung der Entwicklungsumgebung

Für die Erstellung eines modifizierten OpenLayers Build wird zunächst der
Quellcode von OpenLayers in der Version 5.2.0 benötigt. Dieser ist unter
`https://github.com/openlayers/openlayers/archive/v5.2.0.zip` herunterzuladen.
In dem entpackten Archiv ist eine `README`-Datei enthalten, mit dessen Hilfe
eine Entwicklungsumgebung für OpenLayers eingerichtet werden kann.

## Build

Nach der Einrichtung der Entwicklungsumgebung können modifizierte und neue
Quellcode-Dateien in das `src` Verzeichnis des OpenLayers Repositorys abgelegt
werden.

Am Beispiel der `patches/advgml3.js` sollte die Datei in das Verzeichnis
`openlayers-5.2.0/src/ol/format` gelegt werden.

Der build kann danach mit dem Befehl

```shell
make build
```

gestartet werden.

Im Ordner `build` ist dann die modifizierte und minifizierte OpenLayers
Bibliothek `ol.js` zu finden, die im WFS ALKIS Beispiel genutzt werden kann.

