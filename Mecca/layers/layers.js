var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_1HistoryofvisualizationofMecca_wikimediaSheet11_1 = new ol.format.GeoJSON();
var features_1HistoryofvisualizationofMecca_wikimediaSheet11_1 = format_1HistoryofvisualizationofMecca_wikimediaSheet11_1.readFeatures(json_1HistoryofvisualizationofMecca_wikimediaSheet11_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1HistoryofvisualizationofMecca_wikimediaSheet11_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1HistoryofvisualizationofMecca_wikimediaSheet11_1.addFeatures(features_1HistoryofvisualizationofMecca_wikimediaSheet11_1);
var lyr_1HistoryofvisualizationofMecca_wikimediaSheet11_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1HistoryofvisualizationofMecca_wikimediaSheet11_1, 
                style: style_1HistoryofvisualizationofMecca_wikimediaSheet11_1,
                interactive: true,
    title: '1. History of visualization of Mecca_wikimedia - Sheet1 (1)<br />\
    <img src="styles/legend/1HistoryofvisualizationofMecca_wikimediaSheet11_1_0.png" /> 17<br />\
    <img src="styles/legend/1HistoryofvisualizationofMecca_wikimediaSheet11_1_1.png" /> 18<br />\
    <img src="styles/legend/1HistoryofvisualizationofMecca_wikimediaSheet11_1_2.png" /> 19<br />\
    <img src="styles/legend/1HistoryofvisualizationofMecca_wikimediaSheet11_1_3.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_1HistoryofvisualizationofMecca_wikimediaSheet11_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_1HistoryofvisualizationofMecca_wikimediaSheet11_1];
lyr_1HistoryofvisualizationofMecca_wikimediaSheet11_1.set('fieldAliases', {'Title': 'Title', 'Type': 'Type', 'Creator': 'Creator', 'Date': 'Date', 'Century': 'Century', 'Place of creation': 'Place of creation', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Caption in Wikimedia': 'Caption in Wikimedia', 'Collection': 'Collection', 'Description': 'Description', 'Copyright': 'Copyright', 'Source': 'Source', '<a href>': '<a href>', 'Link to the thumbnail photo': 'Link to the thumbnail photo', '<img src>': '<img src>', });
lyr_1HistoryofvisualizationofMecca_wikimediaSheet11_1.set('fieldImages', {'Title': 'TextEdit', 'Type': 'TextEdit', 'Creator': 'TextEdit', 'Date': 'TextEdit', 'Century': 'Range', 'Place of creation': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'Caption in Wikimedia': 'Hidden', 'Collection': 'TextEdit', 'Description': 'TextEdit', 'Copyright': 'Hidden', 'Source': 'Hidden', '<a href>': 'TextEdit', 'Link to the thumbnail photo': 'Hidden', '<img src>': 'TextEdit', });
lyr_1HistoryofvisualizationofMecca_wikimediaSheet11_1.set('fieldLabels', {'Title': 'header label', 'Type': 'inline label', 'Creator': 'inline label', 'Date': 'inline label', 'Century': 'inline label', 'Place of creation': 'inline label', 'Collection': 'inline label', 'Description': 'inline label', '<a href>': 'inline label', '<img src>': 'inline label', });
lyr_1HistoryofvisualizationofMecca_wikimediaSheet11_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});