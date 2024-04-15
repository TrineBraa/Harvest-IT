

function mainPageView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    Du er logget inn som ${model.app.loggedInUser}
    <div id="mainContainer">
        <button id="Profile" onclick="OpenProfile()">(Profile)</button>
        <div class="search-wrapper">
            <div class="row">
                <input type="text" id="input-box" placeholder="Search for Activities" autocomplete="off">
                <button id="Search"><i class="fa-solid fa-magnifying-glass"></i></button>
                <div id="resultBox" class="result-box">
                </div>
            </div>
        </div>
        <br/>
        <button id="Berries" onclick="clickBerriesf()">Berries
            <img class="berryPic" src="./Images/berries.png">
        </button>
        <button id="Mushrooms" onclick="clickMushroomsf()">Mushrooms
            <img class="mushyPic" src="./Images/shrooms.png">
        </button>
        <button id="Fish" onclick="ClickFishf()">Fish
            <img class="fishypic" src="./Images/FishBtn.png">
        </button>  <br/>
        <button id="RegisterNewFind" onclick="registerNewFindf()">Register New Find
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

function OpenProfile() {
    profileview();
}

function clickBerriesf() {
    berryView();
}

function clickMushroomsf() {
    mushroomView();
}

function ClickFishf() {
    fishView();
}
function registerNewFindf() {
    registerViewF();
}