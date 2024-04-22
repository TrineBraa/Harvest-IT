// Register new user VIEW

function newUserView () {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div id="newUserDiv">
    <h1>Harvest IT</h1>
    <br/>
    <img id="mushroomLogin" src="./Images/mushroomlogo.png">
    <br/>

    <input class="newUser" id="newName" type="text" placeholder="Navn" oninput="model.inputs.registerUser.id=this.value" value="${model.inputs.registerUser.id ?? ''}">
    <br/>
    <input class="newUser" id="newEmail" type="email" placeholder="E-mail" oninput="model.inputs.registerUser.email=this.value" value="${model.inputs.registerUser.email ?? ''}">
    <br/>
    <input class="newUser" id="newPassword" type="password" placeholder="Passord" oninput="model.inputs.registerUser.password=this.value" value="${model.inputs.registerUser.password ?? ''}">

    <br/>
    <div class="trineAndLisasReallyCoolButton" onclick="registerUser(id)">Opprett ny bruker</div>
    <br/>
    <div class="trineAndLisasReallyCoolButton" onclick="logInView()">Tilbake til logg inn</div>
    </div>
    
    `;
}