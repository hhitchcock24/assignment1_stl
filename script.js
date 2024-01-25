var map = L.map('map').setView([37.7, -122.4], 10);

  // load a tile layer
L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

  // load GeoJSON from an external file
  $.getJSON("https://raw.githubusercontent.com/gbrunner/adv-python-for-gis-and-rs/master/Week%201/sf_crime.geojson",function(data){
   var detectiveIcon = L.icon({
    iconUrl: 'https://giffiles.alphacoders.com/748/7489.gif',
    iconSize: [50,40]
  }); 
  L.geoJson(data  ,{
    pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: detectiveIcon});
    }
  }) .addTo(map);
});
