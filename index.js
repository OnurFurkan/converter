/*
1 meter = 3.280839895 feet,
1 feet = 0.3048 meter,
1 liters = 0.2199692 galloons,
1 galloons = 4.54609 liters,
1 kilograms = 2.204623 pounds,
1 pounds = 0.4535924 kilograms,
*/

function getInputValue() {
    inputVal = document.getElementById("number-el").value;

    var meterToFeet = (inputVal * 3.28084).toFixed(2);
    var feetToMeter = (inputVal * 0.3048).toFixed(2);
    var literToGallon = (inputVal * 0.21997).toFixed(2);
    var gallonToLiter = (inputVal * 4.54609).toFixed(2);
    var kiloToPound = (inputVal * 2.20462).toFixed(2);
    var poundToKilo = (inputVal * 0.45359).toFixed(2);


    document.getElementById("length").innerHTML = inputVal + " meters = " + meterToFeet + " feet | " + inputVal + " feet = " + feetToMeter + " meters";
    document.getElementById("volume").innerHTML = inputVal + " liters = " + literToGallon + " gallon | " + inputVal + " gallon = " + gallonToLiter + " liters";
    document.getElementById("mass").innerHTML = inputVal + " kilos = " + kiloToPound + " pounds | " + inputVal + " pounds = " + poundToKilo + " kilos";
};    





