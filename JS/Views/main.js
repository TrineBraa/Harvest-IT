

function mainPageView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
   </b> </em>
    <button onclick="openProfile()" id="Profile"><i class="fa-sharp fa-solid fa-user"></i><br/>${model.app.loggedInUser}</button>
    <button id="logOut" onclick="logInView()"><i class="fa-sharp fa-solid fa-key"></i>Logg ut</button>
    <div id="mainContainer">
        <div class="search-box">
            <div class="row">
                <input type="text" id="input-box" placeholder="Søk for aktiviteter" autocomplete="off">
                <button id="Search"><i class="fa-solid fa-magnifying-glass"></i></button> 
                <div id="resultBox" class="result-box">
                </div>
            </div>
        </div>
        <br/>
        <button id="Berries" onclick="berryView()">Bær
            <img class="berryPic" src="./Images/berries.png"> 
        </button>
        <button id="Mushrooms" onclick="mushroomView()">Sopp
            <img class="mushyPic" src="./Images/shrooms.png">
        </button>
        <button id="Fish" onclick="fishView()">Fisk
            <img class="fishypic" src="./Images/FishBtn.png">
        </button>  <br/>
        <button id="RegisterNewFind" onclick="registerViewF()">Registrer nytt funn
        <img class="registerPlus" src="./Images/Register.png">
        </button>
   </div> `;

const resultsBox = document.getElementById("resultBox");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
          return  keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
    }
    display(result);
    if(!result.length) {
        resultsBox.innerHTML = '';
    }

 };

 function display(result){
    const content = result.map((list) => {
        return "<li onclick=selectInput(this)> "+ list + "</li>";
    });
    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}
function selectInput(list) {
    inputBox.value = list.innerHTML
    resultsBox.innerHTML = '';
}
}

function openProfile() {
    backToProfile();
    profileView();
}