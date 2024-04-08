function logIn(input){  //Har ikke funnet ut hvordan denne burde utformes for å gjenkjenne epost og passord til brukere.
loginInputs = {
    email: emailInput.input.value
}

mainView()
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