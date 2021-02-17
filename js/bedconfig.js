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

const bigPillowRadio = document.querySelector('#big_pillow_radio');

const smallPillowRadio = document.querySelector('#small_pillow_radio');

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
    new Mattress("DIE MATRATZE 24cm 90x200cm", 25, 279.00, 90, 200, 24)
];

// all topper options
var toppers = [
    new Topper("Kein Topper"),
    new Topper("90x190cm", 222, 0.00, 90, 190),
    new Topper("80x200cm", 223, 0.00, 80, 200),
    new Topper("90x200cm", 224, 10.00, 90, 200)
];



/*
 * ---------------------- FUNCTIONS ---------------------------
 */

 
function calculatePillow (schmerzArt, schmerzBereich, schlafposition) {
    if (schmerzArt == "druckschmerz") {
        if (schmerzBereich == "nacken-schulter") {
            if (schlafposition == "rueckenschlaefer" || schlafposition == "bauchschlaefer") {
                return pillows.find(element => element.name == "80x80cm normal-weich");
            }
        }
    }
    if (schmerzArt == "verspannung") {
        if (schmerzBereich == "nacken-schulter") {
            if (schlafposition == "seitenschlaefer") {
                return [pillows.find(element => element.name == "80x80cm extra pral"), pillows.find(element => element.name == "40x80cm extra pral")];
            }
            if (schlafposition == "bauchschlaefer") {
                return pillows.find(element => element.name == "80x80cm normal-weich");
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


function createCart (calculatedMattress, calculatedTopper, calculatedPillow, calculatedBlanket) {
    recommendedMattressItem.innerHTML = calculatedMattress.name;
    recommendedTopperItem.innerHTML = calculatedTopper.name;
    recommendedPillowItem.innerHTML = calculatedPillow.name;
    recommendedBlanketItem.innerHTML = calculatedBlanket.name;

    cartWrapper.style.display = "block";
}


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


function buyItems (calculatedMattress, calculatedTopper, calculatedPillow, calculatedBlanket) {
    window.location.href = 'https://www.weltbett.de/dpa/add/tocart/id/' + getID(calculatedMattress) + getID(calculatedPillow) + getID(calculatedBlanket) + getID(calculatedTopper);
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
    let calculatedPillow = calculatePillow(schmerzArt, schmerzBereich, schlafposition);
    let calculatedBlanket = calculateBlanket(bedSize);

    console.log(calculatedPillow);
    
    createCart(calculatedMattress, calculatedTopper, calculatedPillow, calculatedBlanket);
    buyButton.addEventListener('click', function () {
        buyItems(calculatedMattress, calculatedTopper, calculatedPillow, calculatedBlanket)
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