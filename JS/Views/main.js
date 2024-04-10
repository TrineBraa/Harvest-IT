

function mainPageView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    Du er logget inn som ${model.app.loggedInUser}
    <div class="search-wrapper">
    <label for="search"> Search Bar</label>
    <input type="search" id="searchUsers" placeholder="Search in users">
    </div>
    <div class="user-cards">
    <div class="card">
    <div class="header">Navn</div>
    <div class="body">Email/Informasjon</div>
    </div>
    </div>
    <button id="Profile" onclick="OpenProfile()">(Profile)</button> <br/>
   <button id="Berries" onclick="clickBerriesf()">Berries</button>
   <button id="Mushrooms" onclick="clickMushroomsf()">Mushrooms</button>
   <button id="Fish" onclick="ClickFishf()">Fish</button>  <br/>
   <button id="RegisterNewFind" onclick="registerNewFindf()">Register New Find</button>  `;
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
function registerNewFindf() {
    registerViewF();
}