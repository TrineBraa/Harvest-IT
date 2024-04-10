function logInView(){
    document.getElementById("app").innerHTML= /*HTML*/ `
    <div id="loginScreen">
        <h1>Harvest IT</h1>
        <br/>
        <img id="mushroomLogin" src="./Images/mushroomlogo.png">
        <br/>
        <br/>
        <div id="logInInputContainer">
        <input class="loginInput" type="text" oninput="model.inputs.loginInputs.email=this.value" value="${model.inputs.loginInputs.email ?? ''}" placeholder="E-mail" required/>
        <br/>
        <input class="loginInput" type="password" oninput="model.inputs.loginInputs.password=this.value" value="${model.inputs.loginInputs.password ?? ''}" placeholder="Password" required>
        <br/>
        <span class="errorLoggin">${model.inputs.loginInputs.errorMsg}</span>
        </div>
        <br/>
        <br/>
        <button class="loginButton" onclick="logIn()">Log In</button>
        <br/>
        <button class="loginButton" onclick="newUserView()">Register New User</button>
        <br/>
    </div>
    `;
}