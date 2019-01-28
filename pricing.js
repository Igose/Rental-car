function calculatePrice()

{

var subTotal=0.0;

var kmPrice=0.50;

var numberOfKm=Number(document.getElementById("km").value);

var duration=Number(document.getElementById("duration").value);

var carType=Number(document.getElementById("carType").value);

// calculate the price based on km * duration * type

subTotal+=parseInt((numberOfKm*kmPrice)*carType) *duration;

document.getElementById('price').innerHTML=" $"+subTotal.toFixed(2);
}