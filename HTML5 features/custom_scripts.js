
function loadGeolocation() {
    if (Modernizr.geolocation)
    {
        document.getElementById('presentationContainer').innerHTML="'<object id='pageContainer' type='text/html' data='Geolocation_subpage.html'></object>";
    }
    else
    {
        document.getElementById('presentationContainer').innerHTML="<h3 align='center'>Geolocation not supported !</h3>";
    }
}

function loadDragAndDrop() {
    document.getElementById('presentationContainer').innerHTML="'<object id='pageContainer' type='text/html' data='DragAndDrop_subpage.html' ></object>";
}

function loadVideo() {
    if (Modernizr.video)
    {
        document.getElementById('presentationContainer').innerHTML="'<object id='pageContainer' type='text/html' data='Video_subpage.html' ></object>";
    }
    else
    {
        document.getElementById('presentationContainer').innerHTML="<h3 align='center'>Video not supported !</h3>";
    }
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
    
    switch(error.code) 
        {        
        case error.POSITION_UNAVAILABLE:
          document.getElementById("locationCoordinates").textContent = "Location info not available."
          break;
        case error.TIMEOUT:
          document.getElementById("locationCoordinates").textContent = "Request timed out."
          break;
        case error.PERMISSION_DENIED:
          document.getElementById("locationCoordinates").textContent = "Geolocation blocked by user."
          break;
        case error.UNKNOWN_ERROR:
          document.getElementById("locationCoordinates").textContent = "An error occured."
          break;
        }
}

function getCurrentLocation() {    
    var geolocation = navigator.geolocation;
    geolocation.getCurrentPosition(processPosition, errorInfo);   
}
