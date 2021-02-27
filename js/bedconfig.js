const allNextButtons = document.querySelectorAll('.bedconfig-next-button');

const allBackButtons = document.querySelectorAll('.bedconfig-back-button');

const allSites = document.querySelectorAll('.bedconfig-container');

const painTypeInput = document.querySelectorAll('#bedconfig-pain-type-input');

const sleepingPositionInput = document.querySelectorAll('#bedconfig-sleeping-position-input');

const painAreaInput = document.querySelector('#bedconfig-pain-area-input');

const weightInput = document.querySelector('#bedconfig-weight-input');

const heightInput = document.querySelector('#bedconfig-height-input');

const bedSizeInput = document.querySelector('#bedconfig-bed-size-input');

const materialPreferenceInput = document.querySelectorAll('#bedconfig-material-preference-input');

const submitButton = allNextButtons[3];

const buyButton = document.querySelector('#buy-button');

var currentSite = 0;


class Pillow {
    constructor(name, sizeId, price) {
        this.name = name;
        this.sizeId = sizeId;
        this.id = 5;
        this.price = price;
    }
}

class Blanket {
    constructor(name, sizeId, price) {
        this.name = name;
        this.sizeId = sizeId;
        this.id = 7;
        this.price = price;
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
    new Pillow("40x80cm normal-weich", 22, 0.90),
    new Pillow("40x80cm extra pral", 23, 0.90),
    new Pillow("80x80cm normal-weich", 24, 10.90),
    new Pillow("80x80cm extra pral", 25, 10.90),
    new Pillow("40x80cm normal-weich (federfrei)", 119, 0.00),
    new Pillow("40x80cm extra pral (federfrei)", 120, 0.00),
    new Pillow("80x80cm normal-weich (federfrei)", 121, 10.00),
    new Pillow("80x80cm extra pral (federfrei)", 122, 10.00)
];

// all blanket options
var blankets = [
    new Blanket("135x200cm Ganzjahr", 123, 40.00),
    new Blanket("155x220cm Ganzjahr", 124, 80.00),
    new Blanket("155x220cm Ganzjahr federfrei/synthetisch", 216, 80.00),
    new Blanket("135x200cm Ganzjahr federfrei/synthetisch", 217, 80.00),
];

// all mattress options
var mattresses = [
    new Mattress("DIE MATRATZE 24cm 70x200cm", 23, 279.00, 70, 200, 24),
    new Mattress("DIE MATRATZE 24cm 80x200cm", 24, 279.00, 80, 200, 24),
    new Mattress("DIE MATRATZE 24cm 90x200cm", 25, 279.00, 90, 200, 24),
    new Mattress("DIE MATRATZE 24cm 100x200cm", 26, 299.00, 100, 200, 24),
    new Mattress("DIE MATRATZE 24cm 140x200cm", 27, 409.00, 140, 200, 24),
    new Mattress("DIE MATRATZE 24cm 160x200cm", 28, 509.00, 160, 200, 24),
    new Mattress("DIE MATRATZE 24cm 180x200cm", 29, 529.00, 180, 200, 24),
    new Mattress("DIE MATRATZE 24cm 200x200cm", 30, 579.00, 200, 200, 24),
    new Mattress("DIE MATRATZE 18cm 70x200cm", 31, 179.00, 70, 200, 18),
    new Mattress("DIE MATRATZE 18cm 90x200cm", 33, 179.00, 90, 200, 18),
    new Mattress("DIE MATRATZE 18cm 100x200cm", 34, 199.00, 100, 200, 18),
    new Mattress("DIE MATRATZE 18cm 140x200cm", 35, 309.00, 140, 200, 18),
    new Mattress("DIE MATRATZE 18cm 160x200cm", 36, 409.00, 160, 200, 18),
    new Mattress("DIE MATRATZE 18cm 180x200cm", 37, 429.00, 180, 200, 18),
    new Mattress("DIE MATRATZE 18cm 200x200cm", 38, 479.00, 200, 200, 18),
    new Mattress("DIE MATRATZE 18cm Sondergröße 80x190cm", 39, 279.00, 80, 190, 18),
    new Mattress("DIE MATRATZE 18cm Sondergröße 90x190cm", 40, 279.00, 90, 190, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge 90x210cm", 41, 279.00, 90, 210, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge 100x210cm", 42, 279.00, 100, 210, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge 100x220cm", 43, 279.00, 100, 220, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge 200x210cm", 44, 579.00, 200, 210, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge 180x210cm", 45, 529.00, 180, 210, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge 200x220cm", 46, 579.00, 200, 220, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge 120x200cm", 56, 309.00, 120, 200, 18),
];

// all topper options
var toppers = [
    new Topper("Kein Topper"),
    new Topper("90x190cm", 222, 0.00, 90, 190),
    new Topper("80x200cm", 223, 0.00, 80, 200),
    new Topper("90x200cm", 224, 10.00, 90, 200),
    new Topper("100x200cm", 225, 20.00, 100, 200),
    new Topper("120x200cm", 226, 30.00, 120, 200),
    new Topper("140x200cm", 227, 50.00, 140, 200),
    new Topper("160x200cm", 228, 70.00, 160, 200),
    new Topper("180x200cm", 229, 100.00, 180, 200),
    new Topper("200x200cm", 230, 120.00, 200, 200),
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
                if (materialPreference === "federn") return [pillows.find(element => element.name == "80x80cm normal-weich")];
                else return [pillows.find(element => element.name == "80x80cm normal-weich (federfrei)")];
            }
        }
    }
    if (schmerzArt == "verspannung") {
        if (schmerzBereich == "nacken-schulter") {
            if (schlafposition == "seitenschlaefer") {
                if (materialPreference === "federn") return [pillows.find(element => element.name == "80x80cm extra pral"), pillows.find(element => element.name == "40x80cm extra pral")];
                else return [pillows.find(element => element.name == "80x80cm extra pral (federfrei)"), pillows.find(element => element.name == "40x80cm extra pral (federfrei)")];
            }
            if (schlafposition == "bauchschlaefer") {
                if (materialPreference === "federn") return [pillows.find(element => element.name == "80x80cm normal-weich")];
                else return [pillows.find(element => element.name == "80x80cm normal-weich (federfrei)")];
            }
        }
    }
    if (materialPreference === "federn") return [pillows.find(element => element.name == "80x80cm extra pral"), pillows.find(element => element.name == "40x80cm extra pral")];
    else return [pillows.find(element => element.name == "80x80cm extra pral (federfrei)"), pillows.find(element => element.name == "40x80cm extra pral (federfrei)")];
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
        if (materialPreference === "federn") return blankets.find(element => element.name == "155x220cm Ganzjahr");
        else return blankets.find(element => element.name == "155x220cm Ganzjahr federfrei/synthetisch");
    } else {
        if (materialPreference === "federn") return blankets.find(element => element.name == "135x200cm Ganzjahr");
        else return blankets.find(element => element.name == "135x200cm Ganzjahr federfrei/synthetisch");
    }
}


function createCart (calculatedMattress, calculatedTopper, calculatedPillowOptions, calculatedBlanket) {
    recommendedMattressItem.innerHTML = calculatedMattress.name;
    recommendedTopperItem.innerHTML = calculatedTopper.name;
    recommendedBlanketItem.innerHTML = calculatedBlanket.name;

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

    cartWrapper.style.display = "block";
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
    let schmerzArt = schmerzArtInput.value;
    let schmerzBereich = schmerzBereichInput.value;
    let schlafposition = schlafpositionInput.value;
    let bedSize = bedSizeInput.value;
    let bodyWeight = bodyWeightInput.value;
    let bodyHeight = bodyHeightInput.value;
    let bmi = calculateBMI(bodyWeight, bodyHeight);
    let materialPreference = materialPreferenceInput.value;

    let calculatedMattress = calculateMatress(schmerzArt, bedSize, bmi);
    let calculatedTopper = calculateTopper(schmerzArt, bedSize);
    let calculatedPillowOptions = calculatePillow(schmerzArt, schmerzBereich, schlafposition, materialPreference);
    let calculatedBlanket = calculateBlanket(bodyHeight, materialPreference);
    
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





painTypeInput.forEach(option => {
    option.addEventListener('click', function () {
        if (option.checked && option.value != "kein") {
            painAreaInput.disabled = false;
            painAreaInput.classList.remove('bedconfig-select-disabled');
            painAreaInput.previousElementSibling.classList.remove('bedconfig-label-disabled');
            console.log("false");
        } else {
            console.log("true");
            painAreaInput.disabled = true;
            painAreaInput.classList.add('bedconfig-select-disabled');
            painAreaInput.previousElementSibling.classList.add('bedconfig-label-disabled');
        }
    });
});
painTypeInput.forEach(option => {
    if (option.checked && option.value != "kein") {
        painAreaInput.disabled = false;
        painAreaInput.classList.remove('bedconfig-select-disabled');
        painAreaInput.previousElementSibling.classList.remove('bedconfig-label-disabled');
    } else {
        painAreaInput.disabled = true;
        painAreaInput.classList.add('bedconfig-select-disabled');
        painAreaInput.previousElementSibling.classList.add('bedconfig-label-disabled');
    }
});
