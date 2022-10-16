/* values:
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
1 square meter =
0.000247105381 acres
*/

// initializing variables

let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")
let areaEl = document.getElementById("area")
let convertEl = document.getElementById("convert")

// function that converts the input as it is written
inputEl.addEventListener("input", ()=> {
    if (inputEl.value === ''){
        lengthEl.textContent = ''
        volumeEl.textContent = ''
        massEl.textContent = ''
        areaEl.textContent = ''
    }
    else if (inputEl.value > 999){
        alert("Enter a number between 1 and 999")
    }
    else{
        lengthEl.textContent = `${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(3)} feet |
                                ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(3)} meters`
        volumeEl.textContent = `${inputEl.value} liters = ${(inputEl.value * 0.264).toFixed(3)} gallons |
                                ${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(3)} liters`
        massEl.textContent = `${inputEl.value} kilograms = ${(inputEl.value * 2.204).toFixed(3)} pounds |
                                ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(3)} kilograms`
        areaEl.textContent = `${inputEl.value} square meters = ${(inputEl.value * 0.000247105381).toFixed(3)} acres |
                                ${inputEl.value} acres = ${(inputEl.value / 3.281).toFixed(3)} square meters`
    }

})