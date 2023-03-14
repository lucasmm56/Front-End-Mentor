var divshared = document.querySelector('.otherone');
var divAside = document.querySelector('.aside');

function shared(){
    if(divAside.style.display == 'none'){
        divAside.style.display = 'block';
        divshared.style.display = 'none';
    }else{
        divAside.style.display = 'none';
        divshared.style.display = 'block';
    }
}
