function getInputValue(){
  // Selecting the input element and get its value 
  var one = parseInt(document.getElementById("one").value);
  var two = parseInt(document.getElementById("two").value);
  var total;

  if(document.getElementById('st').checked){
    total = (one + two);
    // alert(one + ' + ' + two + ' = ' + (one + two));

  }else if(document.getElementById('nd').checked){
    total = (one - two);
    // alert(one + ' - ' + two + ' = ' + (one - two));

  }else if(document.getElementById('rd').checked){
    total = (one * two);
    // alert(one + ' * ' + two + ' = ' + (one * two));

  }else if(document.getElementById('th').checked){
    total = (one / two);
    // alert(one + ' / ' + two + ' = ' + (one / two));
  }

  // Displaying the value
  document.getElementById('results').innerHTML = total;
}

