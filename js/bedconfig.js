const allNextButtons = document.querySelectorAll('.bedconfig-next-button');

const allBackButtons = document.querySelectorAll('.bedconfig-back-button');

const allSites = document.querySelectorAll('.bedconfig-container');

const painTypeInput = document.querySelectorAll('#pain-input');

const painAreaInput = document.querySelector('#pain-area-input');

var currentSite = 0;


function showNextSite () {
    currentSite++;
    allSites.forEach(site => {
        site.style.display = "none";
    });
    allSites[currentSite].style.display = "block";
}

function showPreviousSite () {
    currentSite--;
    allSites.forEach(site => {
        site.style.display = "none";
    });
    allSites[currentSite].style.display = "block";
}


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
