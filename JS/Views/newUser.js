// Register new user VIEW

function newUserView () {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div id="newUserDiv">
    <h1>Harvest IT</h1>

    <input class="newUser" id="newName" type="text" placeholder="Full Name" oninput="model.inputs.registerUser.id=this.value" value="${model.inputs.registerUser.id ?? ''}">
    <input class="newUser" id="newEmail" type="email" placeholder="E-mail" oninput="model.inputs.registerUser.email=this.value" value="${model.inputs.registerUser.email ?? ''}">
    <input class="newUser" id="newPassword" type="password" placeholder="Password" oninput="model.inputs.registerUser.password=this.value" value="${model.inputs.registerUser.password ?? ''}">

    <button class="newUserButton" onclick="registerUser(id)">Create New User</button>
    <button class="newUserButton" onclick="logInView()">Back to Login</button>
    </div>
    
    `;
}