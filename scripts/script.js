onload = init;
var mymap;
function init() {
	//Setar para aparecer na posição do usuário
	mymap = L.map('mapid').setView([51.505, -0.09], 50);
	
	navigator.geolocation.getCurrentPosition(showPosition);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    //criar seu token no mapbox
    accessToken: 'pk.eyJ1IjoicGVkcm9nb25vcmluZyIsImEiOiJjandsOGNxOW0wMTNrM3ptb3ZxODJmNTF4In0.aHdmHZiBXaaU649ge9HKgg'
	}).addTo(mymap);
	//Add Button Listener
	document.getElementById("btn_add").addEventListener("click",mLis);
}

function mLis(){
	var lat = document.getElementById("lat").value;
	var long = document.getElementById("long").value;
	var desc = document.getElementById("desc").value;
	var link = document.getElementById("link").value;


	var m = L.marker([lat, long]).addTo(mymap);
	var img = '<img src=" '+link+'">';
	m.bindPopup(desc+img);
	console.log(lat,long,desc);
}

function showPosition(pos){
	var latitude = pos.coords.latitude;
	var longitude = pos.coords.longitude;
	console.log(latitude, longitude);
	mymap.setView([latitude, longitude], 1)
}


map.on('draw:created', function (e) {
    var type = e.layerType,
        layer = e.layer;

    map.addLayer(layer);

    if (type === 'marker') {    
        layer.bindPopup('LatLng: ' + layer.getLatLng()).openPopup();
    }

});
//atualiza a posição



//Função para adicionar marcador


//Challenge: Mostrar a foto do lugar no balão. Dica: desc pode ser um HTML
//Challenge: Auto preencher lat e long ao clicar em algum lugar do mapa