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
 *                  -
 * 
 */


const allNextButtons = document.querySelectorAll('.bedconfig-next-button');

const allBackButtons = document.querySelectorAll('.bedconfig-back-button');

const allSites = document.querySelectorAll('.bedconfig-container');

const painTypeInput = document.querySelectorAll('#bedconfig-pain-type-input');

const sleepingPositionInput = document.querySelectorAll('#bedconfig-sleeping-position-input');

const painAreaInput = document.querySelector('#bedconfig-pain-area-input');

const bodyWeightInput = document.querySelector('#bedconfig-weight-input');

const bodyHeightInput = document.querySelector('#bedconfig-height-input');

const bedSizeInput = document.querySelector('#bedconfig-bed-size-input');

const materialPreferenceInput = document.querySelectorAll('#bedconfig-material-preference-input');

const submitButton = allNextButtons[3];

const buyButton = document.querySelector('#bedconfig-buy-button');

const allCartItems = document.querySelectorAll('.bedconfig-cart-item');

const recommendedMattressItem = allCartItems[0];

const recommendedTopperItem = allCartItems[1];

const recommendedPillowItem = allCartItems[2];

const recommendedBlanketItem = allCartItems[3];

var currentSite = 0;


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
    new Pillow("Das Kissen normal-weich", 22, 0.90, 80, 40, "Federfüllung"),
    new Pillow("Das Kissen extra pral", 23, 0.90, 80, 40, "Federfüllung"),
    new Pillow("Das Kissen normal-weich", 24, 10.90, 80, 80, "Federfüllung"),
    new Pillow("Das Kissen extra pral", 25, 10.90, 80, 80, "Federfüllung"),
    new Pillow("Das Kissen normal-weich", 119, 0.00, 80, 40, "Synthetikfüllung"),
    new Pillow("Das Kissen extra pral", 120, 0.00, 80, 40, "Synthetikfüllung"),
    new Pillow("Das Kissen normal-weich", 121, 10.00, 80, 80, "Synthetikfüllung"),
    new Pillow("Das Kissen extra pral", 122, 10.00, 80, 80, "Synthetikfüllung")
];

// all blanket options
var blankets = [
    new Blanket("Die Decke / Ganzjahr", 123, 40.00, 135, 200, "Federfüllung"),
    new Blanket("Die Decke / Ganzjahr", 124, 80.00, 155, 220, "Federfüllung"),
    new Blanket("Die Decke / Ganzjahr", 216, 80.00, 155, 220, "Synthetikfüllung"),
    new Blanket("Die Decke / Ganzjahr", 217, 80.00, 135, 200, "Synthetikfüllung"),
];

// all mattress options
var mattresses = [
    new Mattress("DIE MATRATZE 24cm", 23, 279.00, 70, 200, 24),
    new Mattress("DIE MATRATZE 24cm", 24, 279.00, 80, 200, 24),
    new Mattress("DIE MATRATZE 24cm", 25, 279.00, 90, 200, 24),
    new Mattress("DIE MATRATZE 24cm", 26, 299.00, 100, 200, 24),
    new Mattress("DIE MATRATZE 24cm", 27, 409.00, 140, 200, 24),
    new Mattress("DIE MATRATZE 24cm", 28, 509.00, 160, 200, 24),
    new Mattress("DIE MATRATZE 24cm", 29, 529.00, 180, 200, 24),
    new Mattress("DIE MATRATZE 24cm", 30, 579.00, 200, 200, 24),
    new Mattress("DIE MATRATZE 18cm", 31, 179.00, 70, 200, 18),
    new Mattress("DIE MATRATZE 18cm", 33, 179.00, 90, 200, 18),
    new Mattress("DIE MATRATZE 18cm", 34, 199.00, 100, 200, 18),
    new Mattress("DIE MATRATZE 18cm", 35, 309.00, 140, 200, 18),
    new Mattress("DIE MATRATZE 18cm", 36, 409.00, 160, 200, 18),
    new Mattress("DIE MATRATZE 18cm", 37, 429.00, 180, 200, 18),
    new Mattress("DIE MATRATZE 18cm", 38, 479.00, 200, 200, 18),
    new Mattress("DIE MATRATZE 18cm Sondergröße", 39, 279.00, 80, 190, 18),
    new Mattress("DIE MATRATZE 18cm Sondergröße", 40, 279.00, 90, 190, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge", 41, 279.00, 90, 210, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge", 42, 279.00, 100, 210, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge", 43, 279.00, 100, 220, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge", 44, 579.00, 200, 210, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge", 45, 529.00, 180, 210, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge", 46, 579.00, 200, 220, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge", 56, 309.00, 120, 200, 18),
];

// all topper options
var toppers = [
    new Topper("Kein Topper"),
    new Topper("Der Topper", 222, 0.00, 90, 190),
    new Topper("Der Topper", 223, 0.00, 80, 200),
    new Topper("Der Topper", 224, 10.00, 90, 200),
    new Topper("Der Topper", 225, 20.00, 100, 200),
    new Topper("Der Topper", 226, 30.00, 120, 200),
    new Topper("Der Topper", 227, 50.00, 140, 200),
    new Topper("Der Topper", 228, 70.00, 160, 200),
    new Topper("Der Topper", 229, 100.00, 180, 200),
    new Topper("Der Topper", 230, 120.00, 200, 200),
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
}


function showPreviousSite () {
    if (currentSite > 0) currentSite--;
    allSites.forEach(site => {
        site.style.display = "none";
    });
    allSites[currentSite].style.display = "block";
}


function calculatePillow (schmerzArt, schmerzBereich, schlafposition, materialPreference) {
    if (schmerzArt == "druckschmerz") {
        if (schmerzBereich == "nacken-schulter") {
            if (schlafposition == "rueckenschlaefer" || schlafposition == "bauchschlaefer") {
                if (materialPreference === "federn") return [pillows.find(element => element.name == "Das Kissen normal-weich" && element.length == 80 && element.material == "Federfüllung")];
                else return [pillows.find(element => element.name == "Das Kissen normal-weich" && element.length == 80 && element.material == "Synthetikfüllung")];
            }
        }
    }
    if (schmerzArt == "verspannung") {
        if (schmerzBereich == "nacken-schulter") {
            if (schlafposition == "seitenschlaefer") {
                if (materialPreference === "federn") return [pillows.find(element => element.name == "Das Kissen extra pral" && element.length == 80 && element.material == "Federfüllung"), pillows.find(element => element.name == "Das Kissen extra pral" && element.length == 40 && element.material == "Federfüllung")];
                else return [pillows.find(element => element.name == "Das Kissen extra pral" && element.length == 80 && element.material == "Synthetikfüllung"), pillows.find(element => element.name == "Das Kissen extra pral" && element.length == 40 && element.material == "Synthetikfüllung")];
            }
            if (schlafposition == "bauchschlaefer") {
                if (materialPreference === "federn") return [pillows.find(element => element.name == "Das Kissen normal-weich" && element.length == 80 && element.material == "Federfüllung")];
                else return [pillows.find(element => element.name == "Das Kissen normal-weich" && element.length == 80 && element.material == "Synthetikfüllung")];
            }
        }
    }
    if (materialPreference === "federn") return [pillows.find(element => element.name == "Das Kissen extra pral" && element.length == 80 && element.material == "Federfüllung"), pillows.find(element => element.name == "Das Kissen extra pral" && element.length == 40 && element.material == "Federfüllung")];
    else return [pillows.find(element => element.name == "Das Kissen extra pral" && element.length == 80 && element.material == "Synthetikfüllung"), pillows.find(element => element.name == "Das Kissen extra pral" && element.length == 40 && element.material == "Synthetikfüllung")];
}


function calculateTopper (schmerzArt, bedSize) {
    if (schmerzArt == "druckschmerz") {
        if (toppers.find(element => element.width + "x" + element.length + "cm" === bedSize)) return toppers.find(element => element.width + "x" + element.length + "cm" === bedSize);
    }
    if (schmerzArt == "verspannung") {
        return toppers[0];
    }
    console.log("couldn't calculate topper.. choosing no topper as default");
    return toppers[0];
}


function calculateMatress (schmerzArt, bedSize, bmi) {
    if (schmerzArt == "druckschmerz") {
        recommendedMattressSide = "Weiche Seite";
    }
    if (schmerzArt == "verspannung") {
        recommendedMattressSide = "Harte Seite";
    }
    if (schmerzArt == "kein") {
        recommendedMattressSide = "Harte Seite";
    }

    for (let i = 0; i < mattresses.length; i++) {
        if (mattresses[i].width + "x" + mattresses[i].length + "cm" == bedSize) {
            if (bmi <= 24 && mattresses[i].height == 18 || bmi > 24 && mattresses[i].height == 24) {
                return mattresses[i];
            }
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

    console.log(calculatedPillowOptions);

    if (calculatedTopper.name === "Kein Topper") {
        recommendedTopperItem.style.display = "none";
        recommendedTopperItem.nextElementSibling.style.display = "none";
    } else {
        recommendedTopperItem.childNodes.item(5).childNodes.item(7).innerHTML = calculatedTopper.name;
        recommendedTopperItem.childNodes.item(5).childNodes.item(9).innerHTML = calculatedTopper.width + "x" + calculatedTopper.length + "cm";
        recommendedTopperItem.childNodes.item(5).childNodes.item(11).innerHTML = "weich";
        recommendedTopperItem.childNodes.item(7).innerHTML = calculatedTopper.price + "€";
    }

    recommendedMattressItem.childNodes.item(5).childNodes.item(7).innerHTML = calculatedMattress.name;
    recommendedMattressItem.childNodes.item(5).childNodes.item(9).innerHTML = calculatedMattress.width + "x" + calculatedMattress.length + "cm";
    recommendedMattressItem.childNodes.item(5).childNodes.item(11).innerHTML = recommendedMattressSide;
    recommendedMattressItem.childNodes.item(7).innerHTML = calculatedMattress.price + "€";
    
    recommendedBlanketItem.childNodes.item(5).childNodes.item(7).innerHTML = calculatedBlanket.name;
    recommendedBlanketItem.childNodes.item(5).childNodes.item(9).innerHTML = calculatedBlanket.width + "x" + calculatedBlanket.length + "cm";
    recommendedBlanketItem.childNodes.item(5).childNodes.item(11).innerHTML = calculatedBlanket.material;
    recommendedBlanketItem.childNodes.item(7).innerHTML = calculatedBlanket.price + "€";

    recommendedPillowItem.childNodes.item(5).childNodes.item(7).innerHTML = calculatedPillowOptions[0].name;
    recommendedPillowItem.childNodes.item(5).childNodes.item(9).innerHTML = calculatedPillowOptions[0].width + "x" + calculatedPillowOptions[0].length + "cm";
    recommendedPillowItem.childNodes.item(5).childNodes.item(11).innerHTML = calculatedPillowOptions[0].material;
    recommendedPillowItem.childNodes.item(7).innerHTML = calculatedPillowOptions[0].price + 0.00 + "€";




    /*
    if (calculatedPillowOptions.length >= 2) {
        recommendedPillowItem.style.display = "none";
        pillowSelectWrapper.style.display = "list-item";
        allPillowSelectRadios[0].previousElementSibling.innerHTML = calculatedPillowOptions[0].name;
        allPillowSelectRadios[0].value = calculatedPillowOptions[0].name;
        allPillowSelectRadios[1].previousElementSibling.innerHTML = calculatedPillowOptions[1].name;
        allPillowSelectRadios[1].value = calculatedPillowOptions[1].name;
    } else {
        recommendedPillowItem.style.display = "list-item";
        recommendedPillowItem.innerHTML = calculatedPillowOptions[0].name;
        pillowSelectWrapper.style.display = "none";
    }
    */

    //cartWrapper.style.display = "block";
}


function buyItems (calculatedMattress, calculatedTopper, calculatedPillowOptions, calculatedBlanket) {
    var calculatedPillow;
    var calculatedPillow;
    console.log(calculatedPillowOptions);
    console.log(getSelectedRadioButton(allPillowSelectRadios).previousElementSibling.innerHTML);
    if (calculatedPillowOptions.length >= 2) {
        calculatedPillow = pillows.find(element => element.name == (getSelectedRadioButton(allPillowSelectRadios).previousElementSibling.innerHTML));
        console.log(calculatedPillow);
    } else {
        calculatedPillow = calculatedPillowOptions[0];
        console.log(calculatedPillow);
    }

    if (calculatedTopper.name === "Kein Topper") {
        let link = 'https://www.weltbett.de/dpa/add/tocart/id/' + calculatedMattress.id + "_1_" + calculatedMattress.sizeId + "-" 
        + calculatedPillow.id + "_1_" + calculatedPillow.sizeId + "-" 
        + calculatedBlanket.id + "_1_" + calculatedBlanket.sizeId;

        console.log(link);

        //window.location.href = link;
    } else {
        let link = 'https://www.weltbett.de/dpa/add/tocart/id/' + calculatedMattress.id + "_1_" + calculatedMattress.sizeId + "-" 
        + calculatedPillow.id + "_1_" + calculatedPillow.sizeId + "-" 
        + calculatedBlanket.id + "_1_" + calculatedBlanket.sizeId + "-" 
        + calculatedTopper.id + "_1_" + calculatedTopper.sizeId;
    
        console.log(link);
    
        //window.location.href = link;
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
    let bodyWeight = bodyWeightInput.value;
    let bodyHeight = bodyHeightInput.value;
    let bmi = calculateBMI(bodyWeight, bodyHeight);
    let materialPreference = getSelectedRadioButton(materialPreferenceInput).value;

    console.log(schmerzArt, schmerzBereich, schlafposition, bedSize, bodyWeight, bodyHeight, bmi, materialPreference);

    let calculatedMattress = calculateMatress(schmerzArt, bedSize, bmi);
    let calculatedTopper = calculateTopper(schmerzArt, bedSize);
    let calculatedPillowOptions = calculatePillow(schmerzArt, schmerzBereich, schlafposition, materialPreference);
    let calculatedBlanket = calculateBlanket(bodyHeight, materialPreference);
    
    console.log(calculatedMattress, calculatedTopper, calculatedPillowOptions, calculatedBlanket);

    createCart(calculatedMattress, calculatedTopper, calculatedPillowOptions, calculatedBlanket);
    buyButton.addEventListener('click', buyItems.bind(event, calculatedMattress, calculatedTopper, calculatedPillowOptions, calculatedBlanket));
}


function calculateBMI (bodyWeight, bodyHeight) {
    let calculatedBMI = bodyWeight / (Math.pow((bodyHeight/100), 2));
    return calculatedBMI;
}







/*
 * -------------------------- EVENT LISTENERS --------------------------------
 */


for (let i = 0; i < allNextButtons.length; i++) {
    allNextButtons[i].addEventListener('click', showNextSite);
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