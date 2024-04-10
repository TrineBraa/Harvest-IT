// Register new user VIEW

function newUserView () {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div id="newUserDiv">
    <h1>Harvest IT</h1>

    <input class="newUser" id="newName" type="text" placeholder="Full Name">
    <input class="newUser" id="newEmail" type="text" placeholder="E-mail">
    <input class="newUser" id="newPassword" type="text" placeholder="Password">

    <button class="newUserButton" onclick="registerUser(id)">Create New User</button>
    <button class="newUserButton" onclick="logInView()">Back to Login</button>
    </div>
    `;
}