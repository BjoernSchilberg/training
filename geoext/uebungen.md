# Erste ExtJS Anwendung
Kopieren Sie ```uebungen/template.html``` nach ```uebungen/extjs.html```.

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
Schauen Sie sich das Beispiel und den Quelltext in ```beispiel/viewport.html``` genau an.

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
- Binden Sie ```GeoExt.component.Map``` in einem Panel mit einem Titel ein.
- Damit das Layout sinnvoll geändert werden kann führen Sie ein weiteres Panel ein.

### Konfiguration des GeoExt-Teils

- Ändern Sie die Zentrierung der Karte anstatt über OpenLayers direkt mit GeoExt.
- Fügen Sie einen Layer mit GeoExt hinzu.

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
