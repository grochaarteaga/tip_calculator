//Calculate the tip
function calculate_tip() {
  var bill_amount = document.getElementById("bill_amount").value;
  var service_quality = document.getElementById("service_quality").value;
  var number_people = document.getElementById("number_people").value;
  var tip = Number(bill_amount) * Number(service_quality) / Number(number_people);
  
  //Modify HTML
  document.getElementById("demo").innerHTML = tip;


}
