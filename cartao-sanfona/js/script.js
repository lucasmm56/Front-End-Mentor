var images = document.querySelectorAll('.arrow');
var details = document.querySelectorAll('details');

function alterCss(value, details){
    if(details[value].hasAttribute('open')){
        images[value].style.transform = 'rotate(0deg)';
    }else{
        images[value].style.transform = 'rotate(180deg)';
    }
}

function rotateImg(value){
   switch(value){
    case 0:
        alterCss(value, details);
    break;
    case 1:
        alterCss(value, details);
    break;
    case 2:
        alterCss(value, details);
    break;
    case 3:
        alterCss(value, details);
    break;
    case 4:
        alterCss(value, details);
    break;
   }
}
