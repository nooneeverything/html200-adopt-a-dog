function info(name, breed, cost){
  alert(name + " - " + breed + " - " + cost);
}


let priceNow = 0;  
let price = '';

function total(price){
  priceNow = price + priceNow;
  alert(priceNow);
}
