
function mover() {
    var hbg = document.getElementsByClassName('nav')[0];
    var hfc = document.querySelectorAll('.hfc');
    hbg.style.backgroundColor = "#ffffff";
    hbg.style.borderBottom = '1px solid #212529';    
    document.querySelector('.line').style.backgroundColor = "#212529";

    // var alist = document.querySelector('a');
    var i = 0;
    while (i < hfc.length) {
        hfc[i].style.color = "#212529";
        i = i + 1;
    }
}
function mout() {
    var hbg = document.getElementsByClassName('nav')[0];
    var hfc = document.querySelectorAll('.hfc');
    hbg.style.backgroundColor = "transparent"
    hbg.style.borderBottom = '1px solid #ffffff';
    document.querySelector('.line').style.backgroundColor = "#ffffff";

    var i = 0;
    while (i < hfc.length) {
        hfc[i].style.color = "#ffffff";
        i = i + 1;
    }

}

$(document).ready(function () {
 $('a').mouseenter(function () {
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

$(window).scroll(function() {
    console.log('스크롤의 위치 : ' + $(this).scrollTop());
    console.log('타겟의 위치 : ' + $('.nav').offset().top);
    console.log($(this).scrollTop() > 660);
    
    if($(this).scrollTop() >= 660) {
        $('.nav').css('background-color', '#212529');
        $('.hfc').css('color', '#ffffff');
    }; 
    // else {
    //     $('.nav').css('background-color', 'transparent');
    //     $('.hfc').css('color', '#212529');
    // };
    // console.log($(this).scrollTop() >= $('.section').eq(2).offset().top);
    // if($(this).scrollTop() >= $('.section').eq(2).offset().top - 200) {
    //     myAni.play();
    // } else {
    //     myAni.reverse();					
    // }
});

