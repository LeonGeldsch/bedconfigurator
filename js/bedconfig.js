/*
 * ------------------------ VARIABLES ------------------------------
 */

const submitButton = document.querySelector('#submit_button');

const buyButton = document.querySelector('#buy_button');

const schmerzArtInput = document.querySelector('#schmerz_art');

const schmerzBereichInput = document.querySelector('#schmerz_bereich');

const schlafpositionInput = document.querySelector('#schlafposition');

const normalPillowID = '';

//const lightPillowID = ;

const hardPillowID = '';

const topperID = '';

const hardMattressID = '';

const lightMattressID = '62_1_261';

var schmerzArt = schmerzArtInput.value;

var schmerzBereich = schmerzBereichInput.value;

var schlafposition = schlafpositionInput.value;

var cartWrapper = document.querySelector(".cart_wrapper");

var recommendedMatressItem = document.querySelector(".cart_list #recommended_mattress");

var recommendedTopperItem = document.querySelector("#recommended_topper");

var recommendedPillowItem = document.querySelector("#recommended_pillow");

var recommendedBlanketItem = document.querySelector("#recommended_blanket");


/*
 * ---------------------- FUNCTIONS ---------------------------
 */


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


function calculateTopper (schmerzArt) {
    if (schmerzArt == "druckschmerz") {
        return "Zusätzlicher Topper";
    }
    if (schmerzArt == "verspannung") {
        return "Kein Topper";
    } else {
        console.log("couldn't calculate topper.. choosing no topper as default");
        return "Kein Topper";
    }
}


function calculateMatress (schmerzArt) {
    if (schmerzArt == "druckschmerz") {
        return "Weiche Matratze";
    }
    if (schmerzArt == "verspannung") {
        return "Harte Matratze";
    } else {
        console.log("couldn't calculate mattress.. choosing soft mattress as default");
        return "Weiche Matratze"
    }
}


function calculateBlanket () {
    return "Decke Ganzjahr 200x200cm";
}


function createCart (calculatedMattress, calculatedTopper, calculatedPillow, calculatedBlanket) {
    recommendedMatressItem.innerHTML = calculatedMattress;
    recommendedTopperItem.innerHTML = calculatedTopper;
    recommendedPillowItem.innerHTML = calculatedPillow;
    recommendedBlanketItem.innerHTML = calculatedBlanket;

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
    console.log("submit!");
    let schmerzArt = schmerzArtInput.value;
    let schmerzBereich = schmerzBereichInput.value;
    let schlafposition = schlafpositionInput.value;

    let calculatedMattress = calculateMatress(schmerzArt);
    let calculatedTopper = calculateTopper(schmerzArt);
    let calculatedPillow = calculatePillow(schmerzArt, schmerzBereich, schlafposition);
    let calculatedBlanket = calculateBlanket();

    createCart(calculatedMattress, calculatedTopper, calculatedPillow, calculatedBlanket);
    buyButton.addEventListener('click', function () {
        buyItems(calculatedMattress, calculatedTopper, calculatedPillow, calculatedBlanket)
    });
}


/*
 * ------------------------ EVENT LISTENERS ------------------------
 */


submitButton.addEventListener('click', handleSubmit);