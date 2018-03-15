# Theoretische Einführung
- Was ist OpenLayers?
- Was kann OpenLayers?
- Anwendungsbeispiele
- Gemeinschaft
- Historie
- Warum OpenLayers?

# Was ist OpenLayers?

## Selbstdarstellung des Projektes
> A high-performance, feature-packed library for all your mapping needs.

<http://openlayers.org/>

## Merkmale
- Alternative zu GoogleMaps seit 2006
- Freie Software / OpenSource ([BSD-Lizenz](https://de.wikipedia.org/wiki/BSD-Lizenz))
- Bibliothek (API) zur Erstellung interaktiver Karten auf Webseiten
- 100% JavaScript (clientseitig) / AJAX
- unterstützt offene (WMS,WFS) und proprietäre Standards (ArcGIS Map und Image Services, kein Feature Service)
- Universal einsetzbar
  - [Web-based metabolic network visualization with a zooming user interface](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3113945/)

## Was ist OpenLayers nicht?
- keine Bibliothek zum Erstellen von Oberflächen
- keine Funktionen für einfaches JavaScript

# Was kann OpenLayers?
## Erster Eindruck
- http://openlayers.org/en/latest/examples/
- http://openlayers.org/en/latest/examples/simple.html
- http://openlayers.org/en/latest/examples/geojson.html
- http://openlayers.org/en/latest/examples/gpx.html
- http://openlayers.org/en/latest/examples/layer-swipe.html
- http://openlayers.org/en/latest/examples/wms-tiled.html
- http://openlayers.org/en/latest/examples/getfeatureinfo-tile.html
- http://openlayers.org/en/latest/examples/vector-wfs.html
- http://openlayers.org/en/latest/examples/arcgis-image.html

# Eine einfache Karte
```javascript
var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  target: 'map',
  view: new ol.View({
    center: ol.proj.fromLonLat([7.112222,51.430556]),
    zoom: 11
  })
});
```

<https://bjoernschilberg.github.io/trainings/openlayers/beispiele/erste_karte.html>


## Erste Übung
- [Erste Karte](uebungen/README.md#erste-karte)

# Interaktions-,Steuer- und Navigationsmöglichkeiten

## Steuerelemente
- <http://openlayers.org/en/latest/apidoc/ol.control.html>
  - Übersichtskarte
  - ~~Ebenenübersicht~~
  - ~~[Permalink](http://openlayers.org/en/latest/examples/permalink.html)~~
- ~~Navigations-Historie~~

### Übungen
- [Steuerelemente einbinden](uebungen/README.md#steuerelemente-einbinden)

## Interaktionen
- <https://openlayers.org/en/latest/apidoc/ol.interaction.html>
  - Zooming per Doppelklick, Mausrad, Zoombar, Zoombox, Tastatur
  - Panning per Drag&Drop
  - Pan-Steuerkreuz, Tastatur
  - Auswählen (Select)
  - Zeichnen (Draw)
  - Ändern (Modify)

### Übungen
- [Interaktionen einbinden](uebungen/README.md#interaktionen-einbinden)

## Unterstütze Daten- & Layerquellen

| Freie Ebenen | Restriktive Ebenen |
| --- | --- |
| OGC WMS | ~~Google Maps~~ |
| OGC WFS(-T) | ~~Yahoo! Maps~~ |
| OGC TMS | ~~MSN Virtual Earth~~ |
| OGC GML | ~~Map24~~ |
| ~~GeoRSS~~  | ~~Mulitmap~~ |
| GeoJSON | Bing |
| KML | |
| GPX | |
| WKT | |
| OSM | |

- Liste der direkt unterstützten Daten- & Layerquellen:
  - <http://openlayers.org/en/latest/apidoc/ol.source.html>
  - <http://openlayers.org/en/latest/apidoc/ol.format.html>
- Über zusätzliche Biblotheken, können auch CSV/Shape-Dateien/GeoTIFF direkt ein gebunden werden.
  - <https://github.com/mapbox/csv2geojson>
  - <https://github.com/calvinmetcalf/shapefile-js>
    - <https://github.com/mapbox/shp-write>
  - <https://github.com/constantinius/geotiff.js>

### Übungen

- [Weitere Daten- & Layerquellen einbinden](uebungen/README.md#weitere-daten---layerquellen-einbinden)

# Anwendungsbeispiele

## Populäre
- https://map.geo.admin.ch/
- https://geoportal.bayern.de/
- https://www.umweltkarten-niedersachsen.de

## Weitere
- http://karten.nabu.de/stoerche.html
- http://viewer.klimaenergie2020.eu/
- https://bb-viewer.geobasis-bb.de/
  - http://eks.brandenburg.de/

# Gemeinschaft
- Website http://www.openlayers.org
- API Dokumentation http://openlayers.org/en/latest/apidoc/
- Benutzer Dokumentation http://openlayers.org/en/latest/doc/
- Beispiele http://openlayers.org/en/latest/examples/
- Quelltext https://github.com/openlayers/openlayers
- Maillinglisten: `users@openlayers.org` (Anwender), `dev@openlayers.org` (Entwickler)
- Kernentwickler von: Boundless, camptocamp, Planetlabs,...

# Geschichte
## Timeline
- Feb. 2005: GoogleMaps veröffentlicht
- Juni 2005: GoogleMaps API erschienen
- MetaCarta (USA) entwickelte freie Alternative:
  - Juni 2005: Erster Prototyp
  - Juli 2006: OpenLayers 1.0
  - Aug. 2006: OpenLayers 2.0
    - sehr bekannt, weitverbreitet
    - leistungsstarkes Tiling (Kachelung der Karte)
    - einfache Integration (durch JavaScript)
- seit Nov. 2007: OSGeo-Projekt
- 2007 erstmals auf der FOSSGIS vorgestellt:
  - <https://www.fossgis.de/wiki/Konferenz_2007/Abstracts#Dynamische_Karten_mit_Hilfe_von_AJAX>
- 2010 wurde MetaCarta von Nokia gekauft
  - Das Team von MetaCarta entwickelt die Suchmaschine für <https://wego.here.com>
  - Hauptentwickler Christopher Schmidt ging zu Google (Youtube)
- v3.0.0, August 2014
  - Komplettes rewrite-from-scratch. Warum?
    - ~7 Jahre alte Architektur
    - Modernste Web-Technologien
    - Moderne Browser
  - teilweise crowd-funded
  - Achtung API nicht kompatibel mit v2.0.0.
  - Einführung Google Clourse Bibliothek und Compiler
  - Dokumentation via jsdoc3
  - Fokus: Mobile first
  - Styling ausschließlich über CSS.
  - [ArcGIS Rest Tile Layer](http://openlayers.org/en/latest/apidoc/ol.source.TileArcGISRest.html) (Map und Image Services, kein Feature Service)
  - autoPan von Overlay im sichtbaren Bereich
    - <http://openlayers.org/en/latest/examples/popup.html>
  - Neue Events für Feature Selection
  - Events zur Überwachung des Ladens von Kacheln
- v4.0.0, Februar 2017
- zukünftig
  - Vollständige Entfernung der Abhängigkeit von closure-library
    - <https://github.com/openlayers/openlayers/issues/4128>
    - <https://github.com/openlayers/openlayers/issues/6263>
    - <https://github.com/openlayers/openlayers/issues/5623>
    - <https://github.com/openlayers/openlayers/pull/5793>
    - <https://github.com/openlayers/openlayers/issues/6263#issuecomment-267838202>

# Weitere Infos zu den einzelnen Versionen
<https://github.com/openlayers/openlayers/releases>

# Version3
## v3.4.0
- Dateline wrapping tile-sources
- Circles in Draw interaction
## v3.4.0 — v3.10.0
- Einige experimentelle Features entfernt (two-way-binding, FeatureOverlay,...)
- Spezifische Vektor sources entfernt; => format in Vector-source
- Translate Interaktion
- IE 9 mit ES5-Shims, Edge-Support
- Zahlreiche Bugfixes
- Performanceverbesserungen
- Bessere Dokumentation
## v3.11.0
- Clientseitige Rasterreprojektion
  - <http://openlayers.org/en/latest/examples/reprojection.html>
- Mapbox Vector Tiles
  - <http://openlayers.org/en/latest/examples/mapbox-vector-tiles.html>
- Color Manipulation
  - <http://openlayers.org/en/latest/examples/color-manipulation.html>
- Raster Source
  - <http://openlayers.org/en/latest/examples/raster.html>
- Weiche Übergänge bei URL-Änderungen
  - <http://openlayers.org/en/latest/examples/reusable-source.html>
- Multiline Labels (Vektoren)
- ol.source.CartoDB
- ol.source.ImageArcGISRest
- ~~ol.source.MapQuest~~
- ol.source.Raster
## v3.15.0
- Support zooming out for ol.interaction.DragZoom  (#5031)
## v3.16.0
- Add ol.source.ImageArcGISRest for ArcGIS REST image layer support (#3880)
## v3.17.0
- ol.source.MapQuest removal
- Retina/HiDPI support out of the box
## v3.18.0
- Addition of Intersects and Within filters to ol.format.ogc.filter
## v3.20.0
- WebGL Support

# Version4
- Kein kompletter rewrite
- Keine massiven API-Brüche. Aber es gibt welche.
  - Tip: Release Notes lesen.
- Einführung: [Semantic versioning](http://semver.org/lang/de/)

## Wiederverwendbarkeit
- Beta: npmjs.com/package/ol
- ~~ES6~~ ES2015 Module
- Hintergrund: https://github.com/openlayers/openlayers/pull/6302

## Exkurs ES2015
```javascript
import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import OSM from 'ol/source/osm';
import proj from 'ol/proj';

new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: proj.fromLonLat([13.4319466, 48.5667364]),
    zoom: 14
  })
});
```
Komplette Anleitung für die Verwendung mit [rollup.js](https://rollupjs.org/)
unter <https://gist.github.com/tschaub/32a5692bedac5254da24fa3b12072f35>.


## Wiederverwendbarkeit
- Ermöglicht die Verwendung in JavaScript module bundler ([webpack](https://webpack.js.org/), [rollup.js](https://rollupjs.org/))
- <https://webpack.github.io/assets/what-is-webpack.png>
- Vorteile Reduzierung der Gesamtgröße der Anwendung.
- Benötigt aber noch closure-Abhängigkeiten.
- Buildprozess dauert lange. Viele Abhängigkeiten müssen aufgelöst werden.

## Verbesserungen getZoom / setZoom
Vorher
```javascript
view.setZoom(1.5);
view.getZoom(); // undefined
```
Nachher
```javascript
view.setZoom(1.5);
view.getZoom(); // 1.5
```
Details:
- <https://github.com/openlayers/openlayers/issues/4333>
- <https://github.com/openlayers/openlayers/pull/5674>

### Übung
Testen Sie `setZoom` und `getZoom` in der Browser Console der Developer
Tools/DevTools am Beispiel der
[ersten_Karte](https://bjoernschilberg.github.io/trainings/openlayers/beispiele/erste_karte.html).


## Geometrien skalieren
```javascript
var geom = new ol.geom.Polygon([[
    [-1, -2],
    [1, -2],
    [1, 2],
    [-1, 2],
    [-1, -2]
]]);

geom.scale(2);

geom.scale(2, 1);

geom.scale(2, 1, [-1, -2]);
```
- <https://bjoernschilberg.github.io/trainings/openlayers/beispiele/scale.html>
- <https://github.com/openlayers/openlayers/issues/5684>
- <https://github.com/openlayers/openlayers/pull/5685>

## Intersects & Within
Damit nur Feature zurückkommen die sich innerhalb des Polygons befinden. Vorteil: Performanter.
```javascript
new ol.format.WFS().writeGetFeature({
  srsName: 'EPSG:4326',
  featureTypes: ['area'],
  filter: ol.format.filter.intersects(
    'the_geom',
    new ol.geom.Polygon([[
        [10, 20],
        [10, 25],
        [15, 25],
        [15, 20],
        [10, 20]
    ]])
  )
});
```

<https://github.com/openlayers/openlayers/pull/5668>

## overlaps & Vector / VectorTile
```javascript
new ol.source.Vector({
  url: 'data/westfalen_kreise.geojson',
  format: new ol.format.GeoJSON(),
  overlaps: false
})
```
Sinnvoll bei nicht überlappenden Geometrien. Vorteil höhere Ausführungsgeschwindigkeit.

Details: <https://github.com/openlayers/openlayers/pull/5196>

## Übung
Testen Sie dies an dem `GeoJSON`-Beispiel aus:
<https://bjoernschilberg.github.io/trainings/openlayers/beispiele/geojson.html>.

## rotateWithView
- Bspw. auf Kartenlabels anwendbar
- Diese drehen sich mit
- <https://github.com/openlayers/openlayers/pull/5050>

## Sonstige Änderungen
- `style.clone()` (PR5832) !!!
  - <http://openlayers.org/en/latest/apidoc/ol.style.Style.html#clone>
  - Kopie vom Stil und dieser ist dann veränderbar.
- Neu Interaction: `ol.interaction.Extent` (PR 5290)
  - <http://openlayers.org/en/latest/apidoc/ol.interaction.Extent.html>
- Closure library entfernt
  - Umständlicher, großer Builds.
- DOM Renderer entfernt (nur noch Canvas, WebGL)
  - <https://github.com/openlayers/openlayers/pull/5815>
- view.animate() statt beforeRender
- WebGL Vektor Support erweitert (immer noch experimentell, PR 5462)

# Zukünftiges
- Leichtere Wiederverwendbarkeit (u.a. wegen ES2015 Modulen & Co.)
- Leichtere Partizipation am Projekt
- WebGL Verbesserungen (hoffentlich)
- Canvas Performance

# weitere Funktionen
- PinchZoom & fraktionaler Zoom
- forEachFeatureAtPixel
- Freihandzeichnen (für Redlinining, nicht für digitalisieren geeignet)

## Übung
- [Metadaten der Vektor Geometrieebene abfragen](uebungen/README.md#metadaten-der-vektor-geometrieebene-abfragen)

# Vektor Geometrieebenen stylen

## Layer style
Ein Vektorlayer akzeptiert als Wert für die style-Konfigurationsoption eine Instanz:
- von `ol.style.Style`,
- ein Array von `ol.style.Style`
- oder eine Funktion.

Beispiel für die Verwendung eines statischen `ol.style`-Objektes:
```javascript
var layer = new ol.layer.Vector({
  source: new ol.source.Vector(),
  style: new ol.style.Style({
    // ...
  })
});
```

## ol.style.Style-Objekt
Besitzt vier Schlüssel:
- `fill`
- `image`
- `stroke`
- `text`
- `zIndex`(optional)
Rückgabe:
Array von `ol.style.Style`-Objekten.

Angenommen alle Features sollten rot gezeichnet werden, außer denjenigen, die
ein class-Attribut mit dem Wert "someClass" haben (und diese sollen wie oben
blau gefüllt sein und einen 1-Pixel breiten Rand in oliv haben), so könnte die
Funktion wie folgt aussehen.

```javascript
style: (function() {
  var someStyle = [new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'blue'
    }),
    stroke: new ol.style.Stroke({
      color: 'olive',
      width: 1
    })
  })];
  var otherStyle = [new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'red'
    })
  })];
  return function(feature, resolution) {
    if (feature.get('class') === "someClass") {
      return someStyle;
    } else {
      return otherStyle;
    }
  };
}())
```
Wegen der besseren Performance und damit die style Funktion nicht mehrmals
während des Renders aufgerufen wird, da ansonsten Artefakte beim Darstellen
entstehen können. Sollten wenn möglich, die tatsächlichen Stil-Objekte
außerhalb der Funktion möglichst nur einmal erzeugt werden und in der Funktion
nur Referenzen hierauf zurückgegeben werden. Im obigen Beispiel wird hierzu
eine `closure` verwendet.

Feature können auch in Abhängigkeit der `resolution` ausgestaltet werden.

## Stildeklarationsböcke: Symbolizer

Ähnlich zu den Stildeklarationblöcken in CSS.
```css
h1 {
  color: green;
}
```
Gibt es in OpenLayers die Symbolizer. Diese sind Instanzen der Klassen im
Namensraum `ol.style`.

Hier ein Beispiel für Polygon-Features welche mit transparent blauem
Hintergrund und einem 3-Pixel breiten Rahmen in blau dargestellt werden soll.
```javascript
new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: 'blue',
    width: 3
  }),
  fill: new ol.style.Fill({
    color: 'rgba(0, 0, 255, 0.1)'
  })
})
```
In diesem Beispiel wurden die zwei Symbolizer `Stroke` und `Fill` verwendet.

Je nach Geometrietyp können verschiedene Symbolizer verwendet werden. Linien
verhalten sich weitestgehend wie Polygone, akzeptieren jedoch keine Füllung.
Punkte können mittels `ol.style.Circle` (für Kreissymbole) oder `ol.style.Icon`
(z.B. für png-Bilder) ausgestaltet werden.
Weitere Klassen:
- <http://openlayers.org/en/latest/apidoc/ol.style.html>

Beispiel für Kreissymbole:
```javascript
new ol.style.Circle({
  radius: 10,
  fill: new ol.style.Fill({
    color: 'red',
    opacity: 0.6
  }),
  stroke: new ol.style.Stroke({
    color: 'blue',
    opacity: 0.4
  })
});
```

### Übung
-  [Vektor Geometrieebenen stylen (GeoJSON)](uebungen/README.md#vektor-geometrieebenen-stylen-geojson)

## Style-Funktion
Ein Vektorlayer akzeptiert als Wert für die style-Konfigurationsoption auch
eine Funktion, in welcher unterschiedliche Stile anhand von Featureattributen
zurückgegeben werden kann. Ist zum Beispiel bei Klassifikation sinnvoll.

Der Funktion werden zwei Argumente übergeben: Das zu stylende `feature` und
die aktuelle `resolution`. Im folgenden Beispiel werden Features, welche
ein Attribut `class` und ein Wert `someClass` besitzen speziell
ausgestaltet.
```javascript
var layer = new ol.layer.Vector({
  source: new ol.source.Vector(),
  style: function(feature, resolution) {
    if (feature.get('class') === 'someClass') {
      // create styles...
      return styles;
    }
  },
});
```

### Übung

## Pseudoklassen
In CSS sprechen die CSS-Pseudoklassen `:hover`, `:active` und
`:focus` auf unmittelbare Interaktion des Benutzers an. Die Pseudoklassen
selektieren Elemente, die
- mit dem Mauszeiger berührt werden (`:hoveri`; englisch to hover: schweben),
- den Fokus (`:focus`) erhalten, zum Beispiel durch die Tabulatortaste (↹ ) oder
- aktuell angeklickt sind (`:active`).
Ursprünglich für Verweise gedacht, sind diese Pseudoklassen in allen relevanten
Browsern auf beliebige Elemente anwendbar.

In OpenLayers gibt es mit `ol.interaction.Select` ein ähnliches Konzept.

```javascript
  new ol.interaction.Select({
          style: new ol.style.Style({
            stroke: new ol.style.Stroke({
              color: 'red',
              width: 3
            }),
            fill: new ol.style.Fill({
              color: 'rgba(0, 0, 255, 0.1)'
            })
          })
        })
```

### Übung
- [Features selektieren](uebungen/README.md#features-selektieren)


# Todo
- LonLat vs LatLon
- <https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c> (Rollup für Biblotheken, Webpack für apps)

# OpenLayers Builder
- http://openlayers.org/en/v3.5.0/builder/ nur für v3 nicht für v4!?

# weitere Quellen
- <http://openlayers.org/workshop/en/index.html>
- <https://github.com/marcjansen/openlayers-fossgis2017>
