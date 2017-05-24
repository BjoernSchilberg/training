# Erste ExtJS Anwendung
Kopieren Sie [uebungen/template.html](uebungen/template.html) nach ```uebungen/extjs.html```.

Fügen Sie die ExtJS-Biblothek und die Style-Definitionen hinzu.
```html
<!-- include a CSS stylesheet -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/extjs/6.2.0/classic/theme-triton/resources/theme-triton-all.css" type="text/css" />

<!-- include an external JavaScript file -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/extjs/6.2.0/ext-all.js"></script>
```
Fügen Sie den folgen Code-Schnipsel im ```<body>```-Tag hinzu.
```javascript
 <script>
    Ext.onReady(function() {
      var win = Ext.create('Ext.window.Window', {
        id: "meins",
        width: 200,
        height: 200,
        title: 'ExtJS …',
        html: '… is easy!'
      });
      win.show();
    });
  </script>
```
Wenn Sie ```extjs.html``` im Browser aufrufen, sollten Sie ein
[Ext.window.Window](http://docs.sencha.com/extjs/6.2.0/classic/Ext.window.Window.html)
sehen!

# Experimentieren mit der ersten ExtJS Anwendung
Öffnen Sie die Konsole in den Developer Tools/DevTools. Setzen Sie den
```title``` mittels ```Ext.getCmp("meins")``` neu.


# Erste Karte
- Kopieren Sie ```uebungen/extjs.html``` nach ```uebungen/geoext.html```.
- Fügen Sie die OpenLayers-Bibliothek und die Style-Definitionen hinzu.
```html
<link rel="stylesheet" href="https://openlayers.org/en/v4.1.1/css/ol.css" type="text/css" />
<script src="https://openlayers.org/en/v4.1.1/build/ol.js"></script>
```
- Fügen Sie die GeoExt-Bibliothek hinzu.
```html
<script src="https://geoext.github.io/geoext3/v3.0.0/GeoExt.js"></script>
```
- Die meisten GeoExt-Komponenten brauchen keine speziellen CSS-Definitionen.
- Bis auf die Popup-Komponente
```html
<link rel="stylesheet" href="https://geoext.github.io/geoext3/v3.0.0/resources/css/gx-popup.css" type="text/css" />
```
- Fügen Sie nun eine ```GeoExt.component.Map```  hinzu und lassen Sie diese in dem Fenster ```win``` aus der vorherigen Übung anzeigen.
- Dazu entfernen Sie ```html: '…is easy!'``` aus dem ```Ext.window.Window``` Konfigurations Objekt.
- Und fügen an dessen Stelle folgenden Schnipsel hinzu:
```javascript
// in the config object:
layout: 'fit',
items: [
  Ext.create('GeoExt.component.Map', {
    map: new ol.Map({
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([7.013056, 51.450833]),
        zoom: 12
      })
    })
  })
]
```

## Zusatzaufgaben
- Ändern Sie den Titel und machen Sie das Fenster größer.

# Map (Viewport)
Schauen Sie sich das Beispiel und den Quelltext in [beispiele/viewport.html](beispiele/viewport.html) genau an.

## Zusatzaufgaben zu ```beispiel/viewport.html```

### Konfiguration des OpenLayers-Teils

Im obigen Beispiel wurde eine Instanz von ```ol.Map``` geschaffen und an
```GeoExt.component.Map``` übergeben.  Wird die Instanz von ```ol.Map``` anders
konfiguriert, werden diese Änderung in der eigentlich Applikation beeinflussen.

Ändern Sie die folgenden Aspekte der OpenLayers Karte:
- Zentrierung und Zoom
- Hinzufügen mehrere Layer (bspw. Westfalen Kreise)
- Steuerelemente einbinden
  - ```ol.control.ScaleLine```
  - ```ol.control.MousePosition```

### Konfiguration des ExtJS-Teils

Ändern Sie folgende Aspekte der ExtJS components:
- Ändern Sie das Layout des Viewports. Dies sollte an 2 Stellen erfolgen:
  - Layout config des viewport.
  - Abhängig vom gewählten Layout ist die Konfiguration der Kinder-Komponenten
    (in unserem Fall ```mapComponent```). Ggf. werden weitere properties Angaben benötigt.
- Binden Sie ```GeoExt.component.Map``` in einem [Ext.panel.Panel](http://docs.sencha.com/extjs/6.2.0/classic/Ext.panel.Panel.html) mit einem ```title``` ein.
- Damit das Layout sinnvoll geändert werden kann führen Sie ein weiteres [Ext.panel.Panel](http://docs.sencha.com/extjs/6.2.0/classic/Ext.panel.Panel.html) ein.

### Konfiguration des GeoExt-Teils

- Ändern Sie die Zentrierung der Karte anstatt über OpenLayers direkt mit GeoExt.
  - https://geoext.github.io/geoext3/master/docs/#!/api/GeoExt.component.Map-method-setCenter
- Fügen Sie einen Layer mit GeoExt hinzu.
  - https://geoext.github.io/geoext3/master/docs/#!/api/GeoExt.component.Map-method-addLayer

# Motivation
https://bjoernschilberg.github.io/trainings/geoext/beispiele/final.html

# LayerTree

## Einen LayerTree vorbereiten
Motivation: https://bjoernschilberg.github.io/trainings/geoext/beispiele/layertree1.html

Kopieren Sie sich die Datei  [beispiele/template.html](beispiele/template.html)
nach ```layertree.html```.

- Ändern Sie das Layout des [Ext.container.Viewport](http://docs.sencha.com/extjs/6.2.0/classic/Ext.container.Viewport.html) wie folgt:
```javascript
var vp = Ext.create('Ext.container.Viewport', {
  layout: 'border',
  items: [
    mapComponent
  ]
});
```
- Für ein brauchbares Border Layout muss die ```region```-Property der
  Kind-Komponente auf ```center``` gesetzt werden. 
```javascript
var mapComponent = Ext.create('GeoExt.component.Map', {
  map: map,
  region: 'center'
});
```
- Wenn Sie die Anwendung im Browser neuladen werden Sie noch keinen Unterschied bemerken, da zur Zeit nur eine Komponente im Border Layout existiert.

- Fügen Sie ein [Ext.panel.Panel](http://docs.sencha.com/extjs/6.2.0/classic/Ext.panel.Panel.html) als Platzhalter für den Layertree hinzu.
```javascript
var layerTreePanel = Ext.create('Ext.panel.Panel', {
  title: 'Kartenebenen',
  width: 300,
  region: 'west'
});
```
- Das Panel muss dem Viewport hinzugefügt werden.
```javascript
var vp = Ext.create('Ext.container.Viewport', {
  layout: 'border',
  items: [
    mapComponent,
    layerTreePanel
  ]
});
```
- Laden Sie die Anwendung im Browser neu und schauen Sie sich die Änderungen an.

## Einen LayerTree erstellen
Motivation: https://bjoernschilberg.github.io/trainings/geoext/beispiele/layertree2.html

- Tauschen Sie den Platzhalter für den Layertree ```Ext.panel.Panel``` durch einen richtigen [Ext.tree.Panel](http://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.Panel.html) aus.

- Schauen Sie sich dazu erst einmal das Beispiel in der Dokumentation an:
http://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.Panel.html

- Versuchen Sie das Beispiel aus der Dokumentation nachzuvollziehen und bauen Sie es in Ihrem Beispiel ```layertree.html``` ein.

- Tipps:
  - Der ```store``` kann übernommen werden.
  - Das ```Ext.tree.Panel``` muss angepasst werden.
    - ```height``` wird nicht benötigt
    - ```region`` wird benötigt
    - ```renderTo``` wird nicht benötigt


## Einen realen LayerTree erstellen 
Motivation: https://bjoernschilberg.github.io/trainings/geoext/beispiele/layertree3.html

- Anstatt eine statische Liste aus dem vorherigen Beispiel soll der LayerTree
  nun mit der Karte verbunden werden. 

- Dafür muss der allgemeine ```Ext.data.TreeStore``` durch den
  [GeoExt.data.store.LayersTree](https://geoext.github.io/geoext3/master/docs/#!/api/GeoExt.data.store.LayersTree)
ausgetauscht werden.

- Arbeiten Sie dazu am Ihrem ```layertree.html``` Beispiel weiter.

- Machen Sie sich mit Dokumentation zum [GeoExt.data.store.LayersTree](https://geoext.github.io/geoext3/master/docs/#!/api/GeoExt.data.store.LayersTree) vertraut.

- Erstellen Sie ein Instanz der ```GeoExt.data.store.LayersTree``` Klasse und fügen Sie folgendes Konfigurationsobjekt hinzu:
```
layerGroup: /* http://openlayers.org/en/latest/apidoc/ol.Map.html#getLayerGroup */
```
- Überprüfen Sie den Stand im Browser.

- Wählen geben Sie Ihrem Layer einen sinvolleren Namen anstatt ```Unamed Layer```.
  - Tipp: ```name: 'OSM'```

- Fügen Sie einen weiteren Layer hinzu. Bspw. "WMS NRW"

- Lesen die Dokumentation für [Ext.tree.plugin.TreeViewDragDrop](http://docs.sencha.com/extjs/6.2.0/classic/Ext.tree.plugin.TreeViewDragDrop.html) und finden Sie raus was passiert wenn Sie dieses PlugIn zu Ihrem ```Ext.tree.Panel``` hinzufügen.

# Feature grid

## Ein Feature grid vorbereiten
Motivation: https://bjoernschilberg.github.io/trainings/geoext/beispiele/featuregrid1.html

- Machen Sie mit dem Stand aus der Layertree Übung weiter.
- Das zukünftige Feature grid soll in der ```region: 'south'``` positioniert werden.
- Für die Erstellung eines beispielhaften Ext Grids machen Sie sich mit der Dokumentation vertraut:
http://docs.sencha.com/extjs/6.2.0/classic/Ext.grid.Panel.html
- Integrieren Sie das Beispiel aus der Dokumentation in Ihrer Anwendungen. Tipps:
  - ```storeId``` und ```store: Ext.data.StoreManager.lookup('simpsonsStore')``` werden nicht benötigt. Da eine Variable zur Referenzierung des [Ext.data.Store](http://docs.sencha.com/extjs/6.2.0/modern/Ext.data.Store.html) verwendet werden soll.
  - ```renderTo``` und ```width``` wird wegen dem Border Layout nicht benötigt.
  - Nicht vergessen das ```featurePanel```/```Ext.grid.Panel``` dem Viewport hinzuzufügen.
- Werfen Sie einen Blick in Browser.
- Fügen Sie noch die "Westfalen Kreise" hinzu, nicht direkt sondern als Variable ```vectorLayer```.
- Lagern Sie den Style des "Westfalen Kreise" Layers aus. (Nennen Sie den Style ```blueStyle```) 


## Ein Feature grid erstellen
Motivation: https://bjoernschilberg.github.io/trainings/geoext/beispiele/featuregrid2.html

- Machen Sie mit dem Stand aus der letzten Übung weiter.
- Das Grid soll keine statischen Daten mehr anzeigen, sondern die Daten aus dem Layer "Westfalen Kreise"
- Ersetzen Sie den generischen ``Ext.data.Store`` durch [GeoExt.data.store.Features](https://geoext.github.io/geoext3/master/docs/#!/api/GeoExt.data.store.Features). Setzen Sie dort den ```layer:  vectorLayer```.
- Konfigurieren Sie die ```columns``` im ```Ext.grid.Panel``` entsprechend.
```javascript
columns: [
  { 
  text: 'Kreisname', 
  dataIndex: 'Kreisname', 
  flex: 3 
  }, 
  { 
  text: 'Einwohner', 
  dataIndex: 'Einwohner', 
  flex: 1 
  }, 
  { 
  text: 'Oberbürgermeister', 
  dataIndex: 'Oberbürgermeister', 
  flex: 1 
  }
]
```
- Zusätzlich können die einzelnen Geometrien und Styles der einzelnen Features dem Grid hinzugefügt werden. Fügen Sie dazu die folgenden Zeilen der ```columns```-Definition hinzu:
```javascript
{
  xtype: 'widgetcolumn',
  width: 40,
  widget: {
    xtype: 'gx_renderer'
  },
  onWidgetAttach: function(column, gxRenderer, rec) {
      gxRenderer.update({
        feature: rec.getFeature(),
        symbolizers: GeoExt.component.FeatureRenderer.determineStyle(rec)
      });
  }
}
```
- Das jeweilige selektierte Feature im Grid/Tabelle so auf der Karte hervorgehoben werden. Verwenden Sie dazu die optional Konfiguration ```listeners```:
http://docs.sencha.com/extjs/6.2.0/classic/Ext.grid.Panel.html#cfg-listeners
- Der Listener sollte auf das Event ``` selectionchange``` lauschen.
  - http://docs.sencha.com/extjs/6.2.0/classic/Ext.grid.selection.SpreadsheetModel.html#event-selectionchange
- ```selectionchange``` sollte den Style Features auf der Karte ändern, wenn das entsprechende Feature im Grid ausgewählt. Definieren Sie dazu einen weiteren Style, bspw. ```redStyle```.
- Bonusaufgabe. Der Stil soll sich nicht nur auf der Karte ändern sondern auch das kleine Feature in der Tabelle soll seinen Stil ändern.
```javascript
onWidgetAttach: function(column, gxRenderer, rec) {
                gxRenderer.update({
                  feature: rec.getFeature(),
                  symbolizers: GeoExt.component.FeatureRenderer.determineStyle(rec)
                });
              }
```

# Overview map hinzufügen

# Popup hinzufügen






# Fortgeschrittene Themen

## GeoExt mit Sencha CMD

### Voraussetzungen
- Sencha CMD ist installiert
- ExtJS 6.2 heruntergeladen
- App-Skeleton erzeugen mit Sencha CMD erzeugen
```shell
sencha -sdk "/path/to/ext-6.2.0/" generate app MyFirstGeoExtApp MyFirstGeoExtApp
cd MyFirstGeoExtApp
sencha app watch
```

### OpenLayers zur Anwendung hinzufügen
In ```app.json``` Property ```js``` wie folgt erweitern:
```javascript
"js": [{
    "path": "https://openlayers.org/en/v3.20.1/build/ol.js",
    "remote": true
  }, {
    "path": "app.js",
    "bundle": true
  }],
```

### GeoExt zur Anwendung hinzufügen
- GeoExt-Sourcen per git beziehen oder git submodule
```
cd packages
git clone https://github.com/geoext/geoext3.git
```
- In ```app.json``` zum ```classpath``` hinzufügen
```
"classpath": [
    "app",
    "${toolkit.name}/src",
    "./packages/geoext3/src"
],
```

### Karten-View erzeugen
- Standard ExtJS-View erzeugen
```
sencha generate view main.Map
```
- Anpassungen erzeugter View (```app/view/main/Map.js```)
  - Ableitung von ```GeoExt.component.Map``` anstelle von ```Ext.panel.Panel```
  - Zuweisung des ```xtype: 'mappanel'``` (Klassenalias)
  - Hinzufügen eines Properties ```map``` (OpenLayers Karte)
  - Entfernen des ```html``` Properties
```javascript
Ext.define("MyFirstGeoExtApp.view.main.Map",{
    // extend: "Ext.panel.Panel",
    extend: "GeoExt.component.Map",
    xtype: 'mappanel',
    requires: [
        "MyFirstGeoExtApp.view.main.MapController",
        "MyFirstGeoExtApp.view.main.MapModel"
    ],
    controller: "main-map",
    viewModel: {
        type: "main-map"
    },
    // html: "Hello, World!!"
    map: new ol.Map({
        layers: [
            new ol.layer.Tile({
                source: new ol.source.Stamen({
                    layer: 'watercolor'
                })
            }),
            new ol.layer.Tile({
                source: new ol.source.Stamen({
                    layer: 'terrain-labels'
                })
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat( [-8.751278, 40.611368] ),
            zoom: 12
        })
    })
});
```

### Karten-View in die Anwendung einhängen
In ```classic/src/view/main/Main.js``` und ```modern/src/view/main/Main.js``` folgendes in das Property ```items``` einfügen:
```javascript
{
    title: 'GeoExt3 OL3 Map',
    iconCls: 'fa-map-marker',
    layout: 'fit',
    items: [{
        xtype: 'mappanel'
    }]
}
```

### Anwendung starten
```
sencha app watch
```
