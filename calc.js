var wineField1 = document.getElementById('wineField1');
var wineField2 = document.getElementById('wineField2');

var beerField1 = document.getElementById('beerField1');
var beerField2 = document.getElementById('beerField2');

var spiritsField1 = document.getElementById('spiritsField1');
var spiritsField2 = document.getElementById('spiritsField2');

var resultFieldWine = document.getElementById('resultFieldWine');
var resultFieldBeer = document.getElementById('resultFieldBeer');
var resultFieldSpirits = document.getElementById('resultFieldSpirits');

var formWine = document.getElementById('wineCalculation');
var formBeer = document.getElementById('beerCalculation');
var formSpirits = document.getElementById('spiritsCalculation');

// Wine calculation
formWine.addEventListener('submit',function(eventWine){
    if (!wineField1.value || !wineField2.value) {
        alert("Please enter values in fields");
    } else {
        var guestsWine = parseFloat(wineField1.value);
        var hoursWine = parseFloat(wineField2.value);
        hoursWine++;
        var resultWine = ((guestsWine * hoursWine) * .5) /5 ;

        resultFieldWine.innerText = "The number of  wine bottles: " + resultWine;
        eventWine.preventDefault();
    }
});

// // Beer Calulation
formBeer.addEventListener('submit',function(eventBeer){
    if (!beerField1.value || !beerField2.value){
        alert("Please enter values in fields");
    } else {
        var guestsBeer = parseFloat(beerField1.value);
        var hoursBeer = parseFloat(beerField2.value);
        hoursBeer++;
        var resultBeer = ((guestsBeer * hoursBeer) * .3);
    
        resultFieldBeer.innerText = "The number of  beer bottles: " + resultBeer;
        eventBeer.preventDefault();
        }
    });

// Sprits Calculation
formSpirits.addEventListener('submit',function(eventSpirits){
    if (!spiritsField1.value || !spiritsField2.value){
            alert("Please enter values in fields");
    } else {
        var guestsSpirits = parseFloat(spiritsField1.value);
        var hoursSpirits = parseFloat(spiritsField2.value);
        hoursSpirits++;
        var resultSpirits = ((guestsSpirits * hoursSpirits) * .2) /15 ;
        
        resultFieldSpirits.innerText = "The number of  sprits bottles: " + resultSpirits;
        eventSpirits.preventDefault();
        }
});

