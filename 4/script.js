const loginButton = document.querySelector('#login a');
const loginModal = document.querySelector('#login-modal');
const closeModalButton = document.querySelector('.modal-content button[type="button"]');
const form = document.querySelector('.modal-content form');

loginButton.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  
  // TODO: Validate username and password
  
  alert(`Logged in as ${username}`);
  
  loginModal.style.display = 'none';
});