var readout = document.querySelector('#readout');
var digits = document.querySelectorAll('.digit');

// for each digit, do a function
digits.forEach(function(btn){
  // add an event listener to each function
  btn.addEventListener('click', function() {
    // 'this' is the button being clicked...
    readout.innerText += this.innerText;
  });
});