function logIn(input){


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