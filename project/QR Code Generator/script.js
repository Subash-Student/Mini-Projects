const generate = document.getElementById("Generate");
const input = document.getElementById("input");
const image = document.getElementById("image");
const imageBox = document.getElementById("Qimg");

generate.addEventListener("click",function(){
   if(input.value.length >0){
    image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ input.value ;
    imageBox.classList.add("show-img");
   }
   else{
     input.classList.add("element-to-shake");
   }
})