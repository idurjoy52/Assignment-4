//Generate Pin Button
var generatedNumber = document.getElementById("generated-number");
generatedNumber.disabled = true; //As we must not generate number by keyboard input
const generateButton = document.getElementById("generate-button");

generateButton.addEventListener("click",function(){
    let randomNumber = Math.random()*9000 + 1000;
    generatedNumber.value = Math.round(randomNumber);
    submittedPin.value = "";
    matched.style.display="none";
    notMatched.style.display="none";
})


//Output on Screen For CLicking Number Buttons
var submittedPin = document.getElementById("submitted-pin");
function getOutput() {
    return submittedPin.value;
}
    //Number Button
var number = document.getElementsByClassName("number");
for(var i = 0; i < number.length; i++) {
    number[i].addEventListener("click",function(){
        var output = getOutput();
        if (output != NaN) {
            output = output + this.id;
            submittedPin.value = output;
        }
    })
}
    //Clear and Backspace Button
var operator = document.getElementsByClassName("operator");
for(var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click",function(){
       if(this.id == "clear") {
           submittedPin.value = "";
       }
       else if(this.id == "backspace") {
           var submittedPinString = submittedPin.value.toString();
           var newSubmittedpin = submittedPinString.substr(0,submittedPinString.length-1);
           submittedPin.value = newSubmittedpin;
       }
    })
}


//Submit Button
const suubmitButton = document.getElementById("submit-button");
const matched = document.getElementById("matched");
const notMatched = document.getElementById("not-matched");
var tryLeft = document.getElementById("try-left");
var tryLeftNumber = parseInt(document.getElementById("try-left").innerText);
suubmitButton.addEventListener("click",function(){
    if (generatedNumber.value == submittedPin.value) {
        matched.style.display="block";
        notMatched.style.display="none";
    }
    else if(generatedNumber.value != submittedPin.value)  {
        notMatched.style.display="block";
        matched.style.display="none";
        tryLeftNumber=tryLeftNumber-1;
        tryLeft.innerText = tryLeftNumber;
        if(tryLeftNumber==0) {
            suubmitButton.disabled = true;
            generateButton.disabled = true;
            generatedNumber.value = "";
            submittedPin.value = "";
            notMatched.style.display="none";
            alert("Come Back Later!")
        }
    }
})