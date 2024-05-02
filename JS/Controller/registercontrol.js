// Register findings CONTROLLER
 const sightings = model.data.sightings;
 
function setSightingName(input){
    model.inputs.registerSighting.nameInput = input
    whatYouFound = model.inputs.registerSighting.nameInput;
}

function setSightingCategory(input){
    model.inputs.registerSighting.category = input
    selectMarker = input
    selectMark()
}

function setSightingLocation(input){
    model.inputs.registerSighting.locationInput = input
    whereFound = input
}

function setSightingDate(input){
    model.inputs.registerSighting.lastHarvestInput = input
    whenFound = input
}

function setSightingImage(input){
    //model.inputs.registerSighting.imageInput = input
    imgOfFind = input
}
