let toggleButton = document.querySelector('.toggleBTN');
let body = document.querySelector('body');
let h1 = document.querySelector('h1');

toggleButton.addEventListener('click', function() {  /* wait for the user to click the  run this function */
  body.classList.toggle('dark-background');
  toggleButton.classList.toggle('dark-background');
  h1.classList.toggle('dark-background');
})
