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

const allCartAddRemoveButtons = document.querySelectorAll('.bedconfig-add-remove-button');
const allCartRemoveButtons = document.querySelectorAll('.bedconfig-remove-button');
const allCartAddButtons = document.querySelectorAll('.bedconfig-add-button');
const allCartAddRemoveButtonsInner = document.querySelectorAll('.bedconfig-add-remove-button-inner');

const allCartFilters = document.querySelectorAll('.bedconfig-cart-item-filter');

const recommendedMattressNameSpan = document.querySelector('#mattress-name-span');
const recommendedMattressSizeSpan = document.querySelector('#mattress-size-span');
const recommendedMattressSideSpan = document.querySelector('#mattress-side-span');
const recommendedMattressPriceSpan = document.querySelector('#mattress-price-span');

const recommendedTopperNameSpan = document.querySelector('#topper-name-span');
const recommendedTopperSizeSpan = document.querySelector('#topper-size-span');
const recommendedTopperPriceSpan = document.querySelector('#topper-price-span');

const recommendedPillowHeadline = document.querySelector('#pillow-title');
const recommendedPillowNameSpan = document.querySelector('#pillow-name-span');
const recommendedPillowSizeSpan = document.querySelector('#pillow-size-span');
const recommendedPillowMaterialSpan = document.querySelector('#pillow-material-span');
const recommendedPillowPriceSpan = document.querySelector('#pillow-price-span');

const recommendedBlanketHeadline = document.querySelector('#blanket-title');
const recommendedBlanketNameSpan = document.querySelector('#blanket-name-span');
const recommendedBlanketSizeSpan = document.querySelector('#blanket-size-span');
const recommendedBlanketMaterialSpan = document.querySelector('#blanket-material-span');
const recommendedBlanketPriceSpan = document.querySelector('#blanket-price-span');

const recommendedPillowCaseSpan = document.querySelector('#pillow-case-span');
const recommendedDuvetCoverSpan = document.querySelector('#duvet-cover-span');
const recommendedBedSheetSpan = document.querySelector('#bed-sheet-span');
const recommendedBedlinenPriceSpan = document.querySelector('#bedlinen-price-span');




const recommendedMattressItem = allCartItems[0];

const recommendedTopperItem = allCartItems[1];

const recommendedPillowItem = allCartItems[2];

const recommendedBlanketItem = allCartItems[3];

const recommendedBedLinenItem = allCartItems[4];

const allInfoContainers = document.querySelectorAll('.bedconfig-info-container');
const allInfoCloseButtons = document.querySelectorAll('.bedconfig-info-close-button');
const allInfoOpenButtons = document.querySelectorAll('.bedconfig-info-open-button');

const bmiTitle = document.querySelector('#bmi-title');
const bmiBelow24Text = document.querySelector('#bmi-below-24-text');
const bmiAbove24Text = document.querySelector('#bmi-above-24-text');
const hardSideText = document.querySelector('#hard-side-text');
const softSideText = document.querySelector('#soft-side-text');

const bigPillowText = document.querySelector('#big-pillow-text');
const smallPillowText = document.querySelector('#small-pillow-text');
const hardPillowText = document.querySelector('#hard-pillow-text');
const softPillowText = document.querySelector('#soft-pillow-text');
const syntheticPillowText = document.querySelector('#synthetic-pillow-text');
const naturalPillowText = document.querySelector('#natural-pillow-text');

var calculatedMattress;
var calculatedTopper;
var calculatedPillowOptions;
var calculatedBlanket;
var calculatedBedLinen = {
    pillowCase: "",
    duvetCover: "",
    bedSheet: ""
};

var bmi;

var currentSite = 0;

var buyButtonEventListener = false;

var pillowBlanketNumber = "";

var addToCartLink = "";

var mattressActive = true;
var topperActive = true;
var pillowActive = true;
var blanketActive = true;
var bedLinenActive = true;

var mattressAmount = 1;
var topperAmount = 1;
var pillowAmount = 1;
var blanketAmount = 1;
var bedLinenAmount = 1;


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

class BedLinen {
    constructor(name, sizeId, price, width, length) {
        this.name = name;
        this.sizeId = sizeId;
        this.id = 65;
        this.price = price;
        this.width = width;
        this.length = length;
    }
}


// all bed linen options
var bedLinen = [
    new BedLinen("2er Set Kissenbezug", 265, 59, 40, 80),
    new BedLinen("2er Set Kissenbezug", 266, 69, 80, 80),
    new BedLinen("2er Set Bettdeckenbezug", 267, 129, 135, 200),
    new BedLinen("2er Set Bettdeckenbezug", 268, 139, 155, 200),
    new BedLinen("2er Set Spannbettlaken", 269, 84, 70, 200),
    new BedLinen("2er Set Spannbettlaken", 269, 84, 80, 200),
    new BedLinen("2er Set Spannbettlaken", 270, 89, 90, 200),
    new BedLinen("2er Set Spannbettlaken", 270, 89, 100, 200),
    new BedLinen("2er Set Spannbettlaken", 271, 99, 120, 200),
    new BedLinen("2er Set Spannbettlaken", 271, 99, 140, 200),
    new BedLinen("2er Set Spannbettlaken", 272, 109, 160, 200),
    new BedLinen("2er Set Spannbettlaken", 272, 109, 180, 200),
]

// all pillow options
var pillows = [
    new Pillow("Normal Weich", 22, 39, 80, 40, "Federfüllung"),
    new Pillow("Extra Prall", 23, 39, 80, 40, "Federfüllung"),
    new Pillow("Normal Weich", 24, 49, 80, 80, "Federfüllung"),
    new Pillow("Extra Prall", 25, 49.90, 80, 80, "Federfüllung"),
    new Pillow("Normal Weich", 119, 39, 80, 40, "Synthetikfüllung"),
    new Pillow("Extra Prall", 120, 39.90, 80, 40, "Synthetikfüllung"),
    new Pillow("Normal Weich", 121, 49, 80, 80, "Synthetikfüllung"),
    new Pillow("Extra Prall", 122, 49.90, 80, 80, "Synthetikfüllung")
];

// all blanket options
var blankets = [
    new Blanket("All seasons", 123, 129, 135, 200, "Federfüllung"),
    new Blanket("All seasons", 124, 179, 155, 220, "Federfüllung"),
    new Blanket("All seasons", 216, 169, 155, 220, "Synthetikfüllung"),
    new Blanket("All seasons", 217, 129, 135, 200, "Synthetikfüllung"),
];

// all mattress options
var mattresses = [
    new Mattress("DIE MATRATZE 24cm", 23, 298, 70, 200, 24),
    new Mattress("DIE MATRATZE 24cm", 24, 298, 80, 200, 24),
    new Mattress("DIE MATRATZE 24cm", 25, 298, 90, 200, 24),
    new Mattress("DIE MATRATZE 24cm", 26, 339, 100, 200, 24),
    new Mattress("DIE MATRATZE 24cm", 57, 399, 120, 200, 24),
    new Mattress("DIE MATRATZE 24cm", 27, 459, 140, 200, 24),
    new Mattress("DIE MATRATZE 24cm", 28, 529, 160, 200, 24),
    new Mattress("DIE MATRATZE 24cm", 29, 599, 180, 200, 24),
    new Mattress("DIE MATRATZE 24cm", 30, 659, 200, 200, 24),
    new Mattress("DIE MATRATZE 24cm Minderlänge", 47, 298, 80, 190, 24),
    new Mattress("DIE MATRATZE 24cm Minderlänge", 48, 298, 90, 190, 24),
    new Mattress("DIE MATRATZE 24cm Überlänge", 49, 399, 90, 210, 24),
    new Mattress("DIE MATRATZE 24cm Überlänge", 50, 439, 100, 210, 24),
    new Mattress("DIE MATRATZE 24cm Überlänge", 53, 699, 180, 210, 24),
    new Mattress("DIE MATRATZE 24cm Überlänge", 52, 759, 200, 210, 24),
    new Mattress("DIE MATRATZE 24cm Überlänge", 51, 439, 100, 220, 24),
    new Mattress("DIE MATRATZE 24cm Überlänge", 54, 759, 200, 220, 24),
    new Mattress("DIE MATRATZE 24cm Überlänge", 60, 559, 140, 220, 24),
    new Mattress("DIE MATRATZE 24cm Überlänge", 59, 559, 140, 210, 24),

    new Mattress("DIE MATRATZE 18cm", 31, 179, 70, 200, 18),
    new Mattress("DIE MATRATZE 18cm", 32, 189, 80, 200, 18),
    new Mattress("DIE MATRATZE 18cm", 33, 198, 90, 200, 18),
    new Mattress("DIE MATRATZE 18cm", 34, 219, 100, 200, 18),
    new Mattress("DIE MATRATZE 18cm", 56, 329, 120, 200, 18),
    new Mattress("DIE MATRATZE 18cm", 35, 339, 140, 200, 18),
    new Mattress("DIE MATRATZE 18cm", 36, 429, 160, 200, 18),
    new Mattress("DIE MATRATZE 18cm", 37, 449, 180, 200, 18),
    new Mattress("DIE MATRATZE 18cm", 38, 499, 200, 200, 18),
    new Mattress("DIE MATRATZE 18cm Sondergröße", 39, 198, 80, 190, 18),
    new Mattress("DIE MATRATZE 18cm Sondergröße", 40, 198, 90, 190, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge", 41, 299, 90, 210, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge", 42, 329, 100, 210, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge", 43, 298, 100, 220, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge", 44, 549, 200, 210, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge", 45, 489, 180, 210, 18),
    new Mattress("DIE MATRATZE 18cm Überlänge", 46, 599, 200, 220, 18),
];

// all topper options
var toppers = [
    new Topper("Kein Topper"),
    new Topper("Der Topper", 222, 129, 70, 200),
    new Topper("Der Topper", 223, 129, 80, 200),
    new Topper("Der Topper", 224, 129, 90, 200),
    new Topper("Der Topper", 225, 129, 100, 200),
    new Topper("Der Topper", 226, 249, 120, 200),
    new Topper("Der Topper", 227, 249, 140, 200),
    new Topper("Der Topper", 228, 249, 160, 200),
    new Topper("Der Topper", 229, 249, 180, 200),
    new Topper("Der Topper", 230, 249, 200, 200),
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
        recommendedMattressSide = "Softer Side (H3)";
    }
    if (schmerzArt == "verspannung") {
        recommendedMattressSide = "Firmer Side (H4)";
    }
    if (schmerzArt == "kein") {
        recommendedMattressSide = "Firmer Side (H4)";
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

function calculateBedLinen (calculatedMattress, calculatedPillowOptions, calculatedBlanket) {

    let calculatedPillow = calculatedPillowOptions[0];
    let closestDuvetCoverWidth = closest(calculatedMattress.width, [70, 80, 90, 100, 120, 140, 160, 180]);

    if (calculatedBlanket.width === 135) {
        calculatedBedLinen.duvetCover = bedLinen.find(element => element.width === 135 && element.name === "2er Set Bettdeckenbezug");
    }
    if (calculatedBlanket.width === 155) {
        calculatedBedLinen.duvetCover = bedLinen.find(element => element.width === 155 && element.name === "2er Set Bettdeckenbezug");
    }

    if (calculatedPillow.width === 40) {
        calculatedBedLinen.pillowCase = bedLinen.find(element => element.width === 40 && element.name === "2er Set Kissenbezug");
    }
    if (calculatedPillow.width === 80) {
        calculatedBedLinen.pillowCase = bedLinen.find(element => element.width === 80 && element.name === "2er Set Kissenbezug");
    }

    calculatedBedLinen.bedSheet = bedLinen.find(element => element.width === closestDuvetCoverWidth && element.name === "2er Set Spannbettlaken")
}

function closest (num, arr) {
    var curr = arr[0];
    var diff = Math.abs (num - curr);
    for (var val = 0; val < arr.length; val++) {
        var newdiff = Math.abs (num - arr[val]);
        if (newdiff < diff) {
            diff = newdiff;
            curr = arr[val];
        }
    }
    return curr;
}

function createCart (calculatedMattress, calculatedTopper, calculatedPillowOptions, calculatedBlanket) {

    if (calculatedMattress.width >= 140) {
        incrementItemAmount(0);
        mattressAmount = 2;
        decrementItemAmount(0);
        incrementItemAmount(1);
        topperAmount = 2;
        decrementItemAmount(1);
        incrementItemAmount(2);
        pillowAmount = 3;
        decrementItemAmount(2);
        incrementItemAmount(3);
        blanketAmount = 3;
        decrementItemAmount(3);
    } else {
        incrementItemAmount(0);
        mattressAmount = 2;
        decrementItemAmount(0);
        incrementItemAmount(1);
        topperAmount = 2;
        decrementItemAmount(1);
        incrementItemAmount(2);
        pillowAmount = 2;
        decrementItemAmount(2);
        incrementItemAmount(3);
        blanketAmount = 2;
        decrementItemAmount(3);
    }

    updateCart();

}


function updateCart () {
    if (calculatedTopper.name === "Kein Topper") {
        recommendedTopperItem.style.display = "none";
    } else {
        recommendedTopperItem.style.display = "flex";
        recommendedTopperSizeSpan.innerHTML = calculatedTopper.width + "x" + calculatedTopper.length + "cm";
        if (isFloat(calculatedTopper.price) && topperAmount > 0) {
            recommendedTopperPriceSpan.innerHTML =  (calculatedTopper.price * topperAmount).toFixed(2).replace(".", ",") + "€";
        } else {
            recommendedTopperPriceSpan.innerHTML = calculatedTopper.price * topperAmount + "€";
        }
    }

    if (calculatedMattress.height === 24 && bmi <= 24) {
        bmiTitle.classList.add('d-none');
        bmiBelow24Text.classList.add('d-none');
        bmiAbove24Text.classList.add('d-none');
    } else if (calculatedMattress.height === 24) {
        bmiTitle.classList.remove('d-none');
        bmiBelow24Text.classList.add('d-none');
        bmiAbove24Text.classList.remove('d-none');
    } else {
        bmiTitle.classList.remove('d-none');
        bmiBelow24Text.classList.remove('d-none');
        bmiAbove24Text.classList.add('d-none');
    }

    
    if (recommendedMattressSide === "Festere Seite (H4)") {
        hardSideText.classList.remove('d-none');
        softSideText.classList.add('d-none');
    } else {
        hardSideText.classList.add('d-none');
        softSideText.classList.remove('d-none');
    }

    if (recommendedPillowItem.length === 40) {
        smallPillowText.classList.remove('d-none');
        bigPillowText.classList.add('d-none');
    } else {
        smallPillowText.classList.add('d-none');
        bigPillowText.classList.remove('d-none');
    }

    if (calculatedPillowOptions[0].name === "Extra Prall") {
        hardPillowText.classList.remove('d-none');
        softPillowText.classList.add('d-none');
    } else {
        hardPillowText.classList.add('d-none');
        softPillowText.classList.remove('d-none');
    }

    if (calculatedPillowOptions[0].material === "Federfüllung") {
        syntheticPillowText.classList.add('d-none');
        naturalPillowText.classList.remove('d-none');
    } else {
        syntheticPillowText.classList.remove('d-none');
        naturalPillowText.classList.add('d-none');
    }

    recommendedMattressNameSpan.innerHTML = calculatedMattress.height + "cm";
    recommendedMattressSizeSpan.innerHTML = calculatedMattress.width + "x" + calculatedMattress.length + "cm";
    recommendedMattressSideSpan.innerHTML = recommendedMattressSide;
    if (isFloat(calculatedMattress.price) && mattressAmount > 0) {
        recommendedMattressPriceSpan.innerHTML =  (calculatedMattress.price * mattressAmount).toFixed(2).replace(".", ",") + "€";
    } else {
        recommendedMattressPriceSpan.innerHTML = calculatedMattress.price * mattressAmount + "€";
    }
    
    recommendedBlanketNameSpan.innerHTML = calculatedBlanket.name;
    recommendedBlanketSizeSpan.innerHTML = calculatedBlanket.width + "x" + calculatedBlanket.length + "cm";
    recommendedBlanketMaterialSpan.innerHTML = calculatedBlanket.material;
    if (calculatedBlanket.material === "Synthetikfüllung") {
        recommendedBlanketMaterialSpan.innerHTML = "Synthetic";
    } else {
        recommendedBlanketMaterialSpan.innerHTML = "Natural";
    }
    if (isFloat(calculatedBlanket.price) && blanketAmount > 0) {
        recommendedBlanketPriceSpan.innerHTML =  (calculatedBlanket.price * blanketAmount).toFixed(2).replace(".", ",") + "€";
    } else {
        recommendedBlanketPriceSpan.innerHTML = calculatedBlanket.price * blanketAmount + "€";
    }

    if (calculatedPillowOptions[0].name === "Extra Prall") {
        recommendedPillowNameSpan.innerHTML = "Extra firm";
    } else {
        recommendedPillowNameSpan.innerHTML = "Normal firmness";
    }
    recommendedPillowSizeSpan.innerHTML = calculatedPillowOptions[0].width + "x" + calculatedPillowOptions[0].length + "cm";
    recommendedPillowMaterialSpan.innerHTML = calculatedPillowOptions[0].material;
    if (calculatedPillowOptions[0].material === "Synthetikfüllung") {
        recommendedPillowMaterialSpan.innerHTML = "Synthetic";
    } else {
        recommendedPillowMaterialSpan.innerHTML = "Natural";
    }
    if (isFloat(calculatedPillowOptions[0].price) && pillowAmount > 0) {
        recommendedPillowPriceSpan.innerHTML =  (calculatedPillowOptions[0].price * pillowAmount).toFixed(2).replace(".", ",") + "€";
    } else {
        recommendedPillowPriceSpan.innerHTML = calculatedPillowOptions[0].price * pillowAmount + "€";
    }

    recommendedBedSheetSpan.innerHTML = "Set of two bedsheets" + " " + calculatedBedLinen.bedSheet.width + "x" + calculatedBedLinen.bedSheet.length + "cm";
    recommendedPillowCaseSpan.innerHTML = "Set of two pillowcases" + " " + calculatedBedLinen.pillowCase.width + "x" + calculatedBedLinen.pillowCase.length + "cm";
    recommendedDuvetCoverSpan.innerHTML = "Set of two duvet covers" + " " + calculatedBedLinen.duvetCover.width + "x" + calculatedBedLinen.duvetCover.length + "cm";
    recommendedBedlinenPriceSpan.innerHTML = (calculatedBedLinen.bedSheet.price + calculatedBedLinen.pillowCase.price + calculatedBedLinen.duvetCover.price) * bedLinenAmount + "€";
}


function isFloat(n) {
    return n === +n && n !== (n|0);
}


function buyItems (calculatedMattress, calculatedTopper, calculatedPillowOptions, calculatedBlanket) {
    var calculatedPillow = calculatedPillowOptions[0];



    addToCartLink = 'https://www.weltbett.co.uk/dpa/add/tocart/id/';
    if (mattressAmount != 0) addToCartLink += calculatedMattress.id + "_" + mattressAmount + "_" + calculatedMattress.sizeId;
    if (topperAmount != 0 && calculatedTopper.name != "Kein Topper") addToCartLink += "-" + calculatedTopper.id + "_" + topperAmount + "_" + calculatedTopper.sizeId;
    if (pillowAmount != 0) addToCartLink += "-" + calculatedPillow.id + "_" + pillowAmount + "_" + calculatedPillow.sizeId;
    if (blanketAmount != 0) addToCartLink += "-" + calculatedBlanket.id + "_" + blanketAmount + "_" + calculatedBlanket.sizeId;
    if (bedLinenAmount != 0) addToCartLink += "-" + calculatedBedLinen.bedSheet.id + "_" + bedLinenAmount + "_" + calculatedBedLinen.bedSheet.sizeId;
    if (bedLinenAmount != 0) addToCartLink += "-" + calculatedBedLinen.duvetCover.id + "_" + bedLinenAmount + "_" + calculatedBedLinen.duvetCover.sizeId;
    if (bedLinenAmount != 0) addToCartLink += "-" + calculatedBedLinen.pillowCase.id + "_" + bedLinenAmount + "_" + calculatedBedLinen.pillowCase.sizeId;

    window.location.href = addToCartLink;
    //console.log(addToCartLink);
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
    bmi = calculateBMI(bodyWeight, bodyHeight);
    let materialPreference = getSelectedRadioButton(materialPreferenceInput).value;
    calculatedMattress = calculateMatress(schmerzArt, bedSize, bmi);
    calculatedTopper = calculateTopper(schmerzArt, bedSize);
    calculatedPillowOptions = calculatePillow(schmerzArt, schmerzBereich, schlafposition, materialPreference);
    calculatedBlanket = calculateBlanket(bodyHeight, materialPreference);

    calculateBedLinen(calculatedMattress, calculatedPillowOptions, calculatedBlanket);
    
    createCart(calculatedMattress, calculatedTopper, calculatedPillowOptions, calculatedBlanket, calculatedBedLinen);
    if (!buyButtonEventListener) {
        buyButton.addEventListener('click', buyItems.bind(event, calculatedMattress, calculatedTopper, calculatedPillowOptions, calculatedBlanket));
        buyButtonEventListener = true;
    }
}


function calculateBMI (bodyWeight, bodyHeight) {
    let calculatedBMI = bodyWeight / (Math.pow((bodyHeight/100), 2));
    return calculatedBMI;
}


function toggleCartItem (index) {
    allCartAddRemoveButtons[index].classList.toggle('bedconfig-add-remove-button-yellow');
    allCartItems[index].classList.toggle('bedconfig-cart-item-disabled');
}


function incrementItemAmount (index) {
    switch(index) {
        case 0:
            mattressAmount++;
            if (mattressAmount === 1) {
                toggleCartItem(index);
            }
            allCartAddRemoveButtonsInner[index].innerHTML = mattressAmount;
            break;
        case 1:
            topperAmount++;
            if (topperAmount === 1) {
                toggleCartItem(index);
            }
            allCartAddRemoveButtonsInner[index].innerHTML = topperAmount;
            break;
        case 2:
            pillowAmount++;
            if (pillowAmount === 1) {
                toggleCartItem(index);
            }
            allCartAddRemoveButtonsInner[index].innerHTML = pillowAmount;
            break;
        case 3:
            blanketAmount++;
            if (blanketAmount === 1) {
                toggleCartItem(index);
            }
            allCartAddRemoveButtonsInner[index].innerHTML = blanketAmount;
            break;
        case 4:
            bedLinenAmount++;
            if (bedLinenAmount === 1) {
                toggleCartItem(index);
            }
            allCartAddRemoveButtonsInner[index].innerHTML = bedLinenAmount;
            break;
    }
    updateCart();
}

function decrementItemAmount (index) {
    switch(index) {
        case 0:
            if (mattressAmount === 1) {
                toggleCartItem(index);
            }
            if (mattressAmount > 0) mattressAmount--;
            allCartAddRemoveButtonsInner[index].innerHTML = mattressAmount;
            break;
        case 1:
            if (topperAmount === 1) {
                toggleCartItem(index);
            }
            if (topperAmount > 0) topperAmount--;
            allCartAddRemoveButtonsInner[index].innerHTML = topperAmount;
            break;
        case 2:
            if (pillowAmount === 1) {
                toggleCartItem(index);
            }
            if (pillowAmount > 0) pillowAmount--;
            allCartAddRemoveButtonsInner[index].innerHTML = pillowAmount;
            break;
        case 3:
            if (blanketAmount === 1) {
                toggleCartItem(index);
            }
            if (blanketAmount > 0) blanketAmount--;
            allCartAddRemoveButtonsInner[index].innerHTML = blanketAmount;
            break;
        case 4:
            if (bedLinenAmount === 1) {
                toggleCartItem(index);
            }
            if (bedLinenAmount > 0) bedLinenAmount--;
            allCartAddRemoveButtonsInner[index].innerHTML = bedLinenAmount;
            break;
    }
    updateCart();
}


for (let i = 0; i < allCartRemoveButtons.length; i++) {
    allCartRemoveButtons[i].addEventListener('click', decrementItemAmount.bind(event, i));
}
for (let i = 0; i < allCartAddButtons.length; i++) {
    allCartAddButtons[i].addEventListener('click', incrementItemAmount.bind(event, i));
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

/*
function animateElementIn (element) {
    element.classList.add('d-none');
    element.classList.add('position-fixed');
    element.classList.add('h-0');
    error.style.height = "auto";
}
*/


function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


function validateBodyHeightInput () {
    if (isNumber(bodyHeightInput.value) || (isNumber(bodyHeightInput.value.substring(-1, bodyHeightInput.value.length - 2)) && bodyHeightInput.value.slice(-2) === "cm")) {
        bodyHeightInput.classList.remove("is-invalid");
        bodyHeightInput.classList.add("is-valid");
        bodyHeightInputError.classList.add('bedconfig-input-error-disabled');
        if (bodyHeightInput.value.slice(-2) != "cm") {
            bodyHeightInput.value = bodyHeightInput.value + "cm";
        }
        return true;
    } else {
        bodyHeightInput.classList.remove("is-valid");
        bodyHeightInput.classList.add("is-invalid");
        bodyHeightInputError.classList.remove('bedconfig-input-error-disabled');
        return false;
    }
}
function validateBodyWeightInput () {
    if (isNumber(bodyWeightInput.value.replace(",", ".")) || (isNumber(bodyWeightInput.value.replace(",", ".").substring(-1, bodyWeightInput.value.length - 2)) && bodyWeightInput.value.slice(-2) === "kg")) {
        bodyWeightInput.classList.remove("is-invalid");
        bodyWeightInput.classList.add("is-valid");
        bodyWeightInputError.classList.add('bedconfig-input-error-disabled');
        if (bodyWeightInput.value.slice(-2) != "kg") {
            bodyWeightInput.value = bodyWeightInput.value + "kg";
        }
        return true;
    } else {
        bodyWeightInput.classList.remove("is-valid");
        bodyWeightInput.classList.add("is-invalid");
        bodyWeightInputError.classList.remove('bedconfig-input-error-disabled');
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
        bedSizeInputError.classList.add('bedconfig-input-error-disabled');
        bedSizeInput.classList.remove("is-invalid");
        bedSizeInput.classList.add("is-valid");
        return true;
    } else {
        bedSizeInputError.classList.remove('bedconfig-input-error-disabled');
        bedSizeInput.classList.remove("is-valid");
        bedSizeInput.classList.add("is-invalid");
        return false;
    }
}

function validatePainAreaInput () {
    if (painAreaInput.value != "" || getSelectedRadioButton(painTypeInput).value == "kein") {
        painAreaInputError.classList.add('bedconfig-input-error-disabled');
        painAreaInput.classList.remove("is-invalid");
        painAreaInput.classList.add("is-valid");
        return true;
    } else {
        painAreaInputError.classList.remove('bedconfig-input-error-disabled');
        painAreaInput.classList.remove("is-valid");
        painAreaInput.classList.add("is-invalid");
        return false;
    }
}


for (let i = 0; i < allInfoOpenButtons.length; i++) {
    allInfoOpenButtons[i].addEventListener('click', () => {
        allInfoContainers[i].classList.remove('bedconfig-closed');
        allInfoOpenButtons[i].classList.add('bedconfig-opacity-0');
    });
}

for (let i = 0; i < allInfoCloseButtons.length; i++) {
    allInfoCloseButtons[i].addEventListener('click', () => {
        allInfoContainers[i].classList.add('bedconfig-closed');
        allInfoOpenButtons[i].classList.remove('bedconfig-opacity-0');
    });
}

/*
 * -------------------------- EVENT LISTENERS --------------------------------
 */


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