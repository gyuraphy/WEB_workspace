
function mover() {
    var hbg = document.getElementsByClassName('nav')[0];
    var hfc = document.querySelectorAll('.hfc');
    hbg.style.backgroundColor = "#212529";
    hbg.style.borderBottom = '1px solid #ffffff';
    
    // var alist = document.querySelector('a');
    var i = 0;
    while (i < hfc.length) {
        hfc[i].style.color = "#ffffff";
        i = i + 1;
    }
}
function mout() {
    var hbg = document.getElementsByClassName('nav')[0];
    var hfc = document.querySelectorAll('.hfc');
    hbg.style.backgroundColor = "#ffffff";
    hbg.style.borderBottom = '1px solid #212529';
    

    var i = 0;
    while (i < hfc.length) {
        hfc[i].style.color = "#212529";
        i = i + 1;
    }

}