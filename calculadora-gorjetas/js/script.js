function getValueConta(){
    let valor = document.querySelector('#conta').value;
    return valor;
}

function getNumberOfPeoples(){
    let peoples = document.querySelector('#peoples').value;
    return peoples;
}
function calculeAndReturn(value){

    let gorjeta = this.getValueConta() * value / 100 ;
    let valorFinal = gorjeta + parseFloat(this.getValueConta()); 

    if(!this.getNumberOfPeoples()){
        validatePeoples();
        return false;
    }

    let gorjetaPessoas = gorjeta /  this.getNumberOfPeoples();
    let valorPessoa = valorFinal/ this.getNumberOfPeoples();
    insertResults(gorjetaPessoas.toFixed(2), valorPessoa.toFixed(2));
    console.log(`O valor final é ${valorFinal}, o valor por pessoa é ${valorPessoa} a gorjeta pelo numero de pessoas é ${gorjetaPessoas.toFixed(2)}`);
}

function alterValuesNulls(){
    let gorjetaNull  = document.querySelector('#gorjeta_null');
    let resultNull = document.querySelector('#result_null');
    gorjetaNull.style.display = 'none';
    resultNull.style.display = 'none';
}

function validatePeoples(){
    if(!this.getNumberOfPeoples()){   
        let span = document.querySelector('#span_validate');
        let input = document.querySelector('#peoples');
        span.style.display = 'block';
        input.style.border = '2px solid red';
    }
}

function insertResults(gorjeta_pessoa, valor_pessoa){
    alterValuesNulls();
    let gorjetaP = document.querySelector('#gorjeta_person');
    let textNode = document.createTextNode(`$${gorjeta_pessoa}`);
    gorjetaP.appendChild(textNode);
    let totalPeople = document.querySelector('#total_people');
    let totalNode = document.createTextNode(`$${valor_pessoa}` );
    totalPeople.appendChild(totalNode);
}

function sendPorcent(value){
    if(value == 5){
        calculeAndReturn(value);
    }else if(value == 10){
        calculeAndReturn(value);
    }else if(value == 15){
        calculeAndReturn(value);
    }else if(value == 25){
        calculeAndReturn(value);
    }else if(value == 50){
       calculeAndReturn(value);
    }else{
        valor = document.querySelector('#custom').value;
        calculeAndReturn(valor);
    }

}

function reset(){
    location.reload();
}
