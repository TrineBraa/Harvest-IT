//placeholder
function profileView(){
    document.getElementById("app").innerHTML = /*html*/ `
    <div id="profileContainer">
    <div>Profile viewer</div>

        <img id="smileyface" src="./Images/smileyface.png"> 
        <div>Navn: Linn</div>
        <div>Tlf: 11 11 11 11</div>
        <div>E-mail: linn@gmail.com</div>
        <div>Adresse: Linn Linnsens gate 1, 1111 Larvik</div>
        <div>Antall registreringer: 6</div>



        <div id="friendsContainer">
        </div>
        <div id="earnedBadges">
        </div>
        <div id="nextBadge">
        </div>
        <div id="registrationsDone">
        </div>
    </div>

    <button onclick="mainPageView()" class="mainPageBtn">Gå tilbake til hovedsiden</button>
    `;
}