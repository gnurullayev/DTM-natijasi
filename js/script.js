var elForm = document.querySelector(".form");
var elFormInput = elForm.querySelector(".form-input");
var elFormSelect = elForm.querySelector(".select-form");
var elFormCheck = elForm.querySelector(".check-form");
var elFormbtn = elForm.querySelector(".form-btn");
var answerText = document.querySelectorAll(".text");

elForm.addEventListener("submit", function(e) {
    e.preventDefault()
    
    var checkboxValue = Number(elFormCheck.value) ;
    if(elFormCheck.checked) {
        checkboxValue = 0.5
    }

    var inputValue = Number(elFormInput.value);
    var selectValue = Number(elFormSelect.value) ;

    var discount = inputValue*checkboxValue;
    var maxBall = inputValue + discount;

    if(inputValue >= selectValue + 20 || maxBall >= selectValue + 20) {
        answerText[0].textContent = "Tabiriklayman siz talabalikka grand asosida qabul qilindingiz ";
        answerText[1].textContent = "";
        answerText[2].textContent = "";
        answerText[3].textContent = "";
    }
    else if (inputValue >= selectValue && inputValue < selectValue + 20 || maxBall >= selectValue && maxBall < selectValue + 20 ) {
        answerText[1].textContent = "Tabiriklayman siz talabalikka shartnoma asosida qabul qilindingiz ";
        answerText[0].textContent = "";
        answerText[2].textContent = "";
        answerText[3].textContent = "";
    }
    else if(inputValue >= 0 && inputValue < selectValue || maxBall >= 0 && maxBall < selectValue) {
        answerText[2].textContent = "Siz talabalikka qabul qilinmadingiz";
        answerText[0].textContent = ""
        answerText[1].textContent = ""
        answerText[3].textContent = ""
    }
    else if(inputValue < 0 || maxBall < 0) {
        answerText[3].textContent = "Iltimos musbat son kiriting";
        answerText[0].textContent = "";
        answerText[1].textContent = "";
        answerText[2].textContent = "";
    }
    else if(checkboxValue == 0){
        answerText[3].textContent = "Iltimos yo'nalishni tanlang";
        answerText[0].textContent = "";
        answerText[1].textContent = "";
        answerText[2].textContent = "";
    }
}) 

elFormbtn.addEventListener("click", function restart() {
    elFormCheck.checked = false;

    elFormInput.value = "";
    elFormSelect.value = "Tanlang";

    answerText[0].textContent = ""
    answerText[1].textContent = ""
    answerText[2].textContent = ""
    answerText[3].textContent = ""
}) 