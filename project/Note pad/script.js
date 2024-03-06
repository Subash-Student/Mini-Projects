const createBtn = document.getElementById("Create-btn");
const container = document.querySelector(".container");
const notes = document.querySelector(".notes");

createBtn.addEventListener("click", function() {
    var newdiv = document.createElement("div");
    newdiv.classList.add("div");
    notes.appendChild(newdiv);

    var txtArea = document.createElement("textarea");
    txtArea.setAttribute("placeholder", "Type Your Thoughts...");
    txtArea.setAttribute("cols", "55");
    txtArea.setAttribute("rows", "8");
    txtArea.classList.add("user-note");
    newdiv.appendChild(txtArea);
    const userInput = document.querySelector(".user-note");

    var btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.classList.add("delete");
    newdiv.appendChild(btn);
    
    const dltBtn = newdiv.querySelector(".delete");
    
    btn.addEventListener("click", function(event) {
        event.target.parentElement.remove();
    });
});

userInput.value ="";



function saveData(){
    localStorage.setItem("data",userInput.value);
}
function showTask(){
    userInput.value = localStorage.getItem("data");
}

showTask();

saveData();


