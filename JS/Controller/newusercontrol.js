function registerUser (id, input){
    let newName = document.getElementById("newName").value;
    let newEmail = document.getElementById("newPassword").value;
    let newPassword = document.getElementById("newPassword").value;
    registerUser = {
        userInputName: newName,
        userInputAddress: '',
        userInputPassword: newPassword,
        userInputEmail: newEmail,
    }

    model.data.users.push(registerUser);
    newUserView();

}