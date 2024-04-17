function viewProfile(id){
    model.app.profileToVisit = id
    model.app.currentPage = 'profilePage'
    profileView()
}