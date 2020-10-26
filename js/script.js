window.addEventListener('load', start);

function start() {
  addEventChange('#r_red', '#e_red');
  addEventChange('#r_green', '#e_green');
  addEventChange('#r_blue', '#e_blue');
}

function addEventChange(id, target) {
  let range = document.querySelector(id);
  range.addEventListener(
    'input',
    function (e) {
      changeRange(e, target);
    },
    false
  );
}

function changeRange(e, t) {
  let target = document.querySelector(t);
  target.value = e.target.value;
  alterColorSquere();
}

function alterColorSquere() {
  let red = document.querySelector('#e_red');
  let green = document.querySelector('#e_green');
  let blue = document.querySelector('#e_blue');
  let square = document.querySelector('.square');
  square.style.backgroundColor =
    'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
}
