function appendValues(value){
    document.getElementById('input').value += value;
}


function clearDisplay(){
    document.getElementById('input').value = '';
    
}
function calculate(){
    try{
        let expression = document.getElementById("input");
        let result = eval(expression.value);
        expression.value = result;
    }
    catch(Error){
        document.getElementById('input').value ='Error';
    }

    
}