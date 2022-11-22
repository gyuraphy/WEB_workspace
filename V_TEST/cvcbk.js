
function mover() {
    var hbg = document.getElementsByClassName('nav')[0];
    var hfc = document.querySelectorAll('.hfc');
    hbg.style.backgroundColor = "#212529";
    hbg.style.borderBottom = '1px solid #ffffff';
    document.querySelector('.line').style.backgroundColor = "#ffffff";

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
    document.querySelector('.line').style.backgroundColor = "#212529";

    var i = 0;
    while (i < hfc.length) {
        hfc[i].style.color = "#212529";
        i = i + 1;
    }

}

$(document).ready(function () {
 $('a').mouseover(function () {
    console.log('올림');
    $(this).not('a.logo_a').css('border-bottom', '3px solid #ffffff');    
 });
 $('a').mouseleave(function () {
    console.log('나감');
    $(this).not('a.logo_a').css('border-bottom', 'none');    
 });
});

// 스크롤 이벤트

// const [scrollPosition, setScrollPosition] = useState(0);

// const updateScroll = () => {
//     setScrollPosition(window.scrollY || document.documentElement.scrollTop);
// };

// useEffect(() => {
//     window.addEventListener('scroll', updateScroll);
//     return () => {
//         window.removeEventListener('scroll', updateScroll); //unmount시 해제되도록
//     };
// }, []);

