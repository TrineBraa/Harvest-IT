let availableKeywords = [
    'Fisk',
    'Sopp',
    'Bær',
    'Kart',
    'Profil',
    'Hjelp',
];

// const resultsBox = document.querySelector(".results-box");
// const inputBox = document.getElementById("input-box");

// inputBox.onkeyup = function(){
//     let result = [];
//     let input = inputBox.value;
//     if(input.length){
//         result = availableKeywords.filter((keyword)=>{
//           return  keyword.toLowerCase().includes(input.toLowerCase());
//     });
//     console.log(result);
//     }
//     display(result);
//     if(!result.length) {
//         resultsBox.innerHTML = '';
//     }

//  };
// function display(result){
//     const content = result.map((list) => {
//         return "<li onclick=selectInput(this)> "+ list + "</li>";
//     });
//     resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
// }
// function selectInput(list) {
//     inputBox.value = list.innerHTML
//     resultsBox.innerHTML = '';
// }

function returnButtonMain(){
    let html = `<div id="closeButton"><button id="returnButton" onclick="mainPageView()">X</button></div>`;
    return html;
};


function backToProfile(){
    model.app.profileToVisit = model.app.loggedInUser
}