//Càlcul de la distancia entre 2 punts


function aRadians(graus) {
    return graus * Math.PI / 180;
}

function distancia(latitud1, longitud1, latitud2, longitud2) {
// R radi en km de la terra
    var R = 6371;
    var deltaLatitud = aRadians(latitud2 - latitud1);
    var deltaLongitud = aRadians(longitud2 - longitud1);
    latitud1 = aRadians(latitud1);
    latitud2 = aRadians(latitud2);
    var a = Math.sin(deltaLatitud / 2) * Math.sin(deltaLatitud / 2)
        + Math.cos(latitud1) * Math.cos(latitud2) *
        Math.sin(deltaLongitud / 2) *
        Math.sin(deltaLongitud / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
}

//Obtenir la ciutat més propera a l'usuari
window.setInterval(function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        let myLatitude = position.coords.latitude;
        let myLongitude = position.coords.longitude;
        let myLocation = new Array();

        myLocation[0] = myLatitude;
        myLocation[1] = myLongitude;
        //alert(myLocation);

        let latitudeNY = 40.7143528;
        let longitudeNY = -74.0059731;
        let distanceBetweenMeNY = distancia(myLatitude, myLongitude, latitudeNY, longitudeNY);

        let latitudeParis = 48.856614;
        let longitudeParis = 2.3522219;
        let distanceBetweenMeParis = distancia(myLatitude, myLongitude, latitudeParis, longitudeParis);

        let latitudeTokio = 35.6894875;
        let longitudeTokio = 139.6917064;
        let distanceBetweenMeTokio = distancia(myLatitude, myLongitude, latitudeTokio, longitudeTokio);

        let closestCity = Math.min(distanceBetweenMeNY, distanceBetweenMeParis, distanceBetweenMeTokio);
        if (closestCity == distanceBetweenMeNY) {
            console.log("New York");
        } else if (closestCity == distanceBetweenMeParis) {
            console.log("Paris");
        } else if (closestCity == distanceBetweenMeTokio) {
            console.log("Tokio");
        } else {
            console.log("Error while calculating distance between you and the cities");
        }

    });
}, 6000000);

function geolocalitzacio() {
    navigator.geolocation.getCurrentPosition(function (position) {
        let myLatitude = position.coords.latitude;
        let myLongitude = position.coords.longitude;
        let myLocation = new Array();

        myLocation[0] = myLatitude;
        myLocation[1] = myLongitude;
        //alert(myLocation);

        let latitudeNY = 40.7143528;
        let longitudeNY = -74.0059731;
        let distanceBetweenMeNY = distancia(myLatitude, myLongitude, latitudeNY, longitudeNY);

        let latitudeParis = 48.856614;
        let longitudeParis = 2.3522219;
        let distanceBetweenMeParis = distancia(myLatitude, myLongitude, latitudeParis, longitudeParis);

        let latitudeTokio = 35.6894875;
        let longitudeTokio = 139.6917064;
        let distanceBetweenMeTokio = distancia(myLatitude, myLongitude, latitudeTokio, longitudeTokio);

        let closestCity = Math.min(distanceBetweenMeNY, distanceBetweenMeParis, distanceBetweenMeTokio);
        if (closestCity === distanceBetweenMeNY) {
            console.log("NewYork");
            imatge = {src: 'images/NewYork.jpg'};
            init();

        } else if (closestCity === distanceBetweenMeParis) {

            console.log("Paris");
            imatge = {src: "images/Paris.jpg"};
            init();


        } else if (closestCity == distanceBetweenMeTokio) {
            console.log("Tokio");
            imatge = {src: "images/Tokyo.jpg", title: "Tokyo"};
            init();
        } else {
            console.log("Error while calculating distance between you and the cities");
        }

    });
}
