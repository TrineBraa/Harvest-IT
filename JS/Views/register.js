// Register new findings VIEW

//placholder
function registerViewF(){
    document.getElementById("app").innerHTML = /*html*/`
    <div onclick="mainPageView()" class="trineAndLisasReallyCoolButton">Gå tilbake til forsiden</div>
    <h1>Registrer nytt funn</h1>
    <br/>
    <br/>

        Navn <input type="text" placeholder="Hva du har funnet"><br/>
        Dato funnet <input type="date"><br/>
        Sted funnet <input type="text"><br/>
        Kategori <select name="Kategorier">
            <option value="berry">Bær</option>
            <option value="mushroom">Sopp</option>
            <option value="fish">Fisk</option>
        </select>
        Bilde <input type="file"> <!-- BONUS (?) --->

    <br/>
    <div class="trineAndLisasReallyCoolButton" onclick="addNewFind()">Registrer</div>
    `;
}


function addNewFind(){

}