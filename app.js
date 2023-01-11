//DATE
let date = new Date();

//days
var dd = document.getElementById('day');
var getdate = date.getDate();
dd.innerText = getdate;

if(getdate < 10){
     dd = document.getElementById('day').innerText = "0"+getdate;
}

//months
var months = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sept','Oct','Nov','Dec'];
var mm = document.getElementById('month');
var currMonth = months[date.getMonth()];
mm.innerText = currMonth;

//year
var yy = document.getElementById('year');
year.innerText = date.getUTCFullYear();
//__________________________________________
//Products
var products = document.getElementById('products');
var prices = document.getElementById('price');
var price;

var priceArr = [7000,13000,25000,15000,28000]

function calc(price){
     if(products.value == 'tshirt'){
          // console.log(priceArr[0]);
          prices.value = priceArr[0];
          price = prices.value;
          // console.log(price);
     }
     if(products.value == 'jeans'){
          prices.value = priceArr[1];
          price = prices.value;
     }
     if(products.value == 'shirt'){
          prices.value = priceArr[2];
          price = prices.value;
     }
     if(products.value == 'skirt'){
          prices.value = priceArr[3];
          price = prices.value;
     }
     if(products.value == 'pants'){
          prices.value = priceArr[4];
          price = prices.value;
     }
}

products.addEventListener('change',function(){
    calc(price)
});
// console.log(prices.value)

//add and sub
var num = document.querySelector('.num');
var i = 0;
var sub = document.getElementById('sub').addEventListener('click',function(e){
     e.preventDefault();
     i--;
     num.value = i;    
     // console.log(i);

     if(i < 0){
          // console.log(0)
          num.value = 0;
     }
     // console.log(parseInt(num.value));

});

var add = document.getElementById('add').addEventListener('click',function(e){
     e.preventDefault();
     i++;
     // console.log(i);
     num.value = i;
     // console.log(parseInt(num.value));
});

// console.log(num.value)

//totalPrice
var subtotal = document.getElementById('subtotal');

