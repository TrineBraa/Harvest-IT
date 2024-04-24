function updateView() {
    if (model.app.currentPage == 'mainPage') mainPageView(); 
    if (model.app.currentPage == 'loginPage') logInView();
    if (model.app.currentPage == 'registerUserPage') newUserView();
    if (model.app.currentPage == 'registerFindingsPage') registerViewF();
    if (model.app.currentPage == 'berryPage') berryView();
    if (model.app.currentPage == 'fishPage') fishView();
    if (model.app.currentPage == 'mushroomPage') mushroomView();
    if (model.app.currentPage == 'profilePage') profileView();
    if (model.app.currentPage == 'friendProfile') friendProfile();
}