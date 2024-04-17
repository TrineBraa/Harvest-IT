//placeholder
function profileView(){
    let user = model.data.users.find((u) => u.id == model.app.profileToVisit)
    console.log(user)
    document.getElementById("app").innerHTML = /*html*/ `
    <div id="profileContainer">
        <h2>Hei, ${user.id}!</h2>

        <img id="smileyface" src="./Images/smileyface.png"> 
        <div>Navn: ${user.id}</div>
        <div>Tlf: ${user.tlf}</div>
        <div>E-mail: ${user.email}</div>
        <div>Adresse: ${user.adress}</div>
        <div>Antall registreringer: 6</div>
    </div>

        <button onclick="mainPageView()" class="mainPageBtn">Gå tilbake til forsiden</button>
    <div id="profileBoxContainer">
        <div id="friendsContainer">
            <h3 id="Profiltitle">Venner</h3>
            ${makeFriendsListHtml()}
        </div>
        <br/>
        <div id="earnedBadges">
            <h3 id="Profiltitle">Tjente medaljer</h3>
        </div>
        <br/>
        <div id="nextBadge">
            <h3 id="Profiltitle">Neste Medalje</h3>
        </div>
        <br/>
        <div id="registrationsDone">
            <h3 id="Profiltitle">Registrasjoner</h3>
        </div>
    </div>

 
    `;
}

function makeFriendsListHtml(){
    let user = model.data.users.find((u) => u.id == model.app.profileToVisit)
    let html = '';
    for (let i = 0 ; i < user.friends.length ; i++){
        let friend = model.data.users.find((f) => f.id == user.friends[i])
        html += /*HTML*/`
        <div class="friend" onclick="viewProfile('${friend.id}')">
            <div>${friend.id}</div>
            <img class="friendProfilePic" src="${friend.profilePic}"/>
        </div>
        `
    }
    return html;
}

// function findUser(friendId){
    
//     for (let i = 0; i < model.data.users.length; i++) {
//         console.log("hei")
//         if(model.data.users[i].id == friendId){
//             return model.data.users[i]
//         }
//     }
//     return null
// }

