logInView()


function logInView(){
    document.getElementById("app").innerHTML= /*HTML*/ `
    <div id="loginScreen">
        <h1>Harvest IT</h1>
        <br/>
        <img id="mushroomLogin" src="./Images/mushroomlogo.png">
        <br/>
        <br/>
        <div id="logInInputContainer">
        <input class="loginInput" type="text" id="emailInput" placeholder="E-mail" required/>
        <br/>
        <input class="loginInput" type="text" id="passwordInput" placeholder="Password" required>
        </div>
        <br/>
        <br/>
        <button class="loginButton" onclick="logIn(id, input)">Log In</button>
        <br/>
        <button class="loginButton" onclick="newUserView()">Register New User</button>
        <br/>
    </div>
    `;
}

function newUserView () {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <h1>Harvest IT</h1>

    <input type="text" placeholder="Full Name">
    <input type="text" placeholder="E-mail">
    <input type="text" placeholder="Password">

    <button onclick="registerUser()">Register</button>
    <button onclick="logInView()">Back to Login</button>
    `;
}