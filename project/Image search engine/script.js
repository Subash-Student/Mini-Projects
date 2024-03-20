const generate = document.getElementById("generate");
const error = document.querySelector(".error");

  async function generateImg(){

    let input = document.getElementById("UserInput").value;

    const ApiKey = 'FBb4j7jnblWca8SbXIk98QreUryIQAp49RdMN2pOWGo';
   const ApiUrl = "https://api.unsplash.com/search/photos?page=1&query=";
    
 if(input == ''){
  error.style.display = "block";
 }
 else{
try{

  const response = await fetch(ApiUrl + input + `&client_id=` + ApiKey);
  var data = await response.json();
  let images = data.results;
  console.log(images);

 let result = document.querySelector(".result");
 result.innerHTML = '';

 images.forEach(image => {

  let imageItem = document.createElement("div");
  imageItem.classList.add("imgItem")

  let img = document.createElement("img");
  img.src = image.urls.regular;
  
  imageItem.appendChild(img);

  result.appendChild(imageItem);
  
 });

 }
 catch{
  console.log("Eroor In Fetching The Data")
 }
}
 setTimeout(() =>{
  error.style.display = "none";
 },2000);
    
  
  }
