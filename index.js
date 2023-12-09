// Mobile menu (Dynamic HTML)
const openMenu = document.querySelector('.nav-Button');
const closeMenu = document.querySelector('.nav-Button-Close');
const menu = document.querySelector('.mobile-Menu');
const menuLinks = document.querySelectorAll('.nav-Menu-List li');

closeMenu.addEventListener('click', () => {
  menu.style.top = '-150%';
});

openMenu.addEventListener('click', () => {
  menu.style.top = '0%';
});

menuLinks.forEach((li) => {
  li.addEventListener('click', () => {
    menu.style.top = '-150%';
  });
});

// Form Validation
const footerForm = document.querySelector('.footer-form');
const emailInput = footerForm.querySelector('#email');
const errorMessage = footerForm.querySelector('button + span');

function err(message) {
  errorMessage.textContent = message;
  errorMessage.setAttribute(
    'style',
    'color: red; font-size: 15px;font-family: "Inter", sans-serif; ',
  );
  emailInput.setAttribute(
    'style',
    'border-bottom: 2px solid red; background: rgba(255, 0, 0, 0.1);',
  );
  return false;
}

function succ() {
  errorMessage.textContent = '';
  emailInput.setAttribute('style', ' border-bottom: 1px solid #DBD8D7;background: white;');
  return true;
}

function validateLowerCase(input, errorMsg) {
  if (input.value.trim() === '') {
    return err('Please input required details');
  }
  if (input.value !== input.value.toLowerCase()) {
    return err(errorMsg);
  }
  return succ();
}

footerForm.addEventListener('submit', (event) => {
  if (!validateLowerCase(emailInput, 'Please make sure email field is lower case.')) {
    event.preventDefault();
  }
});

// Local Storage
// using the same global variable for form defined in form validation called footer form.

const userName = footerForm.querySelector('#name');
const userEmail = footerForm.querySelector('#email');
const userMessage = footerForm.querySelector('#msg');

function populateStorage() {
  localStorage.setItem(
    'userDet',
    JSON.stringify({
      username: userName.value,
      useremail: userEmail.value,
      usermsg: userMessage.value,
    }),
  );
}

footerForm.addEventListener('focusout', () => {
  populateStorage();
});

const userDet = JSON.parse(localStorage.getItem('userDet'));
userName.value = userDet.username;
userEmail.value = userDet.useremail;
userMessage.value = userDet.usermsg;
