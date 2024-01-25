var map = L.map('map').setView([38.626, 90.1994], 4);

  // load a tile layer
 L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png',{
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);


var marker1 = L.marker([38.6128, -90.2594]).addTo(map);
marker1.bindPopup("<b>Missouri Botanical Gardens </b>").openPopup();
var marker2 = L.marker([38.6371, -90.2848]).addTo(map);
marker2.bindPopup("<b>Forest Park<b>").openPopup();
var marker3 = L.marker([38.6333, -90.2006]).addTo(map);
marker3.bindPopup("<b>City Museum<b>");
var marker4 = L.marker([38.6365, -90.2339]).addTo(map);
marker4.bindPopup("<b>Saint Louis University<b>");
var marker5 = L.marker([38.6251, -90.1868]).addTo(map);
marker5.bindPopup("<b>The Gateway Arch<b>")
