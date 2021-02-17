/*
 * Notes:
 * Bug: add to cart with only mattress doesn't work e.g. (https://weltbett.de/dpa/add/tocart/id/22_2_37)
 * but combined it works e.g. (https://www.weltbett.de/dpa/add/tocart/id/22_2_37-5_2_122)
 *
 */





/*
 * ------------------------ VARIABLES ------------------------------
 */

const submitButton = document.querySelector('#submit_button');

const buyButton = document.querySelector('#buy_button');

const schmerzArtInput = document.querySelector('#schmerz_art');

const schmerzBereichInput = document.querySelector('#schmerz_bereich');

const schlafpositionInput = document.querySelector('#schlafposition');

const bodyHeightInput = document.querySelector('#height_input');

const bodyWeightInput = document.querySelector('#weight_input');

const bedSizeInput = document.querySelector('#bed_size');

const pillowSelectWrapper = document.querySelector('#pillow_select_wrapper');

const allPillowSelectRadios = document.querySelectorAll('.pillow_select_radio');

var schmerzArt = schmerzArtInput.value;

var schmerzBereich = schmerzBereichInput.value;

var schlafposition = schlafpositionInput.value;

var recommendedMattressSide = "Weiche Seite";

var cartWrapper = document.querySelector(".cart_wrapper");

var recommendedMattressItem = document.querySelector(".cart_list #recommended_mattress");

var recommendedTopperItem = document.querySelector("#recommended_topper");

var recommendedPillowItem = document.querySelector("#recommended_pillow");

var recommendedBlanketItem = document.querySelector("#recommended_blanket");


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
    new Pillow("80x80cm extra pral", 25, 10.90)
];

// all blanket options
var blankets = [
    new Blanket("135x200cm Ganzjahr", 123, 40.00),
    new Blanket("155x220cm Ganzjahr", 124, 80.00)
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
 * ---------------------- FUNCTIONS ---------------------------
 */

 
function calculatePillow (schmerzArt, schmerzBereich, schlafposition) {
    if (schmerzArt == "druckschmerz") {
        if (schmerzBereich == "nacken-schulter") {
            if (schlafposition == "rueckenschlaefer" || schlafposition == "bauchschlaefer") {
                return [pillows.find(element => element.name == "80x80cm normal-weich")];
            }
        }
    }
    if (schmerzArt == "verspannung") {
        if (schmerzBereich == "nacken-schulter") {
            if (schlafposition == "seitenschlaefer") {
                return [pillows.find(element => element.name == "80x80cm extra pral"), pillows.find(element => element.name == "40x80cm extra pral")];
            }
            if (schlafposition == "bauchschlaefer") {
                return [pillows.find(element => element.name == "80x80cm normal-weich")];
            }
        }
    }
    return [pillows.find(element => element.name == "80x80cm extra pral"), pillows.find(element => element.name == "40x80cm extra pral")];
}

/*
function calculatePillow (schmerzArt, schmerzBereich, schlafposition) {
    if (schmerzArt == "druckschmerz") {
        if (schmerzBereich == "nacken-schulter") {
            if (schlafposition == "rueckenschlaefer" || schlafposition == "bauchschlaefer") {
                return "80x80 Normalweiches Kissen";
            }
        }
    }
    if (schmerzArt == "verspannung") {
        if (schmerzBereich == "nacken-schulter") {
            if (schlafposition == "seitenschlaefer") {
                return "80x80/40x80 Extrafestes Kissen";
            }
            if (schlafposition == "bauchschlaefer") {
                return "80x80 Normalweiches Kissen";
            }
        }
    }
    return "80x80/40x80 Normalweiches Kissen";
}
*/


function calculateTopper (schmerzArt, bedSize) {
    if (schmerzArt == "druckschmerz") {
        for (let i = 0; i < toppers.length; i++) {
            if (toppers[i].width + "x" + toppers[i].length + "cm" == bedSize) {
                return toppers[i];
            }
        }
    }
    if (schmerzArt == "verspannung") {
        return toppers[0];
    } else {
        console.log("couldn't calculate topper.. choosing no topper as default");
        return toppers[0];
    }
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


function calculateBlanket (bedSize) {
    return blankets[1];
}


function createCart (calculatedMattress, calculatedTopper, calculatedPillowOptions, calculatedBlanket) {
    recommendedMattressItem.innerHTML = calculatedMattress.name;
    recommendedTopperItem.innerHTML = calculatedTopper.name;
    recommendedBlanketItem.innerHTML = calculatedBlanket.name;

    console.log(calculatedPillowOptions);

    if (calculatedPillowOptions.length >= 2) {
        recommendedPillowItem.style.display = "none";
        pillowSelectWrapper.style.display = "list-item";
        allPillowSelectRadios[0].previousElementSibling.innerHTML = calculatedPillowOptions[0].name;
        allPillowSelectRadios[0].value = calculatedPillowOptions[0].name;
        allPillowSelectRadios[1].previousElementSibling.innerHTML = calculatedPillowOptions[1].name;
        allPillowSelectRadios[1].value = calculatedPillowOptions[1].name;
    } else {
        recommendedPillowItem.style.display = "list-item";
        pillowSelectWrapper.style.display = "none";
    }

    cartWrapper.style.display = "block";
}

/*
function getID (item) {
    switch (item) {
        case "Weiche Matratze":
            return lightMattressID;
        case "Harte Matratze":
            return hardMattressID;
        case "80x80 Normalweiches Kissen":
            return normalPillowID;
        case "80x80/40x80 Extrafestes Kissen":
            return hardPillowID;
        case "Zusätzlicher Topper":
            return topperID;
        case "Kein Topper":
            return "";
        default:
            break;
    }
}
*/


function buyItems (calculatedMattress, calculatedTopper, calculatedPillowOptions, calculatedBlanket) {
    if (calculatedPillowOptions.length >= 2) {
        var calculatedPillow = pillows.find(element => element.name == (getSelectedRadioButton(allPillowSelectRadios).previousElementSibling.innerHTML));
    } else {
        var calculatedPillow = calculatedPillowOptions[0];
    }

    console.log(calculatedPillow, calculatedMattress, calculatedBlanket, calculatedTopper);

    let link = 'https://www.weltbett.de/dpa/add/tocart/id/' + calculatedMattress.id + "_1_" + calculatedMattress.sizeId + "-" 
    + calculatedPillow.id + "_1_" + calculatedPillow.sizeId + "-" 
    + calculatedBlanket.id + "_1_" + calculatedBlanket.sizeId + "-" 
    + calculatedTopper.id + "_1_" + calculatedTopper.sizeId;

    console.log(link);

    //window.location.href = link;
}


function getSelectedRadioButton (radioButtons) {
    let radioButtonsArray = Array.from(radioButtons);
    //console.log(radioButtonsArray);
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

    let calculatedMattress = calculateMatress(schmerzArt, bedSize, bmi);
    let calculatedTopper = calculateTopper(schmerzArt, bedSize);
    let calculatedPillowOptions = calculatePillow(schmerzArt, schmerzBereich, schlafposition);
    let calculatedBlanket = calculateBlanket(bedSize);

    //console.log(calculatedPillowOptions.length, calculatedPillowOptions);



    
    createCart(calculatedMattress, calculatedTopper, calculatedPillowOptions, calculatedBlanket);
    buyButton.addEventListener('click', function () {
        buyItems(calculatedMattress, calculatedTopper, calculatedPillowOptions, calculatedBlanket)
    });
}


function calculateBMI (bodyWeight, bodyHeight) {
    let calculatedBMI = bodyWeight / (Math.pow((bodyHeight/100), 2));
    return calculatedBMI;
}


/*
 * ------------------------ EVENT LISTENERS ------------------------
 */


submitButton.addEventListener('click', handleSubmit);