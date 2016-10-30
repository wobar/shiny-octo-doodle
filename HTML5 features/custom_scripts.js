
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
    if (Modernizr.localstorage)
    {
        document.getElementById('presentationContainer').innerHTML="'<object id='pageContainer' type='text/html' data='DragAndDrop_subpage.html' ></object>";
    }
    else
    {
        document.getElementById('presentationContainer').innerHTML="<h3 align='center'>Local storage not supported ! (drag and drop example is using localstorage for storing data)</h3>";   
    }
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


//drag and drop
function dragging(event) {
    event.dataTransfer.setData("objID", event.target.id);
}

function allowDropItem(event) {
    event.preventDefault();
}

function dropItem(event) {
    event.preventDefault();
    var draggedId = event.dataTransfer.getData("objID");

    if (draggedId ==="labelForDrag")
    {
        //get counter
        var storedCounter = localStorage.getItem("counterValue");
        if (storedCounter === null)
        {
            storedCounter = 0;
        }        

        localStorage.setItem("counterValue", ++storedCounter);

        document.getElementById("counter").textContent = "Drop Count: " + storedCounter;        
    }
}

function clearDropCounter() {
    localStorage.removeItem("counterValue");
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
