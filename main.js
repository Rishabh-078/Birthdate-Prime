var inputDate= document.querySelector("#input-date");
var outputDate= document.querySelector("#output-date");
var btnCheck= document.querySelector("#btn-check");
var pointer=0;


nonPrimeNumber="Your Birth Date is not a prime number."
primeNumber="Your Birth Date is not a prime number."
error="Please enter in the specified format."

btnCheck.addEventListener("click", primeCheckHandler)

function primeCheckHandler(){
    console.log("Clicked")
    var dob= inputDate.value;
    var splitDob= dob.split("/");
    console.log(splitDob[0]);
    var dateDob= splitDob[0];
    var monthDob= splitDob[1];

    if(isNaN(dateDob)||dateDob>31||monthDob>12||isNaN(monthDob)){
        outputDate.innerText=error;
      } else {
        if(dateDob==1){
          outputDate.innerText= nonPrimeNumber;
        }
        else{
          for(var i=2;i<dateDob;i++){
          if(dateDob%i==0) {
            pointer=1
          }
        }   
        if(pointer===0){
            outputDate.innerText= primeNumber;
        }else{
            outputDate.innerText= nonPrimeNumber;
        }}
}
}

