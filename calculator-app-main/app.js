`use strict`;
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByTagName('button'));
buttons.map((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'RESET':
        display.value = '';
        break;
      case 'DEL':
        if (display.value) {
          display.value = display.value.slice(0, -1);
        }
        break;
      case '=':
        try {
          display.value = eval(display.value);
        } catch (e) {
          display.value = 'Error!';
        }
        break;
      default:
        display.value += e.target.innerText;
    }
  });
});
const html = document.querySelector('html');
function lightMOde() {
  html.classList.toggle('light');
  html.classList.remove('dark');
}
function defaultMode() {
  html.classList.remove('light');
  html.classList.remove('dark');
}
function darkMode() {
  html.classList.toggle('dark');
  html.classList.remove('light');
}
