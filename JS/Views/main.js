

function mainPageView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    Du er logget inn som ${model.app.loggedInUser}
    <button id="Profile" onclick="OpenProfile()">(Profile)</button>
    <div class="search-wrapper">
    <label for="search"> Search Bar</label>
    <input type="search" id="searchUsers" placeholder="Search in users">
    </div>
    <div class="user-cards">
    <div class="card">
    <div class="header">Name</div>
    <div class="body">Email/Information</div>
    <br/>
    <img id="mushroomLogin" src="./Images/mushroomlogo.png">
    </div>
    </div>
    <br/>
   <button id="Berries" onclick="clickBerriesf()">Berries</button>
   <button id="Mushrooms" onclick="clickMushroomsf()">Mushrooms</button>
   <button id="Fish" onclick="ClickFishf()">Fish
    <img class="fishypic" src="/Images/FishBtn.png">
   </button>  <br/>
   <button id="RegisterNewFind" onclick="registerNewFindf()">Register New Find</button>  `;
}

function OpenProfile() {
    profileview();
}

function clickBerriesf() {
    berryView();
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