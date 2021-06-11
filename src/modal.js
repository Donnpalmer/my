let popup = document.getElementById('mypopup'),
    popupToggle = document.getElementById('myBtn'),
    popupToggle2 = document.getElementById('myBtn2'),
    popupToggle3 = document.getElementById('myBtn3'),
    popupToggle4 = document.getElementById('myBtn4'),
    popupToggle5 = document.getElementById('myBtn5'),
    popupToggle6 = document.getElementById('myBtn6'),
    popupClose = document.querySelector('.windows_close');


    popupToggle.onclick = function() {
        popup.style.display="block";
    };
    popupToggle2.onclick = function() {
        popup.style.display="block";
    };
    popupToggle3.onclick = function() {
        popup.style.display="block";
    };
    popupToggle4.onclick = function() {
        popup.style.display="block";
    };
    popupToggle5.onclick = function() {
        popup.style.display="block";
    };
    popupToggle6.onclick = function() {
        popup.style.display="block";
    };

    popupClose.onclick = function () {
        popup.style.display="none";
    };

let sert = document.querySelector('.big_modal');
    sert2 = document.querySelector('.big_modal2');
    sert3 = document.querySelector('.big_modal3');
    sert4 = document.querySelector('.big_modal4');
    sertDens = document.querySelector('.tab1');
    sertDens2 = document.querySelector('.tab2');
    sertDens3 = document.querySelector('.tab3');
    sertDens4 = document.querySelector('.tab4');
    
    

    sertDens.onclick = function () {
        sert.style.display="block";
        sert2.style.display="none";
        sert3.style.display="none";
        sert4.style.display="none";
    };

    sertDens2.onclick = function () {
        sert2.style.display="block";
        sert.style.display="none";
        sert3.style.display="none";
        sert4.style.display="none";
    };

    sertDens3.onclick = function () {
        sert3.style.display="block";
        sert.style.display="none";
        sert2.style.display="none";
        sert4.style.display="none";
    };

    sertDens4.onclick = function () {
        sert4.style.display="block";
        sert.style.display="none";
        sert2.style.display="none";
        sert3.style.display="none";
    };



