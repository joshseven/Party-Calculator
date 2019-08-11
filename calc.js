var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');

var resultFieldWine1 = document.getElementById('resultFieldWine1');
var resultFieldBeer1 = document.getElementById('resultFieldBeer1');
var resultFieldSpirits2 = document.getElementById('resultFieldSpirits1');

var resultFieldWine2 = document.getElementById('resultFieldWine2');
var resultFieldBeer2 = document.getElementById('resultFieldBeer2');

var form = document.getElementById('calculation');

// Wine beer, spirits calculation
form.addEventListener('submit', function(event){

    if (!numField1.value || !numField2.value) {
        alert("Please enter values in fields");
    } else {
        var totalGuests = parseFloat(numField1.value);
        var totalHours = parseFloat(numField2.value);
        totalHours++;

        var resultWine1 = (((totalGuests * totalHours) * .5) / 5);
        var resultBeer1 = ((totalGuests * totalHours) * .3);
          var resultSpirits1 = ((totalGuests * totalHours) * .2) /15;

// Wine Beer Calculation
        var resultWine2 = (((totalGuests * totalHours) * .6) / 5);
        var resultBeer2 = ((totalGuests * totalHours) * .4);
        

        resultFieldWine1.innerText = "Total: " + resultWine1 + " bottles of wine or "+ (resultWine1 /12)+ " cases of wine.";
         resultFieldBeer1.innerText = "Total: " + resultBeer1 + " bottles of beer or " + (resultBeer1 /24)+ " cases of beer.";
         resultFieldSpirits1.innerText = "Total: " + resultSpirits1 + " bottles of spirits.";
         

         
        resultFieldWine2.innerText = "Total: " + resultWine2 + " bottles of wine or "+ (resultWine2 /12)+ " cases of wine.";
        resultFieldBeer2.innerText = "Total: " + resultBeer2 + " bottles of beer or " + (resultBeer2 /24)+ " cases of beer.";
        
        event.preventDefault();
    }
});



