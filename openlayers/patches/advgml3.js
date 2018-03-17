/* (C) GeoBasis-DE/LGB
* Copyright by Landesvermessung und Geobasisinformation Brandenburg (LGB)
*
* Software engineering by Intevation GmbH
*
* This file is Free Software under the GNU GPL (>=v3)
* and comes with ABSOLUTELY NO WARRANTY! Check out the
* LICENSE for details.
*/

/**
 * @classdesc
 * Feature Format for reading and writing GML3 with FeatureTypes in ADV-schema.
 * http://www.adv-online.de/AdV-Produkte/Standards-und-Produktblaetter/Standards-des-Liegenschaftskatasters/
 * http://www.wfs.nrw.de/aaa-suite/schema/AAA-vereinfacht/1.0/schema/ALKIS-vereinfacht.xsd
 *
 * @constructor
 * @param {olx.format.GMLOptions=} opt_options
 *     Optional configuration object.
 * @extends {ol.format.GML3}
 * @api
 */

goog.provide('ol.format.ADVGML3');

goog.require('ol.format.GML3');


ol.format.ADVGML3 = function(opt_options) {
  var options = /** @type {olx.format.GMLOptions} */
      (opt_options ? opt_options : {});

  ol.format.GML3.call(this, options);
  /**
   * @private
   * @type {boolean}
   */
  this.surface_ = options.surface !== undefined ? options.surface : false;

  /**
   * @private
   * @type {boolean}
   */
  this.curve_ = options.curve !== undefined ? options.curve : false;

  /**
   * @private
   * @type {boolean}
   */
  this.multiCurve_ = options.multiCurve !== undefined ?
      options.multiCurve : true;

  /**
   * @private
   * @type {boolean}
   */
  this.multiSurface_ = options.multiSurface !== undefined ?
      options.multiSurface : true;

  /**
   * @inheritDoc
   */
  this.schemaLocation = options.schemaLocation ?
      options.schemaLocation : ol.format.ADVGML3.schemaLocation_;

};
ol.inherits(ol.format.ADVGML3, ol.format.GML3);

/**
 * Overwritten function to accept adv gml.
 * @param {Node} node Node.
 * @param {Array.<*>} objectStack Object stack.
 * @return {ol.Feature} Feature.
 */
ol.format.ADVGML3.prototype.readFeatureElement = function(node, objectStack) {
  var n;
  var fid = node.getAttribute('fid') ||
      ol.xml.getAttributeNS(node, ol.format.GML.GMLNS, 'id');
  var values = {}, geometryName;
  for (n = node.firstElementChild; n; n = n.nextElementSibling) {
    var localName = n.localName;
    // Assume attribute elements have one child node and that the child
    // is a text or CDATA node (to be treated as text).
    // Otherwise assume it is a geometry node.
    if (n.childNodes.length === 0 ||
        (n.childNodes.length === 1 &&
        (n.firstChild.nodeType === 3 || n.firstChild.nodeType === 4))) {
      var value = ol.xml.getAllTextContent(n, false);
      if (ol.format.GMLBase.ONLY_WHITESPACE_RE_.test(value)) {
        value = undefined;
      }
      values[localName] = value;
    } else {
      // boundedBy is an extent and must not be considered as a geometry
      var n_duplicate = n;
      if (localName !== 'boundedBy') {
        geometryName = localName;
        var i = 0;
        for (i; i<1;){
            if (n_duplicate.firstElementChild.nodeName.match(/^(gmlx:)(Polygon)?(Point)?(LineString)?$/)) {
                i++;
            }
            else{
                n_duplicate = n_duplicate.firstElementChild;
            }
        }
      }
      values[localName] = this.readGeometryElement(n_duplicate, objectStack);
    }
  }
  var feature = new ol.Feature(values);
  if (geometryName) {
    feature.setGeometryName(geometryName);
  }
  if (fid) {
    feature.setId(fid);
  }
  return feature;
};

