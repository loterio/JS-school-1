function getInputValue(){
  // Selecting the input element and get its value 
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);
  var total;
  var sit;

  total = weight / (height * height);
  sit = imcSituation(total);

  // Displaying the value
  document.getElementById('results').innerHTML = total + ". Situation: " + sit;
}

function imcSituation(val){
  if(val < 16){
    return "Subpeso severo";
  }else if(val > 16 && val < 19.9){
    return "Subpeso";
  }else if(val > 20 && val < 24.9){
    return "Normal";
  }else if(val > 25 && val < 29.9){
    return "Sobrepeso";
  }else if(val > 30 && val < 39.9){
    return "Obeso";
  }else if(val > 40){
    return "Obeso mórbido";
  }
}
