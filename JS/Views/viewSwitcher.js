function updateView() {
    if (model.app.currentPage == 'mainPage') mainPageView(); 
    if (model.app.currentPage == 'loginPage') logInView();
    if (model.app.currentPage == 'registerUserPage') newUserView();
    if (model.app.currentPage == 'berryPage') berryView()
    
}