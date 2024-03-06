let userDate= document.getElementById("user-input");
userDate.max = new Date().toISOString().split("T")[0];

function calculateAge(){
    let birthday = new Date(userDate.value);

    let d1 = birthday.getDate();
    let m1 = birthday.getMonth() + 1;
    let y1 = birthday.getFullYear();

   let today = new Date();


   let d2 = today.getDate();
   let m2 = today.getMonth() + 1;
   let y2 = today.getFullYear();


   let y3 =y2-y1;

   let m3;
   if(m2 >= m1){
     m3 = m2-m1;
   }
   else{
    y3--;
    m3 = 12 + m2 - m1;
   }

let d3;   
if(d2>=d1){
    d3 = d2 - d1;
}
else{
    m3--;
    d3 = getDayesInMonth(y1,m1) + d2 - d1;
}

if(m3 < 0){
   m3 = 11;
   y3--;
}


result.innerHTML = `You Are ${y3} Years, ${m3} Months, ${d3} Days Old.... `

}

function getDayesInMonth(year,month){
    return new Date(year, month, 0).getDate();
}

const result = document.getElementById("result");

