const allBtn = document.getElementsByClassName("seat");
for(let btn of allBtn){
  btn.addEventListener("click", function(e){
    // console.log(e)
    btn.classList.remove('bg-slate-200')
    btn.classList.add('bg-green-300')
    const btnText = btn.innerText
    console.log(btnText)
    // console.log(btnText)
    // const setText = document.createElement('p')
    // setText.innerText=btnText;
    // document.getElementById('sectionOfSeat').appendChild(setText)
    // // 
    // const economoyInputText = document.getElementById('economoyText');
    // economoyInputText.classList.remove('hidden')
    // economoyInputText.classList.add('Economoy')
    // const inputText = economoyInputText.innerText;
    
    // const setInputText = document.createElement('p')
    // setInputText.innerText.value = economoyInputText;
    // document.getElementById('economoyText').appendChild(setInputText);

    // const inputPriceText = document.getElementById('price');
    // inputPriceText.classList.remove('hidden')
    // inputPriceText.classList.add('550')
    // const inputPrice = inputPriceText.innerText;

    // const setInputPrice = document.createElement('p')
    // setInputPrice.innerText.value=inputPriceText;
    // document.getElementById('price').appendChild(setInputPrice)

  const container = document.getElementById("container");
  const div = document.createElement("div");
   div.classList.add("flex");

  const h1 = document.createElement("h1");
  h1.innerText = btnText;
  const h2 = document.createElement("h1");
  h2.innerText = "economy";
  const h3 = document.createElement("h1");
  h3.innerText = "550";

  
  div.appendChild(h1);
  div.appendChild(h2);
  div.appendChild(h3);

  container.appendChild(div);


    // const seatNumberInput = document.getElementById('seatNumberSerial');
    // const seatNumber= seatNumberInput.classList.add('1')
    // const seatNumberPlus = seatNumber
  })
  
}


 
//  checkInputLenght(){
//   const phoneCallInput=document.getElementById('phoneNumber').value;
//   const nextBtnInput=document.getElementById('nextBtn');

//   if(phoneCallInput.length === 11){
//     nextBtnInput.disabled = false;
//   }
// }

  
// const div = document.getElementsByClassName("hello");
// console.log(div)
// const seatBtn=document.getElementsByClassName("seat");
// console.log(seatBtn)