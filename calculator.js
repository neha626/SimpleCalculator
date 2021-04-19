// function getHistory(){
//     return document.getElementById("history-value").innerText;
// }
// function printHistory(num){
//      document.getElementById("history-value").innerText=num;
// }
// function getOutput(){
//     return document.getElementById("output-value").innerText;
// }
// function printOutput(num){
//     document.getElementById("output-value").innerText=getFormattedNumber(num);
// }
// function getFormattedNumber(num){
//     var n= Number(num);
//     var value = n.toLocaleString("en");
//     return value;
// }
/*
function clk(val){
    document.getElementById("screen").valuedocument.getElementById("screen").value+val;
}

function clrdisp(){
    document.getElementById("screen").value=""
}

function eql(){
    var text=document.getElementById("screen").value;
    var result=eval(text);
    document.getElementById("screen").value=result;
}


var exp = '', number,decimal,equal,operator,allowSR =true;
var textview = document.forms['textview'];

function insertNum(num){
    if(equal){
        exp = num;
        number=true;
        equal=false;
    }
    else{
        exp = textview.value + num;
        textview.value=exp;
        number=true;
    }

    if(operator) decimal = false
}
function insertOp(op){
    textview.value=exp + op;
    operator=true;
    equal=false;
    allowSR=false;
}

function insertDec(){
    if (number && !decimal){
        textview.value=exp +',';
        decimal=true;
        operator=false;
    }
}*/

function valuecal(result){
    calculatorForm.evalresult.value = calculatorForm.evalresult.value + result;
}
