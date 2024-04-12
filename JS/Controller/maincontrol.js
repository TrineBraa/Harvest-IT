fetch("https://raw.githubusercontent.com/EvenPB/Harvest-Modell/main/model.js").then(res => res.json()).then
(data => {})




function returnButtonMain(){
    let html = `<div id="closeButton"><button id="returnButton" onclick="mainPageView()">X</button></div>`;
    return html;
}