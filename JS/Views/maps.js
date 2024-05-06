
let marker, circle, zoomed, map;
let watchId
let whatYouFound = ""
let whenFound;
let showingLocation = false;
let fullScreenActive = false;
let markers = {
    berries: [],
    mushrooms: [],
    fish: []
};
let fishMarker = L.icon({
    iconUrl: 'images/fishMarker.png',
    iconSize: [60, 60]
})
let mushroomMarker = L.icon({
    iconUrl: 'images/mushroomMarker.png',
    iconSize: [60, 60]
})
let berryMarker = L.icon({
    iconUrl: 'images/berryMarker.png',
    iconSize: [60, 60]
})
let fullScreenMap;
let fullScreenMushroomMap;
let fullScreenButton = document.getElementById("fullScreen")
let markerImg = document.getElementById("addMarkerImg")
let selectMarker;
let isFirstClick = true;
let circleRad;
let lastCircle;
let lat;
let lng;
let enabled = false




function createMap(){
    map = L.map('map');
    map.setView([59.055, 10.02], 13);
    
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    window.map = map

    let locationImg = document.getElementById("locationImg")
    markerImg = document.getElementById("addMarkerImg")
    fullScreenButton = document.getElementById("fullScreen")
    fullScreenMap = document.getElementById("mapRegister")

}

function circleRadius(map, latitude, longitude, radius, existingCircle){
    if(existingCircle instanceof L.circle){
        existingCircle.setLatLng([latitude, longitude]).setRadius(radius);
    } else {
    existingCircle = L.circle([latitude, longitude], {
        radius: 10000, // Radius in meters
        color: 'green',
        opacity: 0.8,
        fillOpacity: 0.1,
        weight: 0.7,
    }).addTo(map);
}

    const bounds = existingCircle.getBounds();

    map.fitBounds(bounds);
    return existingCircle;
}

function showLocation(){
    noLocate()
    watchId = navigator.geolocation.watchPosition(success, error);
    locationImg.src = "Images/arrowg.png" 
    enabled = true;
    slider.disabled = false
}

function removeCircle() {
   
    if (circle) {
        map.removeLayer(circle);
        circle = null;
    }
}

function resetMarkerRadius() {
    if (circleRad) {
        map.removeLayer(circleRad);
        circleRad = null;
    }
}

function noLocate(){
    if(watchId){
        navigator.geolocation.clearWatch(watchId)
        }
        enabled = false;
}



function success(position){
    lat = position.coords.latitude
    lng = position.coords.longitude
    const radius = ''
    
    
    if (circle) {
        map.removeLayer(circle);
    }
    
    var circleIcon = L.icon({iconUrl:"images/circle2.svg", iconSize: [20,20]})
    
    
    
    circle = L.marker([lat, lng], {
        icon: circleIcon,
    }).addTo(map);
    
    circle.bindPopup("This is you.")
    map.setView([lat, lng])
    
    if(!zoomed){
        zoomed = map.setView([lat, lng], 13);
    }
    
    circle = circleRadius(map, lat, lng, radius, circle)
    removeCircle()

}

function error(err){
    if(err.code === 1){
        alert("Location access denied.")
        locationImg.src = "Images/arrowgrey.png" 
    }   
}


function addMarker(){
    var img = document.getElementById("addMarkerImg")
    img.src = 'images/buttonMarkerGreen.svg'
    isFirstClick = true;
    map.off('click', addMarkerOnClick);
    map.on('click', addMarkerOnClick);
   
}

function addMarkerOnClick(e){
    if (isFirstClick) {
        isFirstClick = false;
        return;
    }

    const lat = e.latlng.lat;
    const lng = e.latlng.lng;

    if (!marker) {
        marker = L.marker([lat, lng]).addTo(map);
    } else {
        marker.setLatLng([lat, lng]).update();
    }

    marker.setIcon(selectMarker);

    map.panTo([lat, lng]);

    markerImg.src = 'images/buttonMarkerGrey.svg';
}


function fullScreen(){
    if (fullScreenMap.classList.contains("mapRegister")){
        fullScreenMap.classList.remove("mapRegister")
        fullScreenMap.classList.add("mapRegister2")
        fullScreenButton.src = "images/exitFullScreen.svg"
        window.scrollTo({
            top: 1000,
        })
    } else{
        fullScreenMap.classList.remove("mapRegister2")
        fullScreenMap.classList.add("mapRegister")
        fullScreenButton.src = "images/fullScreen.svg"
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    } 
    setTimeout(function() {
        map.invalidateSize();
    }, 1)
}

function fullScreenMushroom(){
    
    if (fullScreenMap.classList.contains("mapRegister")){
        fullScreenMap.classList.remove("mapRegister")
        fullScreenMap.classList.add("mapRegister2")
        fullScreenButton.src = "images/exitFullScreen.svg"
        window.scrollTo({
            top: 1000,
        })
    } else{
        fullScreenMap.classList.remove("mapRegister2")
        fullScreenMap.classList.add("mapRegister")
        fullScreenButton.src = "images/fullScreen.svg"
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    } 
    setTimeout(function() {
        map.invalidateSize();
    }, 1)
}


function registerMarker(){
    if (marker && selectMarker){
        const name = whatYouFound
        const when = whenFound
        const where = whereFound
        //const findImage = imgOfFind
        const findInfo = {
            nameOfFound: name,
            dateWasFound: when,
            //imageOfFind: imgOfFind,
            whereItWasFound: whereFound,
            location: marker.getLatLng(),
            marker: marker,
            selectMarker: selectMarker
        }

            if(selectMarker == berryMarker){
                markers.berries.push(findInfo);
            } else if(selectMarker == fishMarker){
                markers.fish.push(findInfo);
            } else if(selectMarker == mushroomMarker){
                markers.mushrooms.push(findInfo);
            }
    }
        
}

/*function hideAll(){

    markers.berries.forEach(function(findInfo) {
        const marker = findInfo.marker;
        if (marker) {
            map.removeLayer(marker);
        }
    })

    markers.fish.forEach(function(findInfo) {
        const marker = findInfo.marker;
        if (marker) {
            map.removeLayer(marker);
        }
    })

    markers.mushrooms.forEach(function(findInfo) {
        const marker = findInfo.marker;
        if (marker) {
            map.removeLayer(marker);
        }
    })

    if(fullScreenMap.classList.contains("mapRegister2")){
    fullScreenMap.classList.remove("mapRegister2")
    fullScreenMap.classList.add("mapRegister2")
} else {
        fullScreenMap.classList.remove("mapRegister")
        fullScreenMap.classList.add("mapRegister")
    }
}*/

function selectMark(){
    mushroomsMarker()
    berriesMarker()
    fishesMarker()
}

function mushroomsMarker(){
    if(selectMarker == "mushroom"){
    selectMarker = mushroomMarker
    }
}
function berriesMarker(){
    if(selectMarker == "berry"){
    selectMarker = berryMarker
    }
}
function fishesMarker(){
    if(selectMarker == "fish"){
    selectMarker = fishMarker
    }
}


function showFish(){
    markers.fish.forEach(function(findInfo) {
        const location = findInfo.location;
        const newMarker = L.marker([location.lat, location.lng], { icon: findInfo.selectMarker }).addTo(map);
        const popupContent = `
                <b>${findInfo.nameOfFound}</b> <br>
                ${findInfo.whereItWasFound}<br>
                ${findInfo.dateWasFound}<br>
                `;
        newMarker.bindPopup(popupContent);
        findInfo.marker = newMarker;
    });
}
function showBerry(){
    markers.berries.forEach(function(findInfo) {
        const location = findInfo.location;
        const newMarker = L.marker([location.lat, location.lng], { icon: findInfo.selectMarker }).addTo(map);
        const popupContent = `
                <b>${findInfo.nameOfFound}</b> <br>
                ${findInfo.whereItWasFound}<br>
                ${findInfo.dateWasFound}<br>
                `;
        newMarker.bindPopup(popupContent);
        findInfo.marker = newMarker;
    });
}
function showMushroom(){
    markers.mushrooms.forEach(function(findInfo) {
        const location = findInfo.location;
        const newMarker = L.marker([location.lat, location.lng], { icon: findInfo.selectMarker }).addTo(map);
        const popupContent = `
                <b>${findInfo.nameOfFound}</b> <br>
                ${findInfo.whereItWasFound}<br>
                ${findInfo.dateWasFound}<br>
                `;
        newMarker.bindPopup(popupContent);
        findInfo.marker = newMarker;
    });
}

