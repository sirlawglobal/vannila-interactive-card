const nameInput = document.querySelector('.name-details input');
const cardInput = document.querySelector('.card-details input');
const dateMonthInput = document.querySelector('.date-month-details');
const dateYearInput = document.querySelector('.date-year-details');
const showDateMonth = document.querySelector('.card-dateMonth-display');
const showDateYear = document.querySelector('.card-dateYear-display');
const dateWarning = document.querySelector('.date-warning');
const cvcDetails = document.querySelector('.cvc-details input');
const submitButton = document.querySelector('.submit');
const showCardNumber = document.querySelector('.card-num-display');
const showCardName = document.querySelector('.card-name-display');
const showCvc= document.querySelector('.cvc-display');
const cvcWarning= document.querySelector('.cvc-warning');
const cardWarning = document.querySelector('.card-warning');
const queryForm =document.querySelector('.query-form');
const successForm =document.querySelector('.success-form');



const validateCardNum = function(input) {
  // Updated regex to cover various card number formats
  return /^(?:\d[- ]*?){10,16}$/.test(input);
}

const validateCvc = function(input) {
  return /^\d{3}$/.test(input);
}

const validateDate = function(input) {
  return /^\d{2}$/.test(input);
}

const validateCardName = function(input) {
  // Updated regex to cover various card number formats
  return /^[a-zA-Z]+$/.test(input);
}



cardInput.oninput = function() {

  let cardNum = cardInput.value.trim().replace(/[^0-9]/g, '');
   // Remove non-numeric characters
   
  const formattedCardNum = cardNum.replace(/(\d{4})(?=\d)/g, '$1 ');

  if (validateCardNum(formattedCardNum)) {
    showCardNumber.textContent = formattedCardNum;
    // Display cardWarning only when the card number is invalid
    cardWarning.style.display = "none";
  } else {
    showCardNumber.textContent = "";
    // Display cardWarning when the card number is invalid
    cardWarning.style.display = "block"; 
  }
}

nameInput.oninput = function() {
  let cardName = nameInput.value.trim();

  if(validateCardName(cardName)){
   showCardName.textContent =cardName;
  } else{
       showCardName.textContent ="";
  }
}

//cvc
cvcDetails.oninput = function() {
let cvcNum = cvcDetails.value.trim();

if(validateCvc(cvcNum)){
  showCvc.textContent = cvcNum;
  cvcWarning.style.display = "none";
  } else{
    showCvc.textContent="";
    cvcWarning.style.display = "block";
  }
}  

//date
dateMonthInput.oninput = function() {
let cardMonth = dateMonthInput.value;

if(validateDate(cardMonth)){
  showDateMonth.textContent = cardMonth;
  dateWarning.style.display = "none";
  } else{
    showDateMonth.textContent="";
    dateWarning.style.display = "block";
  }
}

dateYearInput.oninput = function() {
let cardYear = dateYearInput.value;

if(validateDate(cardYear)){
  showDateYear.textContent = cardYear;
  dateWarning.style.display = "none";
  } else{
    showDateYear.textContent="";
    dateWarning.style.display = "block";
  }
}


submitButton.onclick = function(event) {
       
  event.preventDefault(); 
  if (!cardInput.value || 
    !nameInput.value || 
    !dateMonthInput.value ||
     !dateYearInput.value || 
     !cvcDetails.value) {
    
    dateWarning.style.display = "block";
    cvcWarning.style.display = "block";
    cardWarning.style.display = "block";
    return;
  }
  
  queryForm.style.display = "none";
  successForm.style.display = "block";


};
