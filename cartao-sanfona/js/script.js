var allLi = document.querySelectorAll('li');
var spans = document.querySelectorAll('span');
var boleano = false;

allLi.addEventListener("click", openSpan)

function openSpan() {
    for (let i = 0; i <= allLi.length; i++) {
        var li = document.querySelector('li').value;
        switch (li) {
            case 0:
                if (spans[li].style.display === 'none') {
                    // allLi[li].style.borderBottom = '1 px solid red';
                    spans[li].style.display = 'block';
                } else {
                    spans[li].style.display = 'none';
                };
                break;
            case 1:
                alterCss(1);
                break;
        }
    }
}

function alterCss(li) {
    if (spans[li].style.display === 'none') {
        // allLi[li].style.borderBottom = '1 px solid red';
        spans[li].style.display = 'block';
    } else {
        spans[li].style.display = 'none';
    };
}

if (element.style.display === "none") {
    element.style.display = "block";
} else {
    element.style.display = "none";
}
