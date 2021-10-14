
//Definimos variables
let bill = 0;
let tip = 0;
let people = 0;

//Funcion que permite determinar si es un dato es un número y es finito
function isNumeric(num){
    //Si es número y es finito retorna TRUE | Si no es un número y es infinito retorna FALSE
    return (!isNaN(num) && isFinite(num))
}

function tipPerPerson(){
    const decimalTip = tip/100;
    const totalTip = bill * decimalTip;
    if(isNumeric((totalTip / people).toFixed(2)) ){
    totalBillPerPerson(totalTip);
    return document.getElementById('tip_amount').innerHTML = `$${(totalTip/people).toFixed(2)}`;
    }
}

const tipInput = (event) => {
    //Vamos a asignar la clase que permite cambiar de color a una variable
    let tipNode = document.getElementsByClassName('active_input')[0];
    if(tipNode !== undefined){
        tipNode.classList.remove('active_input');
    }
    event.target.className += " active_input";

    tip = Number(event.target.value);
    tipPerPerson();
}

const peopleInput = (event) => {
    people = Number(event.target.value);
    // Check for valid Input
    if(people <= 0){
        document.getElementById("error-people").style.display = "block";
    }else{
        document.getElementById("error-people").style.display = "none";
        tipPerPerson();
    }
    
}


const totalBillPerPerson = (totalTip) => {
    //Aqui obtenemos el pago por persona
    const totalPerPerson = ((bill + totalTip) / people).toFixed(2);
    //Aqui seleccionamos Total / person
    const amountPerPerson = document.getElementById("total");

    //if(isNumeric(totalPerPerson)){
        return amountPerPerson.innerHTML = `$${totalPerPerson}`;
    //}
}

//==============================================================
const billInput = () => {
    bill = Number(document.getElementById("bill").value);
    // Check For Valid Input 
    if(bill <= 0){
        document.getElementById("error-bill").style.display = "block";
    }else{
        document.getElementById("error-bill").style.display = "none";
        tipPerPerson();
    }
    
}
//==============================================================


let resetAll = () =>{

    document.getElementById('tip_amount').innerHTML = '$0.00';
    document.getElementById('total').innerHTML = '$0.00';

    const inputNodeList = document.getElementsByTagName("INPUT");
    for (const node of inputNodeList) {
        node.value =''     
    }

    const node = document.getElementsByClassName("active_input")[0];
    if(node !== undefined){
        node.classList.remove("active_input");
    }

}























// === Código que permite añadir las clases dependiendo de que botón fue seleccionado ===
/* document.addEventListener('DOMContentLoaded', () =>{
    let btns = document.querySelectorAll('.btn_tip');
    btns.forEach(function(btn){
        btn.addEventListener('click',() => {
            btns.forEach(b => b.classList.remove('active_input'));
            btns.forEach(b => b.value = "");
            btn.classList.add('active_input');
            console.log(parseFloat(btn.innerHTML)/100);
        })
    })
}) */




