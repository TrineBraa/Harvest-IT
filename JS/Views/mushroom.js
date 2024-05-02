//placeholder

function mushroomMapView(){
    
    mushroomMapHTML = /*HTML*/`
    <div id="map" class="map">
        <div class="mapButtons">
            <img id="locationImg" src="images/arrowgrey.png" onclick="showLocation()">
        </div>
        <div>
            <img id="fullScreen" onclick="fullScreen()" src="images/fullScreen.svg">
        </div>
    </div>
    `;
    
    document.getElementById("mushroomMap").innerHTML = mushroomMapHTML
    
    createMap()
    showMushroom()
    fullScreenMap = document.getElementById("mushroomMap")
}

function mushroomView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <h2>Sopp</h2>
    ${returnButtonMain()}
    <div id="sliderContainer">
    <span>Avstand fra din lokasjon</span>
    <br/>
    <br/>
    <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
    </div>
    <br/>
    <div id="mushroomMap">
    </div>
    <br/>
    <br/>
    
    <h3>Registrerte Sopp:</h3>
    <ul id= "listedFinds">
    <li>Kantarell <img src="./Images/iicon.png" class="iicon" onclick="chanterelleInfoView()"></li> 
    <li>Steinsopp <img src="./Images/iicon.png" class="iicon" onclick="pennyBunInfoView()"></li> 
    <li>Sjampinjong <img src="./Images/iicon.png" class="iicon" onclick="AgaricusInfoView()"></li> 
    </ul>
    `;
    mushroomMapView()
    fullScreen()
}

function chanterelleInfoView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    ${returnButtonMushroom()}
    <h2>Kantarell</h2>
    <div>Sesong: fra juni til oktober</div>
    <h3>Om Kantarell</h3>
    <p class="infoParagraph">Den ekte kantarellen er en av Norges beste og mest gjenkjennelige matsopper. Den 
    vokser i hele landet og har lang sesong. Det vitenskapelige navnet for kantarell er <em>Chantarellus Cibarius</em>.</p>
    <h3>Beskrivelse</h3>
    <p class="infoParagraph">Ekte Kantarell er eggegul med butte, gaffelgrenede ribber på undersiden av hatten. Hatten er traktformet og med bølget rand på godt voksne eksemplarer.</p>
    <p class="infoParagraph">Den eneste soppen som kan forveksles med ekte kantarell er falsk kantarell. Ingen giftige sopper ligner.</p>

    <h3>Bilder</h3>
    <div class="infoImg">
        <img src="./Images/Kantarell.jpg">
        <img src="./Images/Kantarell2.jpg">
    </div>
    `;
}

function pennyBunInfoView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    ${returnButtonMushroom()}
    <h2>Steinsopp</h2>
    <div>Sesong: fra juli til oktober</div>
    <h3>Om Steinsopp</h3>
    <p class="infoParagraph">Steinsopp vokser i løv- og barskog, og har sesong i Norge fra så tidlig som juni, 
    men er vanligst fra juli til september. Den danner sopprot med ulike skogstær. Det vitenskapelige navnet for 
    steinsopp er <em>Boletus Edulis</em>.</p>
    <h3>Beskrivelse</h3>
    <p class="infoParagraph">Steinsoppen har brun hatt og en tykk og kraftig fot. Under hatten har den et rørlag 
    som er hvitt hos ungsopp og grønngult hos eldre. </p>
    <p class="infoParagraph">Foten er altid et fint, hvit maskenett øverst, noe som er et sikkert kjennetegn for arten.</p>

    <h3>Bilder</h3>
    <div class="infoImg">
        <img src="./Images/Steinsopp.jpg">
        <img src="./Images/Steinsopp2.jpg">
    </div>
    `;
}

function AgaricusInfoView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    ${returnButtonMushroom()}
    <h2>Sjampinjong</h2>
    <div>Sesong: mellom august og september</div>
    <h3>Om Sjampinjong</h3>
    <p class="infoParagraph">Alle Sjampinjonger vokser på jord, oftenæringsrik og eller gjødslet jord. F.eks. beitemark, 
    parker, veikanter, rik skog og til og med inne i byer. De lever alle saprotroft, som vil si at de tar næring fra 
    dødt organisk materiale. Det vitenskapelige navnet for sjampinjong er <em>Agaricus</em>.</p>
    <h3>Beskrivelse</h3>
    <p class="infoParagraph">Sjampinjonger har ring på stilken i likhet med blant annet giftige fluesopper. Som sikkert 
    skillemerke mellom sjampinjonger og fluesopper gjelder at sjampinjongene tidlig får rosa skiver som til slutt blir 
    svartbrune av sporene, mens fluesoppene alltid, også som gamle, har hvite skiver.</p>
    <p class="infoParagraph">De enkelte arter av sjampinjong er til dels vannskelig å skille fra hverandre.</p>

    <h3>Bilder</h3>
    <div class="infoImg">
        <img src="./Images/Sjampinjong.jpg">
        <img src="./Images/Sjampinjong2.jpg">
    </div>
    `;
}