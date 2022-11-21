
window.onload = function () {


    // 움직이는 글
    const $text = document.querySelector(".m_text");

    // 글자 모음
    const letters = [
        "[M]eeting",
        "[I]ncentive",
        "[C]onvention",
        "[E]xhibition"
    ];

    // 글자 입력 속도
    const speed = 100;
    let i = 0;

    // 타이핑 효과
    const typing = async () => {
        const letter = letters[i].split("");

        while (letter.length) {
            await wait(speed);
            $text.innerHTML += letter.shift();
        }

        // 잠시 대기
        await wait(800);

        // 지우는 효과
        remove();
    }

    // 글자 지우는 효과
    const remove = async () => {
        const letter = letters[i].split("");

        while (letter.length) {
            await wait(speed);

            letter.pop();
            $text.innerHTML = letter.join("");
        }

        // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
        i = !letters[i + 1] ? 0 : i + 1;
        typing();
    }

    // 딜레이 기능 ( 마이크로초 )
    function wait(ms) {
        return new Promise(res => setTimeout(res, ms))
    }

    // 초기 실행
    setTimeout(typing, 1500);

    const a = document.querySelector('a');
    a.addEventListener('mouseover', ()=> {
        console.log('콘솔로그 실행');
 });
};

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

function fmover(self) {           
    self.style.borderBottom = '2px solid #212529';
}

function fmout(self) {           
    self.style.borderBottom = '2px solid transparent';
}   

