function newAdvice() {
    location.reload();
}
$.ajax({
    url: 'https://api.adviceslip.com/advice',
    dataType: 'json',
    success: function (data) {
        let idAdvice = document.querySelector('.title');
        let idText = document.createTextNode(`Advice # ${data.slip.id}`);
        idAdvice.appendChild(idText);

        let advice = document.querySelector('.advice');
        let getAdvice = document.createTextNode(`"${data.slip.advice}"`);
        advice.appendChild(getAdvice);
    }
});
