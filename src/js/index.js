// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

//const buttonConfirmElement = document.getElementById('button-confirm');

const cardholderNameInputElement = document.getElementById('cardholder-name');
const cardNameElement = document.getElementById('card-name');

const cardholderNumberInputElement = document.getElementById('cardholder-number');
const cardNumberElement = document.getElementById('card-number');

const cardholderExpDateMMInputElement = document.getElementById('cardholder-exp-date-mm');
const cardExpDateMMElement = document.getElementById('card-exp-date-mm');

const cardholderExpDateYYInputElement = document.getElementById('cardholder-exp-date-yy');
const cardExpDateYYElement = document.getElementById('card-exp-date-yy');

const cardholderCvcInputElement = document.getElementById('cardholder-cvc');
const cardCvcElement = document.getElementById('card-cvc');

const fillName = () => {
  cardNameElement.textContent = cardholderNameInputElement.value;
  if (cardholderNameInputElement.value === '') {
    cardNameElement.textContent = 'Jane Appleseed';
  }
};

const fillNumber = () => {
  cardNumberElement.textContent = cardholderNumberInputElement.value;
};

const fillExpDateMonth = () => {
  cardExpDateMMElement.textContent = cardholderExpDateMMInputElement.value;
};

const fillExpDateYear = () => {
  cardExpDateYYElement.textContent = cardholderExpDateYYInputElement.value;
};

const fillCvc = () => {
  cardCvcElement.textContent = cardholderCvcInputElement.value;
};

cardholderNameInputElement.addEventListener('input', fillName);
cardholderNumberInputElement.addEventListener('input', fillNumber);
cardholderExpDateMMInputElement.addEventListener('input', fillExpDateMonth);
cardholderExpDateYYInputElement.addEventListener('input', fillExpDateYear);
cardholderCvcInputElement.addEventListener('input', fillCvc);

/*   const confirmEmptyFields = () => {
  if ((input.value = '')) {
  }
}; */

//buttonConfirmElement.addEventListener('click');
