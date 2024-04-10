
function mainPageView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <input type="text" id="searchbar" placeholder="Search in users, berries, mushrooms">
    <button id="Profile" onclick="OpenProfile()">(Profile)</button> </br>
   <button id="Berries" onclick="clickBerriesf()">Berries</button>
   <button id="Mushrooms" onclick="clickMushroomsf()">Mushrooms</button>
   <button id="Fish" onclick="ClickFishf()">Fish</button>  </br>
   <button id="Register New Find" onclick="registerNewFind()">Register New Find</button>  `;
}

function OpenProfile() {
    profileview();
}

function clickBerriesf() {
    berryview();
}

function clickMushroomsf() {
    mushroomview();
}

function ClickFishf() {
    fishview();
}
function registerNewFind() {
    registerViewF();
}