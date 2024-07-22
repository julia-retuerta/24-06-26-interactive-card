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

const errorElements = document.querySelectorAll('.blank-error');

const formElement = document.getElementById('form');

const confirmationMessageElement = document.getElementById('confirmation-message');

const fillName = () => {
  cardNameElement.textContent = cardholderNameInputElement.value;
  if (cardholderNameInputElement.value === '') {
    cardNameElement.textContent = 'Jane Appleseed';
  }
};

const fillNumber = () => {
  cardNumberElement.textContent = cardholderNumberInputElement.value;
  if (cardholderNumberInputElement.value === '') {
    cardNumberElement.textContent = '0000 0000 0000 0000';
  }
};

const fillExpDateMonth = () => {
  cardExpDateMMElement.textContent = cardholderExpDateMMInputElement.value;
  if (cardholderExpDateMMInputElement.value === '') {
    cardExpDateMMElement.textContent = '00';
  }
};

const fillExpDateYear = () => {
  cardExpDateYYElement.textContent = cardholderExpDateYYInputElement.value;
  if (cardholderExpDateYYInputElement.value === '') {
    cardExpDateYYElement.textContent = '00';
  }
};

const fillCvc = () => {
  cardCvcElement.textContent = cardholderCvcInputElement.value;
  if (cardholderCvcInputElement.value === '') {
    cardCvcElement.textContent = '000';
  }
};

cardholderNameInputElement.addEventListener('input', fillName);
cardholderNumberInputElement.addEventListener('input', fillNumber);
cardholderExpDateMMInputElement.addEventListener('input', fillExpDateMonth);
cardholderExpDateYYInputElement.addEventListener('input', fillExpDateYear);
cardholderCvcInputElement.addEventListener('input', fillCvc);

// Validaciones

const showError = (index, message) => {
  errorElements[index].textContent = message;
};

const clearError = index => {
  errorElements[index].textContent = '';
};

const validateInputs = () => {
  // variable para comprobar si los inputs son válidos
  let isValid = true;

  // Validar nombre
  if (cardholderNameInputElement.value.length === 0) {
    showError(0, "Can't be blank");
    isValid = false;
  } else {
    clearError(0);
  }

  // Validar número de tarjeta
  if (cardholderNumberInputElement.value.length === 0) {
    showError(1, "Can't be blank");
    isValid = false;
  } else if (cardholderNumberInputElement.value.length !== 16) {
    showError(1, 'Number is too short');
    isValid = false;
  } else {
    clearError(1);
  }

  // Validar fecha de expiración
  // MM
  if (cardholderExpDateMMInputElement.value.length === 0) {
    showError(2, "Can't be blank");
    isValid = false;
  } else {
    clearError(2);
  }

  // YY
  if (cardholderExpDateYYInputElement.value.length === 0) {
    showError(2, "Can't be blank");
    isValid = false;
  } else {
    clearError(2);
  }

  // Validar CVC
  if (cardholderCvcInputElement.value.length === 0) {
    showError(3, "Can't be blank");
    isValid = false;
  } else if (cardholderCvcInputElement.value.length !== 3) {
    showError(3, 'Number is too short');
    isValid = false;
  } else {
    clearError(3);
  }

  // si todos los campos son válidos
  return isValid;
};

formElement.addEventListener('submit', event => {
  event.preventDefault();
  const isValid = validateInputs();

  // si la inf está bien
  if (isValid) {
    formElement.classList.add('hidden');
    confirmationMessageElement.classList.remove('hidden');
  }
});

// IMPRIMIR ERRORES

// const defaultValues = {
//   name: 'JANE APPLESEED',
//   number: '0000 0000 0000 0000',
//   month: '00',
//   year: '00',
//   cvc: '000'
// };

// const writeInCard = event => {
//   const textCard = document.getElementById(`card-${event.target.id}`);
//   const onlyNumbers = '0123456789';
//   if (event.target.id === 'name') {
//     const value = event.target.value;
//     let isCorrect = true;
//     for (const letter of value) {
//       if (onlyNumbers.includes(letter)) {
//         isCorrect = false;
//       }
//     }
//   }
// };

// formElement.addEventListener('input', writeInCard);
