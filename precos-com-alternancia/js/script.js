var checkbox = document.querySelector('#switch');
var articles = document.querySelectorAll('article');

function checkChecked(){
if (checkbox.checked) {
    document.querySelector('#basic').innerHTML = `<span>&dollar;</span>19.99`;
    document.querySelector('#professional').innerHTML = `<span>&dollar;</span>24.99`;
    document.querySelector('#master').innerHTML = `<span>&dollar;</span>39.99`;
} else {
    document.querySelector('#basic').innerHTML = `<span>&dollar;</span>199.99`;
    document.querySelector('#professional').innerHTML = `<span>&dollar;</span>249.99`;
    document.querySelector('#master').innerHTML = `<span>&dollar;</span>399.99`;
}
}