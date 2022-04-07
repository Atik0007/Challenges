'use strict';
function displayRadioValue() {
  let ele = document.getElementsByName('myNumber');
  let i;
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)
      document.getElementById('result').innerHTML = ele[i].value;
  }
}

function myFunction() {
  document.getElementById('secend').style.display = 'block';
  let x = document.getElementById('fisrt');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
