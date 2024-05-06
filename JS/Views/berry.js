//placeholder

function berryMapView(){
    
    berryMapHTML = /*HTML*/`
    <div id="map" class="map">
        <div class="mapButtons">
            <img id="locationImg" src="images/arrowgrey.png" onclick="showLocation()">
        </div>
        <div>
            <img id="fullScreen" onclick="fullScreen()" src="images/fullScreen.svg">
        </div>
    </div>
    `;
    
    document.getElementById("berryMap").innerHTML = berryMapHTML
    
    createMap()
    fullScreenMap = document.getElementById("berryMap")
    showBerry()
    sliderZoomer()
}

function berryView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <h2>Bær</h2>
    ${returnButtonMain()}
    <div id="sliderContainer">
    <span>Avstand fra din lokasjon: <span id="distanceDisplay"></span></span>    <br/>
    <br/>
    <input type="range" min="1" max="1000" value="500" class="slider" id="myRange">
    </div>
    <br/>
    <div id="berryMap">
    </div>
     <br/>
     <br/>
    
    <h3>Registrerte bær:</h3>
    <ul id= "listedFinds">
       <li>Markjordbær <img src="./Images/iicon.png" class="iicon" onclick="wildStrawberryInfoView()"></li> 
       <li>Blåbær <img src="./Images/iicon.png" class="iicon" onclick="blueberryInfoView()"></li> 
       <li>Bringebær <img src="./Images/iicon.png" class="iicon" onclick="raspberryInfoView()"></li> 
    </ul>
    `;
    berryMapView()
    fullScreen()
    resetMarkerRadius()
}

function sliderZoomer(){
    slider = document.getElementById("myRange");
    var distanceDisplay = document.getElementById("distanceDisplay");
    var sliderMoved = false;

    slider.disabled = true;

    slider.addEventListener("input", function() {
        if (enabled) {
            var distance = parseInt(this.value);
            if(distance <= 9){
                displayText = distance * 100 + " meters"
            } else{
                displayText = (distance / 10) + " km"
            }
            distanceDisplay.textContent = displayText;
            updateMap(distance);
            sliderMoved = true;
        }
    });
}

function updateMap(distance) {
  

    var radiusInMeters = distance * 100;
    if (circleRad){
        circleRad.setRadius(radiusInMeters)    
    } else {
        circleRad = L.circle([lat, lng], {
            radius: radiusInMeters,
            color: 'green',
            opacity: 0.8,
            fillOpacity: 0.1,
            weight: 0.7,
        }).addTo(map);
    }

    var bounds = circleRad.getBounds();

    map.fitBounds(bounds);

    if (lastCircle) {
        map.removeLayer(lastCircle);
    }

}

function wildStrawberryInfoView(){ 
    document.getElementById('app').innerHTML = /*HTML*/ `
    ${returnButtonBerry()}
    <h2>Markjordbær</h2>
    <div>Sesong: sommer og tidlig høst</div>
    <h3>Om markjordbær</h3>
    <p class="infoParagraph">Markjordbær er en flerårig urt i rosefamilien. Planten vokser gjerne på enger
    og tørrbakker og er vanlig over hele landet. Markjordbær er smakfull og nytes som de er. 
    Det vitenskapelige navnet på markjordbær er <em>fragaria vesca</em>.</p>
    <h3>Beskrivelse</h3>
    <p class="infoParagraph">Planten er 5-20 centimer høy, med lange utløpere langs bakken som slår rot og danner nye planter.
    Bladene er trekoplede og tannete, blomstene er hvite. Jordbæret, som er en oppsvulmet blomsterbunn, løsner lett.</p>
    <p class="infoParagraph">Markjordbær vokser på enger, tørrbakker og i urterik skog, 
    for det meste på litt næringsrik grunn. De er vanlige i hele landet.</p>

    <h3>Bilder</h3>
    <div class="infoImg">
        <img src="./Images/wildstrawberry.jpeg">
        <img src="./Images/wildstrawberry2.jpeg">
    </div>
    `;
}

function blueberryInfoView () { 
    document.getElementById('app').innerHTML = /*HTML*/ `
    ${returnButtonBerry()}
    <h2>Blåbær</h2>
    <div>Sesong: sensommer og høst</div>
    <h3>Om blåbær</h3>
    <p class="infoParagraph">Blåbær er en dvergbusk i bærlyngslekten i lyngfamilien med grønne kantete greiner. Blåbær er vanlig i storedeler av Europa, 
    men finnes også i Nord-Amerike og Asia. I norge finnes planten over hele landet, fra skogsområder i lavlandet til rundt 1700 meter over havet på 
    høyfjell. Blåbæren's vitenskapelige navn er <em>Vaccinium Myrtillus</em>.</p>
    <h3>Beskrivelse</h3>
    <p class="infoParagraph">Planten blir mellom 20 og 30 cm høy, og frukten som blir dannet, er blåsvarte, saftfulle bær - blåbær - 
    som blir brukt til saft of syltetøy.</p>
    <p class="infoParagraph">Skogsblåbær kan dessverrre ikke dyrkes og blåbær du finner i butikken kalles hageBlåbær (<em>Vaccinium Corymbosum</em>) 
    og har hvitt fruktkjøtt.</p>
    <br/>
    <h3>Bilder</h3>
    <div class="infoImg">
        <img src="./Images/Blabær.jpg">
        <img src="./Images/Blabar2.jpg">
    </div>
    `;

}

function raspberryInfoView () { 
    document.getElementById('app').innerHTML = /*HTML*/ `
    ${returnButtonBerry()}
    <h2>Bringebær</h2>
    <div>Sesong: vår, sommer og tidlig høst</div>
    <h3>Om bringebær</h3>
    <p class="infoParagraph">Bringebær er en gruppe arter i bjørnebærslekta i rosefamilien av meterhøye
    busker med spiselige frukter. Selve bringebæret er sammensatte steinfrukter. Den
    mest kjente i Norge er bringebær, men svartbringebær dyrkes også. Det vitenskapelige navnet på bringebær er <em>rubus idaeus</em>.</p>
    <h3>Beskrivelse</h3>
    <p class="infoParagraph">Bringebær har glatte årsskudd med finnete blad med fem småblad. Fra 
    årsskuddene vokser det året etter ut sidekvister med trekoblede blad. De femtallige
    blomstene har hvite kronblad, mange pollenbærere og mange frie fruktblad. Fruktene
    som dannes er en sammensatt steinfrukt, og røde, eller gule.</p>
    <p class="infoParagraph">I Norge er bringebær vanlig i skogen og på steinete steder. De er vanlig over det meste av landet.</p>
    <h3>Bilder</h3>
    <div class="infoImg">
        <img src="./Images/rasberry.jpeg"> 
        <img src="./Images/raspberry2.jpeg">
    </div>
    `;

}