document.querySelector('#invert').addEventListener('click', function(){
    let elem = document.getElementById('intro');
    let elem2 = document.getElementById('info');
    elem.classList.remove("fs-5");
    elem.classList.remove("text-muted");
    elem2.classList.remove("fs-5");
    elem2.classList.remove("text-muted");
    document.body.classList.toggle("invert");
});
