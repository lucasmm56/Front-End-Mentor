document.querySelector('#conta').focus();

function getValueConta(){
    var valueOfCount = document.querySelector('#conta').value;
    return valueOfCount;
}

function getNumberOfPeoples(){
    let peoples = document.querySelector('#peoples').value;
    return peoples;
}

function calculeAndReturn(value){
    let valorConta = parseFloat(this.getValueConta());
    let gorjeta = valorConta * value / 100 ;
    let valorFinal = gorjeta + valorConta; 
    
    if(!validatePeoples()){
        return false;
    }
    
    let gorjetaPessoas = gorjeta /  this.getNumberOfPeoples();
    let valorPessoa = valorFinal / this.getNumberOfPeoples();

    if(!validateIfIsNumber(gorjetaPessoas) || !validateIfIsNumber(valorPessoa)){
        return false;
    }
    insertResults(formatarValor(gorjetaPessoas), formatarValor(valorPessoa));
    console.log(`O valor final é ${valorFinal}, o valor por pessoa é ${valorPessoa} a gorjeta pelo numero de pessoas é ${gorjetaPessoas.toFixed(2)}`);
}

function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
  
function validatePeoples(){
    if(!this.getNumberOfPeoples()){   
        let span = document.querySelector('#span_validate');
        let input = document.querySelector('#peoples');
        span.style.display = 'block';
        input.style.border = '2px solid red';
        return false;
    }else{
        return true;
    }
}

function insertResults(gorjeta_pessoa, valor_pessoa){
    document.querySelector('#gorjeta_person').innerHTML = `$${gorjeta_pessoa}`;
    document.querySelector('#total_people').innerHTML = `$${valor_pessoa}`;
}

function sendPorcent(value){
    switch(value){
        case 5 :
            calculeAndReturn(value);
        break;
        case 10 :
            calculeAndReturn(value);
        break;
        case 15 :
            calculeAndReturn(value);
        break;
        case 25 :
            calculeAndReturn(value);
        break;
        case 50 :
            calculeAndReturn(value);
        break;
        default :
            let valor = document.querySelector('#custom').value;
            calculeAndReturn(valor);
        break;
    }
}

function validateIfIsNumber(value){
    if(isNaN(value)){
        alert('Valor não aceito, digite um numero válido');
        return false;
    }else{
        return true;
    }
}

function reset(){
    location.reload();
}
