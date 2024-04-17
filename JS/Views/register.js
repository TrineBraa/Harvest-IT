// Register new findings VIEW

//placholder
function registerViewF(){
    document.getElementById("app").innerHTML = /*html*/`
    <button onclick="mainPageView()" class="mainPageBtn">Gå tilbake til forsiden</button>
    <div>Here you can register your finds</div>

    <div>
        Navn <input type="text">
        Dato funnet <input type="date">
        Sted funnet <input type="text">

        Bilde <input type="file"> <!-- BONUS (?) --->
    </div>
    `;
}
