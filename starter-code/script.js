
let heightft=(document.getElementById("heightft"));
let heightin=(document.getElementById("heightin"));
let weight=(document.getElementById("weight"));
let finalHeight
let bmi

function changeHeight() {
    heightNan = Number(heightft.value*12) + Number(heightin.value)
    finalHeight = Number(heightNan)
}
function bmiCalculation(){
    bmiIn = Number(weight.value) / (Number(((finalHeight))) * Number(((finalHeight))))
  bmiNan = Number(703) * Number(bmiIn)
    bmi = Number(bmiNan)
}

function checkBMI(){
    changeHeight()
    bmiCalculation()
    }
function showResults(){
    console.log(" Your BMI was: " + bmi + ". Your final converted height was:" + finalHeight("."))
}
function showFinal(){
    checkBMI()
    showResults()
    changeHeight()
    document.getElementById("results").innerHTML + finalHeight + Number(weight.value)
}

function showHeight(){
    changeHeight()
    console.log("Your total height in feet is: " + finalHeight)
}