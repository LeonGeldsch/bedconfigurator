/*
 * BUGS: -not all mattresses available in 24 and 18cm height
 *
 * 
 * Questions: - What side is recommended when there is no pain?
 *            - What mattress is recommended when there is only a 24cm version but you need the 18cm one? e.g. bedSize 80x200cm 
 *            - How are the pillow options gonna be displayed if there are multiple ones?
 *            - Was soll die Festigkeit bei dem Topper?
 * 
 * 
 *  Was noch fehlt: - Validation auf dem Inputs
 *                  - add to cart
 *                  - amount select
 * 
 */

const backgroundDiv = document.querySelector('.bedconfig-background');

const closeButton = document.querySelector('.bedconfig-close-button');

const allNextButtons = document.querySelectorAll('.bedconfig-next-button');

const allBackButtons = document.querySelectorAll('.bedconfig-back-button');

const allSites = document.querySelectorAll('.bedconfig-container');

const painTypeInput = document.querySelectorAll('#bedconfig-pain-type-input');

const sleepingPositionInput = document.querySelectorAll('#bedconfig-sleeping-position-input');

const painAreaInput = document.querySelector('#bedconfig-pain-area-input');

const painAreaInputError = document.querySelector('#bedconfig-pain-area-input-error');

const bodyWeightInput = document.querySelector('#bedconfig-weight-input');

const bodyWeightInputError = document.querySelector('#bedconfig-weight-input-error');

const bodyHeightInput = document.querySelector('#bedconfig-height-input');

const bodyHeightInputError = document.querySelector('#bedconfig-height-input-error');

const bedSizeInput = document.querySelector('#bedconfig-bed-size-input');

const bedSizeInputError = document.querySelector('#bedconfig-bed-size-input-error');

const materialPreferenceInput = document.querySelectorAll('#bedconfig-material-preference-input');

const submitButton = allNextButtons[3];

const buyButton = document.querySelector('#bedconfig-buy-button');

const allCartItems = document.querySelectorAll('.bedconfig-cart-item');

const recommendedMattressItem = allCartItems[0];

const recommendedMattressNameSpan = document.querySelector('#mattress-name-span');
const recommendedMattressSizeSpan = document.querySelector('#mattress-size-span');
const recommendedMattressSideSpan = document.querySelector('#mattress-side-span');
const recommendedMattressPriceSpan = document.querySelector('#mattress-price-span');

const recommendedTopperNameSpan = document.querySelector('#topper-name-span');
const recommendedTopperSizeSpan = document.querySelector('#topper-size-span');
const recommendedTopperPriceSpan = document.querySelector('#topper-price-span');

const recommendedPillowNameSpan = document.querySelector('#pillow-name-span');
const recommendedPillowSizeSpan = document.querySelector('#pillow-size-span');
const recommendedPillowMaterialSpan = document.querySelector('#pillow-material-span');
const recommendedPillowPriceSpan = document.querySelector('#pillow-price-span');

const recommendedBlanketNameSpan = document.querySelector('#blanket-name-span');
const recommendedBlanketSizeSpan = document.querySelector('#blanket-size-span');
const recommendedBlanketMaterialSpan = document.querySelector('#blanket-material-span');
const recommendedBlanketPriceSpan = document.querySelector('#blanket-price-span');


const recommendedTopperItem = allCartItems[1];

const recommendedPillowItem = allCartItems[2];

const recommendedBlanketItem = allCartItems[3];

var currentSite = 0;

var buyButtonEventListener = false;


class Pillow {
    constructor(name, sizeId, price, width, length, material) {
        this.name = name;
        this.sizeId = sizeId;
        this.id = 5;
        this.price = price;
        this.width = width;
        this.length = length;
        this.material = material;
    }
}

class Blanket {
    constructor(name, sizeId, price, width, length, material) {
        this.name = name;
        this.sizeId = sizeId;
        this.id = 7;
        this.price = price;
        this.width = width;
        this.length = length;
        this.material = material;
    }
}

class Mattress {
    constructor(name, sizeId, price, width, length, height) {
        this.name = name;
        this.sizeId = sizeId;
        this.id = 22;
        this.price = price;
        this.width = width;
        this.length = length;
        this.height = height;
    }
}

class Topper {
    constructor(name, sizeId, price, width, length) {
        this.name = name;
        this.sizeId = sizeId;
        this.id = 21;
        this.price = price;
        this.width = width;
        this.length = length;
    }
}

// all pillow options
var pillows = [
    new Pillow("Normal Weich", 22, "39", 80, 40, "Federfüllung"),
    new Pillow("Extra Prall", 23, "39", 80, 40, "Federfüllung"),
    new Pillow("Normal Weich", 24, "49", 80, 80, "Federfüllung"),
    new Pillow("Extra Prall", 25, "49,90", 80, 80, "Federfüllung"),
    new Pillow("Normal Weich", 119, "39", 80, 40, "Synthetikfüllung"),
    new Pillow("Extra Prall", 120, "39,90", 80, 40, "Synthetikfüllung"),
    new Pillow("Normal Weich", 121, "49", 80, 80, "Synthetikfüllung"),
    new Pillow("Extra Prall", 122, "49,90", 80, 80, "Synthetikfüllung")
];

// all blanket options
var blankets = [
    new Blanket("Ganzjahr", 123, "129", 135, 200, "Federfüllung"),
    new Blanket("Ganzjahr", 124, "179", 155, 220, "Federfüllung"),
    new Blanket("Ganzjahr", 216, "169", 155, 220, "Synthetikfüllung"),
    new Blanket("Ganzjahr", 217, "129", 135, 200, "Synthetikfüllung"),
];

// all mattress options
var mattresses = [
    new Mattress("DIE MATRATZE 24cm", 23, "298", 70, 200, 24),
    new Mattress("DIE MATRATZE 24cm", 24, "298", 80, 200, 24),
    new Mattress("DIE MATRATZE 24cm", 25, "298", 90, 200, 24),
    new Mattress("DIE MATRATZE 24cm", 26, "339", 100, 200, 24),
    new Mattress("DIE MATRATZE 24cm", 27, "459", 140, 200, 24),
    new Mattress("DIE MATRATZE 24cm", 28, "529", 160, 200, 24),
    new Mattress("DIE MATRATZE 24cm", 29, "599", 180, 200, 24),
    new Mattress("DIE MATRATZE 24cm", 30, "659", 200, 200, 24),
    new Mattress("DIE MATRATZE 18cm", 31, "179", 70, 200, 18),
    new Mattress("DIE MATRATZE 18cm", 32, "179", 80, 200, 18),
    new Mattress("DIE MATRATZE 18cm", 33, "198", 90, 200, 18),
    new Mattress("DIE MATRATZE 18cm", 34, "219", 100, 200, 18),
    new Mattress("DIE MATRATZE 18cm", 56, "329", 120, 200, 18),
    new Mattress("DIE MATRATZE 18cm", 35, "339", 140, 200, 18),
    new Mattress("DIE MATRATZE 18cm", 36, "429", 160, 200, 18),
    new Mattress("DIE MATRATZE 18cm", 37, "449", 180, 200, 18),
    new Mattress("DIE MATRATZE 18cm", 38, "499", 200, 200, 18),
    new Mattress("DIE MATRATZE 18cm Sondergröße", 39, "198", 80, 190, 18),
    new Mattress("DIE MATRATZE 18cm Sondergröße", 40, "198", 90, 190, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge", 41, "299", 90, 210, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge", 42, "329", 100, 210, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge", 43, "298", 100, 220, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge", 44, "549", 200, 210, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge", 45, "489", 180, 210, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge", 46, "599", 200, 220, 18),
];

// all topper options
var toppers = [
    new Topper("Kein Topper"),
    new Topper("Der Topper", 222, "129", 70, 200),
    new Topper("Der Topper", 223, "129", 80, 200),
    new Topper("Der Topper", 224, "129", 90, 200),
    new Topper("Der Topper", 225, "129", 100, 200),
    new Topper("Der Topper", 226, "249", 120, 200),
    new Topper("Der Topper", 227, "249", 140, 200),
    new Topper("Der Topper", 228, "249", 160, 200),
    new Topper("Der Topper", 229, "249", 180, 200),
    new Topper("Der Topper", 230, "249", 200, 200),
];


/*
 * ------------------------------- FUNCTIONS ---------------------------------
 */


function showNextSite () {
    if (currentSite < allSites.length - 1) currentSite++;
    allSites.forEach(site => {
        site.style.display = "none";
    });
    allSites[currentSite].style.display = "block";
    if (currentSite != 0) {
        backgroundDiv.classList.add("bedconfig-background-blur");
    } else {
        backgroundDiv.classList.remove("bedconfig-background-blur");
    }
}


function showPreviousSite () {
    if (currentSite > 0) currentSite--;
    allSites.forEach(site => {
        site.style.display = "none";
    });
    allSites[currentSite].style.display = "block";
    if (currentSite != 0) {
        backgroundDiv.classList.add("bedconfig-background-blur");
    } else {
        backgroundDiv.classList.remove("bedconfig-background-blur");
    }
}


function calculatePillow (schmerzArt, schmerzBereich, schlafposition, materialPreference) {
    if (schmerzArt == "druckschmerz") {
        if (schmerzBereich == "nacken-schulter") {
            if (schlafposition == "rueckenschlaefer" || schlafposition == "bauchschlaefer") {
                if (materialPreference === "federn") return [pillows.find(element => element.name == "Normal Weich" && element.length == 80 && element.material == "Federfüllung")];
                else return [pillows.find(element => element.name == "Normal Weich" && element.length == 80 && element.material == "Synthetikfüllung")];
            }
        }
    }
    if (schmerzArt == "verspannung") {
        if (schmerzBereich == "nacken-schulter") {
            if (schlafposition == "seitenschlaefer") {
                if (materialPreference === "federn") return [pillows.find(element => element.name == "Extra Prall" && element.length == 80 && element.material == "Federfüllung"), pillows.find(element => element.name == "Extra Prall" && element.length == 40 && element.material == "Federfüllung")];
                else return [pillows.find(element => element.name == "Extra Prall" && element.length == 80 && element.material == "Synthetikfüllung"), pillows.find(element => element.name == "Extra Prall" && element.length == 40 && element.material == "Synthetikfüllung")];
            }
            if (schlafposition == "bauchschlaefer") {
                if (materialPreference === "federn") return [pillows.find(element => element.name == "Normal Weich" && element.length == 80 && element.material == "Federfüllung")];
                else return [pillows.find(element => element.name == "Normal Weich" && element.length == 80 && element.material == "Synthetikfüllung")];
            }
        }
    }
    if (materialPreference === "federn") return [pillows.find(element => element.name == "Extra Prall" && element.length == 80 && element.material == "Federfüllung"), pillows.find(element => element.name == "Extra Prall" && element.length == 40 && element.material == "Federfüllung")];
    else return [pillows.find(element => element.name == "Extra Prall" && element.length == 80 && element.material == "Synthetikfüllung"), pillows.find(element => element.name == "Extra Prall" && element.length == 40 && element.material == "Synthetikfüllung")];
}


function calculateTopper (schmerzArt, bedSize) {
    if (schmerzArt == "druckschmerz") {
        if (toppers.find(element => element.width + "x" + element.length + "cm" === bedSize)) return toppers.find(element => element.width + "x" + element.length + "cm" === bedSize);
    }
    if (schmerzArt == "verspannung") {
        return toppers[0];
    }
    return toppers[0];
}


function calculateMatress (schmerzArt, bedSize, bmi) {
    if (schmerzArt == "druckschmerz") {
        recommendedMattressSide = "Weichere Seite (H3)";
    }
    if (schmerzArt == "verspannung") {
        recommendedMattressSide = "Festere Seite (H4)";
    }
    if (schmerzArt == "kein") {
        recommendedMattressSide = "Festere Seite (H4)";
    }

    for (let i = 0; i < mattresses.length; i++) {
        if (mattresses[i].width + "x" + mattresses[i].length + "cm" == bedSize) {
            if (bmi <= 24 && mattresses[i].height == 18 || bmi > 24 && mattresses[i].height == 24) {
                return mattresses[i];
            }
        }
    }
    
    for (let i = 0; i < mattresses.length; i++) {
        if (mattresses[i].width + "x" + mattresses[i].length + "cm" == bedSize) {
            return mattresses[i];
        }
    }
}


function calculateBlanket (bodyHeight, materialPreference) {
    if (bodyHeight >= 185) {
        if (materialPreference === "federn") return blankets.find(element => element.width == 155 && element.material == "Federfüllung");
        else return blankets.find(element => element.width == 155 && element.material == "Synthetikfüllung");
    } else {
        if (materialPreference === "federn") return blankets.find(element => element.width == 135 && element.material == "Federfüllung");
        else return blankets.find(element => element.width == 135 && element.material == "Synthetikfüllung");
    }
}


function createCart (calculatedMattress, calculatedTopper, calculatedPillowOptions, calculatedBlanket) {
    if (calculatedTopper.name === "Kein Topper") {
        recommendedTopperItem.style.display = "none";
    } else {
        recommendedTopperItem.style.display = "flex";
        recommendedTopperSizeSpan.innerHTML = calculatedTopper.width + "x" + calculatedTopper.length + "cm";
        recommendedTopperPriceSpan.innerHTML = calculatedTopper.price + "€";
    }

    recommendedMattressNameSpan.innerHTML = calculatedMattress.height + "cm";
    recommendedMattressSizeSpan.innerHTML = calculatedMattress.width + "x" + calculatedMattress.length + "cm";
    recommendedMattressSideSpan.innerHTML = recommendedMattressSide;
    recommendedMattressPriceSpan.innerHTML = calculatedMattress.price + "€";
    
    recommendedBlanketNameSpan.innerHTML = calculatedBlanket.name;
    recommendedBlanketSizeSpan.innerHTML = calculatedBlanket.width + "x" + calculatedBlanket.length + "cm";
    recommendedBlanketMaterialSpan.innerHTML = calculatedBlanket.material;
    recommendedBlanketPriceSpan.innerHTML = calculatedBlanket.price + "€";

    recommendedPillowNameSpan.innerHTML = calculatedPillowOptions[0].name;
    recommendedPillowSizeSpan.innerHTML = calculatedPillowOptions[0].width + "x" + calculatedPillowOptions[0].length + "cm";
    recommendedPillowMaterialSpan.innerHTML = calculatedPillowOptions[0].material;
    recommendedPillowPriceSpan.innerHTML = calculatedPillowOptions[0].price + "€";
}


function buyItems (calculatedMattress, calculatedTopper, calculatedPillowOptions, calculatedBlanket) {
    var calculatedPillow = calculatedPillowOptions[0];

    if (calculatedTopper.name === "Kein Topper") {
        let link = 'https://www.weltbett.de/dpa/add/tocart/id/' + calculatedMattress.id + "_1_" + calculatedMattress.sizeId + "-" 
        + calculatedPillow.id + "_1_" + calculatedPillow.sizeId + "-" 
        + calculatedBlanket.id + "_1_" + calculatedBlanket.sizeId;

        //console.log(link);

        window.location.href = link;
    } else {
        let link = 'https://www.weltbett.de/dpa/add/tocart/id/' + calculatedMattress.id + "_1_" + calculatedMattress.sizeId + "-" 
        + calculatedPillow.id + "_1_" + calculatedPillow.sizeId + "-" 
        + calculatedBlanket.id + "_1_" + calculatedBlanket.sizeId + "-" 
        + calculatedTopper.id + "_1_" + calculatedTopper.sizeId;
    
        //console.log(link);
    
        window.location.href = link;
    }
}


function getSelectedRadioButton (radioButtons) {
    let radioButtonsArray = Array.from(radioButtons);
    for (let i = 0; i < radioButtonsArray.length; i++) {
        if (radioButtonsArray[i].checked === true) {
            return radioButtonsArray[i];
        }
    }
}


function handleSubmit () {
    let schmerzArt = getSelectedRadioButton(painTypeInput).value;
    let schmerzBereich = painAreaInput.value;
    let schlafposition = getSelectedRadioButton(sleepingPositionInput).value;
    let bedSize = bedSizeInput.value;
    let bodyWeight = parseFloat(bodyWeightInput.value.replace(",", "."));
    let bodyHeight = parseFloat(bodyHeightInput.value.replace(",", "."));
    let bmi = calculateBMI(bodyWeight, bodyHeight);
    let materialPreference = getSelectedRadioButton(materialPreferenceInput).value;
    let calculatedMattress = calculateMatress(schmerzArt, bedSize, bmi);
    let calculatedTopper = calculateTopper(schmerzArt, bedSize);
    let calculatedPillowOptions = calculatePillow(schmerzArt, schmerzBereich, schlafposition, materialPreference);
    let calculatedBlanket = calculateBlanket(bodyHeight, materialPreference);
    
    createCart(calculatedMattress, calculatedTopper, calculatedPillowOptions, calculatedBlanket);
    if (!buyButtonEventListener) {
        buyButton.addEventListener('click', buyItems.bind(event, calculatedMattress, calculatedTopper, calculatedPillowOptions, calculatedBlanket));
        buyButtonEventListener = true;
    }
}


function calculateBMI (bodyWeight, bodyHeight) {
    let calculatedBMI = bodyWeight / (Math.pow((bodyHeight/100), 2));
    return calculatedBMI;
}


function animateErrorIn(error) {
    error.style.visibility = "none";
    error.style.position = "absolute";
    error.style.transition = "none";
    error.style.height = "auto";
    let errorHeight = error.offsetHeight;
    error.style.height = "0";
    error.style.position = "relative";
    error.style.visibility = "visible";
    error.style.overflow = "shown";
    error.style.transition = "height 0.3s ease-in-out";
    setTimeout( () => {
        error.style.height = errorHeight + "px";
    }, 10);
}


function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


function validateBodyHeightInput () {
    if (isNumber(bodyHeightInput.value) || (isNumber(bodyHeightInput.value.substring(-1, bodyHeightInput.value.length - 2)) && bodyHeightInput.value.slice(-2) === "cm")) {
        bodyHeightInput.classList.remove("is-invalid");
        bodyHeightInput.classList.add("is-valid");
        bodyHeightInputError.style.height = "0";
        if (bodyHeightInput.value.slice(-2) != "cm") {
            bodyHeightInput.value = bodyHeightInput.value + "cm";
        }
        return true;
    } else {
        bodyHeightInput.classList.remove("is-valid");
        bodyHeightInput.classList.add("is-invalid");
        if (bodyHeightInputError.style.height === "0px" || bodyHeightInputError.style.height == 0) {
            animateErrorIn(bodyHeightInputError);
        }
        return false;
    }
}
function validateBodyWeightInput () {
    if (isNumber(bodyWeightInput.value.replace(",", ".")) || (isNumber(bodyWeightInput.value.replace(",", ".").substring(-1, bodyWeightInput.value.length - 2)) && bodyWeightInput.value.slice(-2) === "kg")) {
        bodyWeightInput.classList.remove("is-invalid");
        bodyWeightInput.classList.add("is-valid");
        bodyWeightInputError.style.height = "0";
        if (bodyWeightInput.value.slice(-2) != "kg") {
            bodyWeightInput.value = bodyWeightInput.value + "kg";
        }
        return true;
    } else {
        bodyWeightInput.classList.remove("is-valid");
        bodyWeightInput.classList.add("is-invalid");
        if (bodyWeightInputError.style.height === "0px" || bodyWeightInputError.style.height == 0) {
            animateErrorIn(bodyWeightInputError);
        }
        return false;
    }
}

function validateBodyIndexInput () {
    validateBodyHeightInput();
    validateBodyWeightInput();
    if (validateBodyHeightInput() && validateBodyWeightInput()) {
        showNextSite();
    }
}

function validateBedSizeInput () {
    if (bedSizeInput.value != "") {
        bedSizeInputError.style.height = "0";
        bedSizeInput.classList.remove("is-invalid");
        bedSizeInput.classList.add("is-valid");
        return true;
    } else {
        if (bedSizeInputError.style.height === "0px" || bedSizeInputError.style.height == 0) {
            animateErrorIn(bedSizeInputError);
        }
        bedSizeInput.classList.remove("is-valid");
        bedSizeInput.classList.add("is-invalid");
        return false;
    }
}

function validatePainAreaInput () {
    if (painAreaInput.value != "" || getSelectedRadioButton(painTypeInput).value == "kein") {
        painAreaInputError.style.height = "0";
        painAreaInput.classList.remove("is-invalid");
        painAreaInput.classList.add("is-valid");
        return true;
    } else {
        if (painAreaInputError.style.height === "0px" || painAreaInputError.style.height == 0) {
            animateErrorIn(painAreaInputError);
        }
        painAreaInput.classList.remove("is-valid");
        painAreaInput.classList.add("is-invalid");
        return false;
    }
}


bodyHeightInput.addEventListener('focusout', validateBodyHeightInput);
bodyWeightInput.addEventListener('focusout', validateBodyWeightInput);
bedSizeInput.addEventListener('focusout', validateBedSizeInput);
painAreaInput.addEventListener('focusout', validatePainAreaInput);

allNextButtons[1].addEventListener('click', validateBodyIndexInput);
allNextButtons[2].addEventListener('click', () => {
    if (validateBedSizeInput()) {
        showNextSite();
    }
});
allNextButtons[3].addEventListener('click', () => {
    if (validatePainAreaInput()) {
        showNextSite();
    }
});

/*
 * -------------------------- EVENT LISTENERS --------------------------------
 */


for (let i = 0; i < allNextButtons.length; i++) {
    if (i != 1 && i != 2 && i != 3) {
        allNextButtons[i].addEventListener('click', showNextSite);
    }
}

for (let i = 0; i < allBackButtons.length; i++) {
    allBackButtons[i].addEventListener('click', showPreviousSite);
}




// disable pain area input if pain type is none
painTypeInput.forEach(option => {
    option.addEventListener('click', function () {
        if (getSelectedRadioButton(painTypeInput).value === "kein") {
            painAreaInput.disabled = true;
            painAreaInput.classList.add('bedconfig-select-disabled');
            painAreaInput.previousElementSibling.classList.add('bedconfig-label-disabled');
            painAreaInputError.style.height = "0";
            painAreaInput.classList.remove("is-invalid");
            painAreaInput.classList.add("is-valid");    
        } else {
            painAreaInput.disabled = false;
            painAreaInput.classList.remove('bedconfig-select-disabled');
            painAreaInput.previousElementSibling.classList.remove('bedconfig-label-disabled');
        }
    });
});
// disable pain area input if pain type is none on refresh (if no cache deleted)
if (getSelectedRadioButton(painTypeInput).value === "kein") {
    painAreaInput.disabled = true;
    painAreaInput.classList.add('bedconfig-select-disabled');
    painAreaInput.previousElementSibling.classList.add('bedconfig-label-disabled');
} else {
    painAreaInput.disabled = false;
    painAreaInput.classList.remove('bedconfig-select-disabled');
    painAreaInput.previousElementSibling.classList.remove('bedconfig-label-disabled');
}


submitButton.addEventListener('click', handleSubmit);

closeButton.addEventListener('click', () => {
    window.history.back();
});