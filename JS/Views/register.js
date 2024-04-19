// Register new findings VIEW

//placholder
function registerViewF(){
    document.getElementById("app").innerHTML = /*html*/`
    <button onclick="mainPageView()" class="mainPageBtn">Gå tilbake til forsiden</button>
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
    <button onclick="addNewFind()">Registrer</button>
    `;
}


function addNewFind(){

}