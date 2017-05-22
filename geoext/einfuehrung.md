# Was ist GeoExt?

- JavaScript Bibiothek
- GeoExt vereinigt OpenLayers und ExtJS.
- Erweitert dazu das ExtJS Framework
- Nutzt Elemente aus OpenLayers
- Bringt diese in die Oberflächenelemente aus ExtJS ein
- Ermöglicht interaktive Kartenanwendungen in modernen Webanwendungen.
- Unter einer Freien Lizenz (BSD Lizenz)
- Die Community: Mailinglisten, IRC, ...
- Webseite: geoext.org
- API-Dokumentation: https://geoext.github.io/geoext3/master/docs/

# Abhängigkeiten und Versionen

| GeoExt | ExtJS | OpenLayers |
| --- | --- | --- |
| 3.0.0 | 6.2.0 | 3.20.1 |
| 2.1.0 | 4/5 | 2 |
| 1.1 | 3 | 2 |

Aktuell ist GeoExt 3.0.0. Allerdings noch ohne OpenLayers 4 und ExtJS 6.5.0 Unterstützung.
- ExtJS 6 im März 2016 veröffentlicht. GeoExt 3.0.0 mit ExtJS 6 Unterstützung im März 20017.
- ExtJS 5 im Juni 2014 veröffentlicht. GeoExt 2.1.0 mit ExtJS 5 Unterstützung im November 2015.
- ExtJS 4 im April 2011 veröffentlicht. GeoExt 2.0.0 mit ExtJS 4 Unterstützung im Oktober 2013.

# Kurzer Exkurs zu ExtJS

- Clientseitige JavaScript Bibliothek
- Wird in interaktive Webanwendungen (Desktop) eingesetzt
- Ermöglicht die Entwicklung von Desktop-ähnlichen Webanwendungen
  - mit ExtJS 6 bessere mobile Unterstützung
- Bietet eine große Anzahl Oberflächenelementen
  - http://examples.sencha.com/extjs/6.2.0/examples/
- Unterstützt das MVC-Pattern
- Für OpenSource-Projekte unter der GPL(GNU Public License) erhältlich
  - https://www.sencha.com/legal/gpl/
- Webseite: https://www.sencha.com/legal/gpl/
- API-Dokumentation: http://docs.sencha.com/extjs/6.2.0/modern/Ext.html

# Zusammenführen von GeoExt und ExtJS

 - GeoExt-Elemente verhalten sich wie Ext ExtJS Elemente
 - GeoExt- und ExtJS-Elemente sind anpassbar durch Attribute
 - Üblicherweise werden GeoExt Elemente in ExtJS Containern eingebettet.
 - Ist es erforderlich, ExtJS zu nutzen, wenn man GeoExt einsetzt?
   - GeoExt-Elemente sind erweiterte ExtJS-Elemente!
   - GeoExt ist daher selbst ebenfalls erweiterbar!

# GeoExt API

- Dokumentiert die in GeoExt bereitstehenden Elemente
- Oberflächenelemente (Widgets)
- Datenelemente (Reader und Stores)
- Baumelemente (Tree)
- Plugins
- API-Dokumentation: http://docs.sencha.com/extjs/6.2.0/modern/Ext.html

# Nützliches
## ExtJS
- API Dokumentation
  - Classic toolkit: https://docs.sencha.com/extjs/6.2.0/classic/Ext.html
  - Modern toolkit: https://docs.sencha.com/extjs/6.2.0/modern/Ext.html
- Examples
  - https://examples.sencha.com/extjs/6.2.0/examples/
- sonstiges
  - https://fiddle.sencha.com/
  - https://www.sencha.com/forum/

## GeoExt

- Homepage: https://geoext.github.io/geoext3/
- API Dokumentation
  - https://geoext.github.io/geoext3/v3.0.0/docs/
- Beispiele
   - https://geoext.github.io/geoext3/

# ExtJS 6
- Zusammenführung ExtJS / Sencha Touch
- Toolkits classic & modern
- Build profiles
- Besseres Theming (fashion)
- Model-View-Controller & Model-View-ViewModel
- Ext.Widget ... Ext.list.Tree

# Ziel ExtJS 6: Universale Applikationen
- Eine Codebasis => multiple builds
- Weniger Reibungsverluste
- Wiederverwendung von Code
- UI weitestgehend abhängig von Endgerät

# Beispiel für Universale Applikation
- BrandenburgViewer mobile

# Was ist nötig, um GeoExt nutzen zu können?

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/extjs/6.2.0/classic/theme-triton/resources/theme-triton-all.css" type="text/css" />
<link rel="stylesheet" href="https://openlayers.org/en/v4.1.1/css/ol.css" type="text/css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/extjs/6.2.0/ext-all.js"></script>
<link rel="stylesheet" href="http://geoext.github.io/geoext3/v3.0.0/resources/css/gx-popup.css" type="text/css" />
<script src="https://openlayers.org/en/v4.1.1/build/ol.js"></script>
<script src="https://geoext.github.io/geoext3/v3.0.0/GeoExt.js"></script>

```

# Was ist erstmal nicht geplant

## Keine Beispiele zu ```Ext.application``` oder ```MVC / MVVM```

Für produktive Anwendunge empfehlen wir die Verwendung von
```Ext.application``` / ```Ext.app.Application``` und auch die Verwendung von
MVC oder MVVM Konzepten. Für diese Einführung würde die Verwendung den Einstieg
vermutlich erschweren.

## ```Keine Verwendung von sencha cmd```

Aufgrund des erhöhten Installations- / Konifgurations- / Erlern-Aufwand
verzichten wir in dieser Schulung auf die Verwendung von ```sencha cmd``` um
den Fokus auf die Einführung in GeoEXT beizubehalten.

# Exkurs ExtJS (Kernkonzepte)

## Komponenten
https://docs.sencha.com/extjs/6.2.0/guides/core_concepts/components.html
- Panel [beispiele/component-panel.html](beispiele/component-panel.html)
- Tree [beispiele/component-tree.html](beispiele/component-tree.html)
- Grid [beispiele/component-grid.html](beispiele/component-grid.html)

## Layout
https://docs.sencha.com/extjs/6.2.0/guides/core_concepts/layouts.html
- Column [beispiele/layout-column.html](beispiele/layout-column.html)
- HBox [beispiele/layout-hbox.html](beispiele/layout-hbox.html)
- VBox [beispiele/layout-vbox.html](beispiele/layout-vbox.html)
- Accordion [beispiele/layout-accordion.html](beispiele/layout-accordion.html)
- Table [beispiele/layout-table.html](beispiele/layout-table.html)
- Border [beispiele/layout-border.html](beispiele/layout-border.html)
