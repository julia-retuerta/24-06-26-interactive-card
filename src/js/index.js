// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

//const buttonConfirmElement = document.getElementById('button-confirm');

// VERSIÓN LARGA

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

// IMPRIMIR ERRORES

const formElement = document.querySelectorAll('form');

const defaultValues = {
  name: 'JANE APPLESEED',
  number: '0000 0000 0000 0000',
  month: '00',
  year: '00',
  cvc: '000'
};

const writeInCard = event => {
  const textCard = document.getElementById(`card-${event.target.id}`);
  const onlyNumbers = '0123456789';
  if (event.target.id === 'name') {
    const value = event.target.value;
    let isCorrect = true;
    for (const letter of value) {
      if (onlyNumbers.includes(letter)) {
        isCorrect = false;
      }
    }
  }
};

formElement.addEventListener('input', writeInCard);
