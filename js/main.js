var readout = document.querySelector('#readout');
var digits = document.querySelectorAll('.digit');
var operators = document.querySelectorAll('.operator');
var currentOperator = '';
var equalsBtn = document.querySelector('#equals');

// for each digit, do a function
digits.forEach(function(btn) {
  // add an event listener to each function
  btn.addEventListener('click', function() {
    // 'this' is the button being clicked...
    readout.innerText += this.innerText;
  });
});

operators.forEach(function(operator) {
  operator.addEventListener('click', function(){
    // set current operator
    if(this.innerText === 'x'){
      currentOperator = '*';
    }
    else {
      currentOperator = this.innerText;
    }
    readout.innerText += currentOperator;
  })
})

equalsBtn.addEventListener('click', function(){
  readout.innerText = eval(readout.innerText);
});