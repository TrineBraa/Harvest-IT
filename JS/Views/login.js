function logInView(){
    document.getElementById("app").innerHTML= /*HTML*/ `
    <div id="loginScreen">
        <h1>Harvest IT</h1>
        <br/>
        <img id="mushroomLogin" src="./Images/mushroomlogo.png">
        <br/>
        <br/>
        <div id="logInInputContainer">
            <label of="loginEmail">E-mail</label>
            <input id="loginEmail" class="loginInput" type="email" oninput="model.inputs.loginInputs.email=this.value" value="${model.inputs.loginInputs.email ?? ''}" required/>
            <br/>
            <label of="loginPass">Passord</label>
            <input id="loginPass" class="loginInput" type="password" oninput="model.inputs.loginInputs.password=this.value" value="${model.inputs.loginInputs.password ?? ''}" required>
            <br/>
            <span class="errorLoggin">${model.inputs.loginInputs.errorMsg}</span>
        </div>
        <br/>
        <div class="trineAndLisasReallyCoolButton" onclick="logIn()">Logg inn</div>
        <br/>
        <div class="trineAndLisasReallyCoolButton" onclick="newUserView()">Registrer ny bruker</div>
        <br/>
    </div>
    `;
}