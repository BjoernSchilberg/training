# Erste Schritte

## Voraussetzungen

- Webbrowser (Mozilla Firefox oder Google Chrome/Chromium)
  - [Firefox Developer Tools](https://developer.mozilla.org/son/docs/Tools) oder [Chrome DevTools](https://developer.chrome.com/devtools)
- Texteditor
- Grundkenntnisse in HTML und JavaScript
  - <https://gist.github.com/BjoernSchilberg/01f1cd103e58d9c62af5b47110801749>
- OpenLayers-API: <http://openlayers.org/en/latest/apidoc/index.html>
- OpenLayers-Beispiele: <http://openlayers.org/en/latest/examples/>
- erstmal kein Web-Server nötig (läuft lokal im Browser)!
- später wenn doch mal schnell ein Webserver benötigt wird:
  - `python -m SimpleHTTPServer`
  - `python3 -m http.server`
  - `php -S localhost:8000`

## Erste Karte

- Kopieren Sie das Template aus [uebungen/template.html](uebungen/template.html) nach `erste_karte.html`.
- Fügen Sie die nachfolgenden Bestandteile (HTML-Markup, CSS-Deklarationen, JavaScript-Initialisierungs-Code) einer OpenLayers-Karte an die richtige Stellen des kopierten Templates ein.
- Ändern Sie den Titel `<title>` und die Überschrift `<h1>` sinnvoll.

# Bestandteile einer OpenLayers-Karte

## HTML-Markup (Auszeichnung)

```html
<div id="map"></div>
```

## CSS-Deklarationen (Stil)

```css
<link rel="stylesheet" href="https://openlayers.org/en/v5.2.0/css/ol.css" type="text/css" />

<style>
  #map {
    height: 256px;
    width: 512px;
  }
</style>
```

- Diese Regel ist direkt im `<head>` der HTML-Seite innerhalb eines `<style>`-Elementes anzugeben.
- Alternativ können solche Angaben in einem separaten Stylesheet definiert werden.
- OpenLayers macht keine Annahmen zur Größe der Karte (bzw. des Elementes welches die Karte enthalten wird).
  - CSS-Selektor `#map` (id des Ziel-`<div>`)
  - Breite (512px) und Höhe (256px) des Karten-Containers.

## JavaScript-Initialisierungs-Code (Verhalten)

```javascript
    <script>
      var map = new ol.Map({
        // Wert des id-Attributs des Karten-Containers
        // Alternativ: document.getElementById("map")
        target: 'map',
        //Liste (als JavaScript-Array) aller Kartenthemen
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        //Kartenausschnitt
        view: new ol.View({
          //Kartenzentrum
          center: ol.proj.fromLonLat([7.013056,51.450833]),
          //initialen Zoomlevel
          zoom: 12
        })
      });
    </script>
```

# Weitere Daten- & Layerquellen einbinden

## Neue `source` für die erste_karten.html einbinden

- Geben Sie eine neue [ol.source](http://openlayers.org/en/latest/apidoc/ol.source.html) für [ol.layer.Tile](http://openlayers.org/en/latest/apidoc/ol.layer.Tile.html) an.
- Bspw. den `Layer source for the Stamen tile server`.
  - <http://maps.stamen.com/watercolor>
- Suchen Sie dazu in der API nach `stamen`.
  - <https://openlayers.org/en/latest/apidoc/>

## Bing Maps einbinden

- Suchen Sie dazu in der API nach `BingMaps`.
  - <https://openlayers.org/en/latest/apidoc/>
- `imagerySet:` auswählen: <https://msdn.microsoft.com/en-us/library/ff701716.aspx#Anchor_0>
- `key: 'AlIhy1q8XYJ5x5tIpN2qys34e_ZRO8k90J8ykC4RiJdKuz6O-pe4BVl78rhG6UA3'`

Die Bing-API kann nur mit einem API-Schlüssel `key` verwendet werden. Die
Übungsaufgabe / das Beispiel verwendet einen solchen Schlüssel, dieser sollte
nicht für Ihre eigenen Anwendungen verwendet werden. Ein eigener Bing-API-Schlüssel
kann kostenlos nach der Registrierung unter <https://www.bingmapsportal.com/>
erstellt werden.

## Vektor Geometrieebene einbinden (GeoJSON)

- Binden Sie die Westfalen Kreise `data/data/westfalen_kreise.geojson` als
  zusätzliches Vektor-Kartenthema in Ihre Karte ein. (erstmal ohne Style-Informationen).
- Quelle der Daten: <https://www.webgis-westfalen.de/>
- Nützliche Hinweise:
  - <http://openlayers.org/en/latest/apidoc/ol.layer.Vector.html>
    - `source`: <http://openlayers.org/en/latest/apidoc/ol.source.Vector.html>
      - `format` und `url` angeben.
      - `format`: Suchen die dazu in der API nach `GeoJSON`.

## Vektor Geometrieebenen stylen (GeoJSON)

Stylen Sie die Westfalen Kreise nach Ihren Vorstellungen neu. Setzen Sie dazu
am Layer `ol.layer.Vector` einen neuen `ol.style.Style`, welcher die Linien
`ol.style.Stroke`der Polygone in Farbe `color` und Dicke `width` ausgestaltet.
Wählen Sie für die Fläche der Polygone eine ansprechende Füllung mittels
`ol.style.Fill`.

## Metadaten der Vektor Geometrieebene abfragen

Jede Fläche repräsentiert ein
[ol.Feature](http://openlayers.org/en/latest/apidoc/ol.Feature.html) Objekt des
[ol.layer.Vector](http://openlayers.org/en/latest/apidoc/ol.layer.Vector.html)
und jedes Feature hat bspw. die Attribute `Kreisname` und `Oberbürgermeister`.
Registrieren Sie eine Funktion, welche bei jedem
[singleclick](http://openlayers.org/en/latest/apidoc/ol.MapBrowserEvent.html#event:singleclick)-Event,
welcher auf der ol.Map gefeuert wird, die Funktion
[forEachFeatureAtPixel](http://openlayers.org/en/latest/apidoc/ol.Map.html#forEachFeatureAtPixel)
der `map` aufruft und gegebenenfalls weitere Informationen über den Kreis
ausgibt.

Tipps:
HTML-Markup (Auszeichnung)

```html
<div id="info"></div>
```

JavaScript-Schnipsel

```javascript
map.on('singleclick', function(e) {
//map.forEachFeatureAtPixel()
});
```

## Statische Vektoren (ImageVector)

OpenLayers erzeugt ein Rasterbild der Vektordaten mittels `ol.layer.Vector`.
Vorteil:

- kein Neu-Rendern der Vektoren, dadurch höhere Performance
- Funktion von [forEachFeatureAtPixel](http://openlayers.org/en/latest/apidoc/ol.Map.html#forEachFeatureAtPixel) bleibt erhalten.
- Nachteil:
  - Daten weniger scharf gerendert,  Qualität des Renderings
- Sinnvoll bei:
  - großen Datenmengen
  - Daten und Darstellungsstil ändern sich nicht (fix)

```javascript
new ol.layer.Image({
          title: 'Westfalen Kreise',
          renderMode: 'image',
          source: new ol.source.Vector({
            url: 'data/westfalen_kreise.geojson',
            format: new ol.format.GeoJSON(),
          }),
          style: new ol.style.Style({
            stroke: new ol.style.Stroke({
              color: 'blue',
              width: 3
            }),
            fill: new ol.style.Fill({
              color: 'rgba(0, 0, 255, 0.1)'
            })
          })
        })

```

`style` wird  nicht mehr dem Layer sondern der `ol.source.ImageVector` mitgegeben!

# Interaktionen einbinden

- <https://openlayers.org/en/latest/apidoc/ol.interaction.html>

## Drag, Rotate und Zoom

Fügen Sie die Interaktion `DragRotateAndZoom` Ihrer Karte (`Map`) hinzu. Tipp:

```javascript
interactions: ol.interaction.defaults().extend([
  //DragRotateAndZoom()
]),
```

## Features selektieren

Ändern Sie dazu das Beispiel:
[beispiele/geojson.html](../beispiele/geojson.html)
Erweitern Sie die vorhanden Interaktionen um `ol.interaction.Select`.
Erweitern Sie `ol.interaction.Select` um eine `style`-Option.
Orientieren Sie sich dabei an dem bereits vorhandenen Style von
`ol.source.Vector`. Achten Sie dabei darauf sinnvolle und andere Angaben
bei `color` zu wählen.

## Features neuzeichnen (Teil 1)

Ändern Sie dazu das Beispiel:
[beispiele/geojson.html](../beispiele/geojson.html)
Neue Features können mittels `ol.interaction.Draw` gezeichnet werden. Eine
Draw-Interaktion benötigt beim Initialisieren eine entsprechende Vektor-Source
`source` und einen Geometrietyp `type`.

## Features neuzeichnen (Teil 2)

Geben Sie mittels des Eventhandler `drawend` die Koordinaten des
gezeichnetes Feature auf der Konsole aus.

- <http://openlayers.org/en/latest/apidoc/ol.interaction.Draw.Event.html#event:drawend>

## Features modifizieren

Ändern Sie dazu das Beispiel:
[beispiele/geojson_select.html](../beispiele/geojson_select.html)

Um Features zu verändern, wird `ol.interaction.Select` mit
`ol.interaction.Modify` kombiniert. Diese Interaktionen teilen sich einen
gemeinsame Menge an Features (``ol.Collection``). Features welche
`ol.interaction.Select` selektiert wurden, werden zu potentiellen
Kandidaten für die Modifikation mittels `ol.interaction.Modify`.

- Es müssen zwei Interaktionen außerhalb der `map`-Instanz hinzugefügt werden.
- Eine Instanz von `ol.interaction.Select` um Features vor dem Editieren
  auszuwählen, und eine Instanz von `ol.interaction.Modify` um die
  Geometrien tatsächlich zu verändern.
- Beiden Interaktionen wird die gleiche Instanz der Klasse `ol.Collection` zu
  gewiesen. Der Interaktion `ol.interaction.Select` explizit durch
  `features: select.getFeatures()`.

- Die `ol.interaction.Select` ist wie im
  `beispiele/geojson_select.html` mit spezifischem Stil erzeugt worden, so
  dass Features während der Selektion hervorgehoben werden.

# Steuerelemente einbinden

- <http://openlayers.org/en/latest/apidoc/ol.control.html>

## Einen Maßstabsbalken anzeigen

- <http://openlayers.org/en/latest/apidoc/ol.control.ScaleLine.html>

Fügen Sie den nachfolgenden Code-Schnipsel irgendwo innerhalb der `ol.Map`-Konfiguration hinzu:

```javascript
controls: ol.control.defaults().extend([
  new ol.control.ScaleLine()
]),
```

## Stylen des Maßstabsbalken

In der CSS-Deklaration:

```css
.ol-scale-line, .ol-scale-line:not([ie8andbelow]) {
  background: black;
  padding: 5px;
}
```

## Maßstabsbalken auslagern

Der Maßstabsbalken soll in ein separates `<div>`-Element außerhalb der Karte plaziert werden.

```html
<div id="scale-line" class="scale-line"></div>
```

Passen Sie die `controls`-Konfiguration entsprechend an:

```javascript
new ol.control.ScaleLine({
    className: 'ol-scale-line',
    target: document.getElementById('scale-line')
  })
```

Passen Sie die CSS-Deklaration entsprechend an:

```css
.scale-line {
  position: absolute;
  top: 350px;
}
.ol-scale-line {
  position: relative;
  bottom: 0px;
  left: 0px;
}
```

## Eine OverviewMap anzeigen

- Fügen Sie
  [ol.control.OverviewMap](http://openlayers.org/en/latest/apidoc/ol.control.OverviewMap.html)
  hinzu.
- Positionieren Sie die `OverviewMap` rechts oben. Passen Sie CSS-Deklaration entsprechend an.

```css
.ol-custom-overviewmap,
.ol-custom-overviewmap.ol-uncollapsible {
   bottom: auto;
   left: auto;
   right: 0;
   top: 0;
}
```

```javascript
className: 'ol-overviewmap ol-custom-overviewmap'
```

## MousePosition anzeigen

- Fügen Sie der Karten die MousePosition hinzu.
- Wird diese in `lat lon` angezeigt? Wenn nicht ändern Sie die Anzeige zu `lat lon`
  mit der Angabe von `projection`.
- Werden Ihnen zu viele Nachkommastellen angezeigt? `coordinateFormat` in
  Verbindung mit `ol.coordinate` schafft Abhilfe.

## ZoomToMaxExtent

Zoomen Sie auf die Ausdehnung von Deutschland. Die BoundingBox kann über
<http://boundingbox.klokantech.com/> ermittelt werden.
Achtung: Die Angaben sind in `EPSG:4326` und müssen in
OpenLayers-Standardprojektion `EPSG:3857` transformiert werden. Tipp:
`ol.proj.transformExtent`

- <https://de.wikipedia.org/wiki/World_Geodetic_System_1984>
- <https://en.wikipedia.org/wiki/Web_Mercator>

## ZoomSlider

Fügen Sie einer beliegenden Karte einen ZoomSilder hinzu. Indem Sie die Console der [Firefox Developer Tools](https://developer.mozilla.org/son/docs/Tools) oder [Chrome DevTools](https://developer.chrome.com/devtools) benutzen.

```javascript
map.addControl(new ol.control.ZoomSlider());
```

# Fortgeschrittene Themen (optional)

## Vektor Geometrieebenen klassifizieren (GeoJSON)

Klassifizieren Sie die Einwohnerzahlen `Einwohner` Westfalen Kreise
`data/data/westfalen_kreise.geojson` mittels einer Style-Funktion.
Sie können dazu das folgende Beispiel verwenden:
<https://bjoernschilberg.github.io/trainings/openlayers/beispiele/geojson_style.html>

## WMS-Ebene einbinden

### Exkurs WMS

- Dienst, welcher Rasterdaten konform zur [OGC Web Map Service (WMS)-Spezifikation](http://www.opengeospatial.org/standards/wmshttp://www.opengeospatial.org/standards/wms) ausliefert
- dynamisch berechneten Bildern

### OpenLayers Sources

- `ol.source.TileWMS` oder `ol.source.ImageWMS`

```javascript
layers: [
        new ol.layer.Tile({
          title: 'wms_nw_dop20',
          source: new ol.source.TileWMS({
            url: 'https://www.wms.nrw.de/geobasis/wms_nw_dop20',
            params: {
              LAYERS: 'nw_dop20',
              TILED: true,
            }
          })
        })
      ],
```

- Wählen Sie eine andere WMS-Ebene/Layer aus.
- Ändern Sie den Code dahingehend ab, dass statt vieler einzelner Kacheln nur
  noch ein einzelnes Bild beim WMS angefragt wird.
- Überprüfen Sie mittels der Developer Tools des Browsers, ob tatsächlich nur
  noch ein Bild angefordert wird, statt der `256x256` Pixel großen Kacheln.

## Abfrage von Informationen mittels GetFeatureInfo (WMS)

Fügen Sie den Layer `nw_dtk25_info` des Dienstes
<https://www.wms.nrw.de/geobasis/wms_nw_dtk25> als `wmsSource` dem `wmsLayer` hinzu.
Fügen Sie den `wmsLayer` der Karte (`map`) hinzu.

Registrieren Sie eine Funktion, die bei jedem
[singleclick](http://openlayers.org/en/latest/apidoc/ol.MapBrowserEvent.html#event:singleclick)-Event,
welcher auf der `ol.Map` gefeuert wird, die Funktion
[getGetFeatureInfoUrl](https://openlayers.org/en/latest/apidoc/ol.source.TileWMS.html#getGetFeatureInfoUrl)
des Dienstes aufruft und gegebenenfalls weitere Informationen ausgibt.

```javascript
map.on('singleclick', function(evt) {
  document.getElementById('info').innerHTML = '';
  var viewResolution = /* FIX ME */ ;
  var url = wmsSource.getGetFeatureInfoUrl( /* FIX ME */ );
  if (url) {
    document.getElementById('info').innerHTML = '<iframe width=650 height=570 seamless src="' + url + '"></iframe>';
  }
});
```

Beachten Sie die Funktion `singleclick` eine `wmsSource` erwartet!

## OpenLayers WMS NRW GetFeatureInfo Beispiel

Zoom-Anzeigen fixen.

## WFS Dienst einbinden

Fügen Sie WFS-Feature mit dem `typename=dvg:nw_dvg1_krs` des Dienstes
<https://www.wfs.nrw.de/geobasis/wfs_nw_dvg?service=WFS> als `ol.source.Vector`
dem `ol.layer.Vector` hinzu. Fügen Sie den Vektor Layer der Karte (`map`)
hinzu.

Fügen Sie zusätzlich noch eine geeignete Hintergrundkarte hinzu.

```javascript
    var vectorSource = new ol.source.Vector({
      format: new ol.format.GML2(),
      url: function(extent) {
        return 'https://www.wfs.nrw.de/geobasis/wfs_nw_dvg?service=WFS&' +
          'version=1.1.0&request=GetFeature&typename=dvg:nw_dvg1_krs&' +
          'outputFormat=text/xml;%20subtype=gml/2.1.2&srsname=EPSG:3857&' +
          'bbox=' + extent.join(',');
      },
      strategy: ol.loadingstrategy.bbox
    });

    var vector = new ol.layer.Vector({
      source: vectorSource,
      style: new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: 'rgba(0, 0, 255, 1.0)',
          width: 2
        })
      })
    });
```

## Metadaten der WFS Vektor Geometrieebene abfragen

Jede Fläche repräsentiert ein
[ol.Feature](http://openlayers.org/en/latest/apidoc/ol.Feature.html) Objekt des
[ol.layer.Vector](http://openlayers.org/en/latest/apidoc/ol.layer.Vector.html),
und jedes Feature hat bspw. die Attribute `GN`.  Registrieren Sie eine
Funktion, die bei jedem
[singleclick](http://openlayers.org/en/latest/apidoc/ol.MapBrowserEvent.html#event:singleclick)-Event,
welcher auf der `ol.Map` gefeuert wird, die Funktion
[forEachFeatureAtPixel](http://openlayers.org/en/latest/apidoc/ol.Map.html#forEachFeatureAtPixel)
der `map` aufruft und gegebenenfalls weitere Informationen über den Kreis
ausgibt.

Tipps:
HTML-Markup (Auszeichnung)

```html
<div id="info"></div>
```

JavaScript-Schnipsel

```javascript
map.on('singleclick', function(e) {
//map.forEachFeatureAtPixel()
});
```

## Rotate geometries

```javascript
var geom = ol.geom.Polygon.fromExtent([-5, -5, 5, 5]);
geom.rotate(Math.PI / 4);
```

## Popup

## Kartenlabel

## Reprojektion

Siehe dazu die folgende Beispiele:

- [beispiele/wms_25832.html](../beispiele/wms_25832.html)
- [beispiele/wfs_25832.html](../beispiele/wfs_25832.html)

## ArcGIS Rest Feature Service

<https://openlayers.org/en/latest/examples/vector-esri.html>
mit <https://services1.arcgis.com/W47q82gM5Y2xNen1/ArcGIS/rest/services>

## weitere Vektoren (CSV,KML, GeoRSS)

<http://openlayers.org/workshop/en/layers/vector.html>

## Zeichnen / Modifizieren / Entfernen eigener Geometrien (Features)

Fügen Sie der Karte folgende Controls hinzu:

- Control zum Zeichnen von Punkten
- Control zum Zeichnen von Linien
- Control zum Zeichnen von Polygonen
- Control zum Zeichnen von Rechtecken
