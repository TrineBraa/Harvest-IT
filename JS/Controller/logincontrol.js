function logIn(){  //Har ikke funnet ut hvordan denne burde utformes for å gjenkjenne epost og passord til brukere.
    let email = findUser();
    const login = model.inputs.loginInputs; 

    if(email == null) {
        login.errorMsg = 'Feil brukernavn og/eller passord';
    } else {
        model.app.page = 'mainPage';
        model.app.loggedInUser = email;
        loginInputs.errorMsg = null;
        loginInputs.email = null;
        loginInputs.password = null;
    }
    updateView();
}

function findUser(){
    for (let user of model.data.users) {
        if (user.email == model.inputs.loginInputs.email && 
            user.password == model.inputs.loginInputs.password) {
                return user.email;
            }
            return null;
}

mainView();
}


function registerUser (){
    registerUser = {
        userInputName: '',
        userInputAddress: '',
        userInputPassword: '',
        userInputEmail: '',
    }

    model.data.users.push(registerUser);
    newUserView();

}