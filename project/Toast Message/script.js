const toastBox = document.getElementById("toastBox");

const SuccesMsg = '<i class="fa-solid fa-circle-check"></i> Succes fully Submited';
const ErrorMsg = '<i class="fa-solid fa-circle-xmark"></i> Failed To Submit';
const InvalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid Input';




function showToast(msg){
var toast = document.createElement("div");
toast.classList.add("Toast");
toast.innerHTML = msg;
toastBox.appendChild(toast);

if(msg.includes('Failed To Submit')){
    toast.classList.add("error");
}
else if(msg.includes('Invalid Input')){
    toast.classList.add("invalid");
}

setTimeout(()=>{
    toast.remove()
},6000);
}