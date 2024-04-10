function logIn(){  //Har ikke funnet ut hvordan denne burde utformes for å gjenkjenne epost og passord til brukere.
    let user = findUser();

    const login = model.inputs.loginInputs; 

    console.log("Email: " + model.inputs.loginInputs.email)
    console.log("Password: " + model.inputs.loginInputs.password)

    if (!user){ // hvis vi ikke finner en bruker
        login.errorMsg = 'Feil brukernavn og/eller passord';
        logInView();
        return
    }

    model.app.currentPage = 'mainPage';
    model.app.loggedInUser = user.id;
    logIn.errorMsg = null;
    login.email = null;
    login.password = null;
    updateView();
}

function findUser(){
    return model.data.users.find(user => user.email === model.inputs.loginInputs.email && user.password === model.inputs.loginInputs.password)
}

// function findUser(){
//     for (let user of model.data.users) {
//         if (user.email == model.inputs.loginInputs.email) {
//             if(user.password == model.inputs.loginInputs.password){
//                 return user;
//             }
//         }
//         return null;
//     }
// }
