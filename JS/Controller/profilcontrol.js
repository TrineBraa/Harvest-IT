function viewProfile(id){
    model.app.profileToVisit = id;
    model.app.currentPage = 'profilPage';
    profileView();
}

function returnOwnProfile(){
    let html = `<div id="closeButton"><div id="returnButton" onclick="viewProfile('${model.app.loggedInUser}')">X</div></div>`;
    return html;
}