var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupbox.style.display = "block"
    popupoverlay.style.display = "block"
})

var cancelbutton = document.getElementById("cancel-popup")

cancelbutton.addEventListener("click",function(event){

    event.preventDefault();
   popupbox.style.display = "none"
   popupoverlay.style.display = "none"
})

var container = document.getElementById("container")
var addbook = document.getElementById("add")
var bookname =document.getElementById("book-name")
var authorname = document.getElementById("author-name")
var descrption = document.getElementById("book-description")

addbook.addEventListener("click",function(event){

    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${bookname.value}</h2>
    <h5>${authorname.value}</h5>
    <p>${descrption.value}</p>`

    container.append(div);

    event.preventDefault();
    popupbox.style.display = "none"
    popupoverlay.style.display = "none"
})

var deletebook = document.getElementById("delete-book")

deletebook.addEventListener("click",function(event){
    event.target.parentElement.remove()
})
