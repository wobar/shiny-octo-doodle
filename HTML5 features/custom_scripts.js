
function loadGeolocation() {
    document.getElementById('presentationContainer').innerHTML="'<object id='pageContainer' type='text/html' data='Geolocation_subpage.html'></object>";
}

function loadDragAndDrop() {
    document.getElementById('presentationContainer').innerHTML="'<object type='text/html' data='DragAndDrop_subpage.html' ></object>";
}





//geolocation
function processPosition(location) {
    var longitude = location.coords.longitude;
    var latitude = location.coords.latitude;

    var mapUrl="http://maps.googleapis.com/maps/api/staticmap?center="
    + latitude + "," + longitude
    + "&zoom=14&size=400x300&sensor=false";

    document.getElementById("locationCoordinates").textContent = "Latitude: " + latitude + " Longitude: " + longitude;

    document.getElementById("map_placeholder").innerHTML = "<img src='" + mapUrl + "'>";
}

function errorInfo(error) {
    //display error message


}

function getCurrentLocation() {
    if (Modernizr.geolocation)
    {
        var geolocation = navigator.geolocation;
        geolocation.getCurrentPosition(processPosition, errorInfo);
    }
    else
    {
        //no support for geolocation


    }
}
