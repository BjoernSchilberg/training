# GeoExt mit Sencha CMD

## Voraussetzungen

- Sencha CMD ist installiert
- ExtJS 6.2 heruntergeladen

## App-Skeleton mit Sencha CMD erzeugen

```shell
sencha -sdk "/path/to/ext-6.2.0/" generate app MyFirstGeoExtApp MyFirstGeoExtApp
cd MyFirstGeoExtApp
sencha app watch
```

## OpenLayers zur Anwendung hinzufügen

In `app.json` Property `js` wie folgt erweitern:

```javascript
"js": [{
    "path": "https://openlayers.org/en/v3.20.1/build/ol.js",
    "remote": true
  }, {
    "path": "app.js",
    "bundle": true
  }],
```

## GeoExt zur Anwendung hinzufügen

GeoExt-Quellen per git beziehen oder git submodule.

```shell
cd packages
git clone https://github.com/geoext/geoext3.git
```

 In `app.json` zum `classpath` hinzufügen.

```javascript
"classpath": [
    "app",
    "${toolkit.name}/src",
    "./packages/geoext3/src"
],
```

## Karten-View erzeugen

 Standard ExtJS-View erzeugen

```shell
sencha generate view main.Map
```

- Anpassungen erzeugter View (`app/view/main/Map.js`)
  - Ableitung von `GeoExt.component.Map` anstelle von `Ext.panel.Panel`
  - Zuweisung des `xtype: 'mappanel'` (Klassenalias)
  - Hinzufügen eines Properties `map` (OpenLayers Karte)
  - Entfernen des `html` Properties

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

## Karten-View in die Anwendung einhängen

In `classic/src/view/main/Main.js` und `modern/src/view/main/Main.js` folgendes
in das Property `items` einfügen:

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

## Anwendung starten

```shell
sencha app watch
```
