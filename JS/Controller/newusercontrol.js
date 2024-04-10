function registerUser (id, input){
    let newName = document.getElementById("newName").value;
    let newEmail = document.getElementById("newEmail").value;
    let newPassword = document.getElementById("newPassword").value;
    newUser = {
        id: newName,
        email: newEmail,
        password: newPassword,
        friends: [],
        profilePic: '',
    }

    model.data.users.push(newUser);
    newUserView();

}