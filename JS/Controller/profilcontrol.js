function viewProfile(id){
    model.app.profileToVisit = id;
    model.app.currentPage = 'profilPage';
    profileView();
}

function returnOwnProfile(){
    backToProfile();
    let html = `<div id="closeButton"><button id="returnButton" onclick="profileView()">X</button></div>`;
    return html;
}