let = foundThing = {
    Species: [""],
    date: [""],
    place: [""]
}
registerViewF()
function registerViewF(){
    document.getElementById("app").innerHTML = /*html*/`
    <button onclick="mainPageView()" class="mainPageBtn">Gå tilbake til forsiden</button>
    <b><h1>Registrer nytt funn</h1></b>
    <br/>
    <br/>

        Navn <input type="text" id="finds" placeholder="Hva du har funnet"><br/>
        Dato funnet <input id="dateFound" type="date"><br/>
        Sted funnet <input id="foundSpecies" type="text"><br/>
        Kategori <select name="Kategorier" id="Categories">
            <option value="berry">Bær</option>
            <option value="mushroom">Sopp</option>
            <option value="fish">Fisk</option>
        </select>
        Bilde <input onchange="setSightingImage(this.value)" type="file" placeholder="Hvor har du funnet dette?"> <!-- BONUS (?) --->

    <br/>
    <div class="trineAndLisasReallyCoolButton" onclick="addNewFind()" id="addNewFindButton">Registrer</div>
    `;
}



function addNewFind(){
    model.data.sightings.push(model.inputs.registerSighting)
    model.inputs.registerSighting = {}
    mainPageView();
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
