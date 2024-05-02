
function registerView(){
    
    mapHTML = /*HTML*/`
    <div id="map" class="map">
        <div class="mapButtons">
            <img id="locationImg" src="images/arrowgrey.png" onclick="showLocation()">
            <img id="addMarkerImg" onclick="addMarker()" src="images/buttonMarkerGrey.svg">
        </div>
        <div>
            <img id="fullScreen" onclick="fullScreen()" src="images/fullScreen.svg">
        </div>
    </div>
    `;
    
    document.getElementById("mapRegister").innerHTML = mapHTML
    selectMarker = "berry"
    createMap()
    fullScreenMap = document.getElementById("mapRegister")
    selectMark()
    
}

function registerViewF(){
    document.getElementById("app").innerHTML = /*html*/`
    <div onclick="mainPageView()" class="trineAndLisasReallyCoolButton">Gå tilbake til forsiden</div>
    <h1>Registrer nytt funn</h1>
    <br/>
    <br/>

        Navn <input onchange="setSightingName(this.value)" type="text" id="found" placeholder="Hva du har funnet"><br/>
        Dato funnet <input onchange="setSightingDate(this.value)" id="dateFound" type="date"><br/>
        Sted funnet <input onchange="setSightingLocation(this.value)" id="spotFound" type="text"><br/>
        Kategori <select onchange="setSightingCategory(this.value)" name="Kategorier" id="Categories">
            <option value="berry">Bær</option>
            <option value="mushroom">Sopp</option>
            <option value="fish">Fisk</option>
        </select>
        Bilde <input onchange="setSightingImage(this.value)" type="file" placeholder="Hvor har du funnet dette?"> <!-- BONUS (?) --->

    <br/>
    <div class="trineAndLisasReallyCoolButton" onclick="addNewFind()" id="addNewFindButton">Registrer</div>
    <span class="errorLoggin">${model.inputs.registerSighting.errorMsg}</span>
    <div id="mapRegister" class="mapRegister2">
    `;
    registerView()
    fullScreen()

}



function addNewFind(){
    model.data.sightings.push(model.inputs.registerSighting)
    const register = model.inputs.registerSighting;
    if (!register.nameInput || !register.lastHarvestInput || !register.locationInput) {
        register.errorMsg = 'Feltene kan ikke være tomme';
        registerViewF();
        return
    } else if(!marker){
        register.errorMsg = 'Du må plassere markør på kartet';
        registerViewF();
        return
    }
    //model.inputs.registerSighting = {}
    
    let messageDiv = document.createElement('div');
    messageDiv.textContent = 'Takk! Ditt funn er registrert.';
    messageDiv.classList.add('registration-message');
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        document.body.removeChild(messageDiv);
        mainPageView()
    }, 3000);
    registerMarker()
}




// function pushSpecies(found, value){
//    model.data.sightings.push(found.value)
// }
// function pushSpot(input){
//    model.data.sightings.push(input.value)
// }
// function pushCategory(){
//     sightings.push()
// }
// function pushPicture(){
//     sightings.push()
// }
