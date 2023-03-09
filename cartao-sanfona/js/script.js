var spans = document.querySelectorAll('span');
var images = document.querySelectorAll('.arrow');
var li = document.querySelectorAll('li');

function expandir(value){
    switch(value.value){
        case 0:
        alterCss(value.value);
        break;
        case 1:
        alterCss(value.value);
        break;
        case 2:
        alterCss(value.value);
        break;
        case 3:
        alterCss(value.value);
        break;
        case 4:
        alterCss(value.value);
        break;
    }
}

function alterCss(value){
    if(spans[value].style.display === 'block'){
        spans[value].style.display = 'none';
        images[value].style.transform = 'rotate(0deg)';
        li[value].style.fontWeight = 'normal';
    }else{
        spans[value].style.display = 'block';
        images[value].style.transform = 'rotate(180deg)';
        li[value].style.fontWeight = 'bold';

    }
}

