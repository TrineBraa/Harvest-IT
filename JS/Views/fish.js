//placeholder
function fishView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    
    <h2>Fisk</h2>
    ${returnButtonMain()}
    <div id="sliderContainer">
    <span>Avstand fra din lokasjon</span>
    <br/>
    <br/>
    <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
    </div>
    <br/>
    <div id="mapContainer">
        KartPlacement
    </div>
     <br/>
     <br/>
    
     <h3>Registrerte fisk:</h3>
    <ul id= "listedFinds">
       <li>Laks <img src="./Images/iicon.png" class="iicon" onclick="salmonInfoView()"></li> 
       <li>Makrell <img src="./Images/iicon.png" class="iicon" onclick="mackerelInfoView()"></li> 
       <li>Torsk <img src="./Images/iicon.png" class="iicon" onclick="codInfoView()"></li> 
    </ul>
    `;
}

function salmonInfoView () {
    document.getElementById('app').innerHTML = /*HTML*/ `
    ${returnButtonFish()}
    <h2>Laks</h2>
    <div>Sesong: fra april/mai til oktober</div>
    <h3>Om laks</h3>
    <p>Laks er en fiskeart i laksefamilien som vanligvis lever mye av livet i havet, men som vandrer opp i elver for å gyte.
    Laksen er ettertraktet både som matfisk og sportsfisk, og er gjennom oppdrettsnæringen blitt en særdeles viktig eksportvare. Det vitenskapelige navnet på laks er <italic>salmo salar</italic>.</p>
    <h3>Beskrivelse</h3>
    <p>Makrellen er en svært aktiv og rask svømmer, som lever mesteparten av livet i de frie vannmasser. Stort
    sett lever den av dyreplankton som rødåte og krill og diverse fiskeyngel. Den beveger seg i store eller mindre stimer. Makrellen er selv attraktiv mat for større fisker som makrellstørje, samt ulike haier og hvaler (spekkhoggere).</p>
    <p>Det finnes tre ulike bestander av makrell i norske farvann. En bestand gyter sentralt i Nordsjøen og
    Skagerrak, en bestand gyter vest for Irland og De britiske øyer, og en siste bestand gyter utenfor Spania
    og Portugal. Gytetidene kan være svært forskjellige, og gytingen kan strekke seg over flere måneder.</p>

    <h3>Bilder</h3>
    <img src="./Images/mackerel.jpeg">
    <img src="./Images/mackerel2.jpeg">
    `;

}

function mackerelInfoView (){ 
    document.getElementById('app').innerHTML = /*HTML*/ `
    ${returnButtonFish()}
    <h2>Makrell</h2>
    <div>Sesong: fra april/mai til oktober</div>
    <h3>Om makrell</h3>
    <p>Makrell er en fiskeart i makrellfamilien. Den blir sjelden over 50 cm, og har en vekt på opptil 
    3,5 kg. Makrellen er lett kjennelig på sin spoleformede kropp og karakteristiske fargetegninger i grønt
    og blått. Mellom rygg- og gattfinne og halefinne har den små, frittstående finner. Det vitenskapelige
    navnet på makrell er <italic>scomber scombrus</italic>.</p>
    <h3>Beskrivelse</h3>
    <p>Makrellen er en svært aktiv og rask svømmer, som lever mesteparten av livet i de frie vannmasser. Stort
    sett lever den av dyreplankton som rødåte og krill og diverse fiskeyngel. Den beveger seg i store eller mindre stimer. Makrellen er selv attraktiv mat for større fisker som makrellstørje, samt ulike haier og hvaler (spekkhoggere).</p>
    <p>Det finnes tre ulike bestander av makrell i norske farvann. En bestand gyter sentralt i Nordsjøen og
    Skagerrak, en bestand gyter vest for Irland og De britiske øyer, og en siste bestand gyter utenfor Spania
    og Portugal. Gytetidene kan være svært forskjellige, og gytingen kan strekke seg over flere måneder.</p>

    <h3>Bilder</h3>
    <img src="./Images/mackerel.jpeg">
    <img src="./Images/mackerel2.jpeg">
    `;
}

function codInfoView (){ 
    document.getElementById('app').innerHTML = /*HTML*/ `
    ${returnButtonFish()}
    <h2>Torsk</h2>
    <div>Sesong: fra januar til april og september til desember</div>
    <h3>Om torsk</h3>
    <p>Torsk er den viktigste av alle torskefiskene, og har gjennom hundrevis av år bidratt til Norges økonomi og bosetning. 
    Torsken har tre ryggfinner, to gattfinner, skjeggtråd og et svakt overbitt. Fargen på rygg og kroppssider veksler etter 
    tilholdssted og næring mellom grå, olivengrønn, brun eller rødbrun med mørkere marmorering. Buken er lysere, nesten hvit.
    Den kan bli opptil 180 cm lang og 55 kg tung. Det vitenskapelige navnet på torsk er <italic>gadus morhua</italic>.</p>
    <h3>Beskrivelse</h3>
    <p>Torsken finnes bare i det nordlige Atlanterhav mellom Vizcaya i sør og Novaja Zemlja og Spitsbergen i nord, ved
    Island, Sør-Grønland, Newfoundland og USAs østkyst til Cape Hatteras. Innenfor dette utbredelsesområdet holder den til i
    kystnære farvann i fjordene og utover bankene, hovedsakelig i vannmasser med temperaturer mellom 0 og ca. 10 °C. 
    Imidlertid ser mange torskebestander ut til å trives ved betydelige høyere temperatur.</p>
    <p>Det finnes to hovedgrupper av torsk: havtorsk eller skrei, og kysttorsk. Skreien består av større bestander som 
    vandrer mellom gyteområder ved kysten og oppvekstområder som kan ligge langt unna. Den norsk-arktiske torsken, som er 
    den egentlige skreien, er den viktigste av disse.</p>

    <h3>Bilder</h3>
    <img src="./Images/cod.jpeg">
    <img src="./Images/cod2.jpg">
    `;
}