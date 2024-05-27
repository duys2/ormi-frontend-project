/* ---------------- 다운로드 버튼 영역 ---------------- */
const downloadBtns = document.querySelectorAll('.download-btn'); // 배열로 넘어옴

// 각 버튼에 이벤트 리스너를 추가하여 버튼을 누르면 이미지를 다운로드
downloadBtns.forEach((button, index) => {
    button.addEventListener("click", () => {
        let imageUrl, imageName;

        // 각 버튼에 해당하는 이미지 URL, 이름 설정
        if (index == 0) {
            imageUrl = "../img/logo.png";
            imageName = "logo.png"
        }
        else {
            imageUrl = "../img/intro_bg.png";
            imageName = "intro_bg.png"
        }

        // 다운을 위해 a 태그 삽입 후 삭제
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = imageName; // 다운로드될 파일 이름 설정
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

/* ---------------- 추가 이미지 랜더링 영역 ---------------- */

const imgList = document.querySelector('.img-wrap');
const moreBtn = document.querySelector('.more-btn');

let pageToPatch = 3;

moreBtn.addEventListener('click', () => { fetchImages(pageToPatch += 1) }); // 그래서 이 익명 함수가 실행되고 그 뒤에 fetchImages()가 실행됨

async function fetchImages(page) {
    try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=12`); // 계속 다른 사진이 나오게 하려면 page=1의 값을 1이 아닌 2, 3, 4 이렇게 올려줘야 함

        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }

        const datas = await response.json();
        console.log(datas);
        makeImageList(datas);

    } catch (error) {
        console.error(error);
    }
}

function makeImageList(datas) {

    datas.forEach((data) => {
        imgList.insertAdjacentHTML('beforeend', `<img src="${data.download_url}" alt="mid area img">`); // innerHTML() 보다는 이게 더 성능이 좋음
    });
}

/* ---------------- 지도 구현 영역 ---------------- */

const mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.5798, 126.9771), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

// 지도를 표시할 div와 지도 옵션으로 지도 생성
const map = new kakao.maps.Map(mapContainer, mapOption);

/* ---------------- 모달 랜더링 영역 ---------------- */

// 모달 창을 열기 위한 요소 할당
const open = document.querySelector(".modal-open");
// 모달 창에 해당하는 요소 할당
const modal = document.querySelector(".modal");
// 모달 창을 닫기 위한 요소 할당
const close = document.querySelector(".close-modal");

/*
open.onclick = function () { 
    modal.classList.add("active");
}
*/

// 위(Ln 9~11)의 코드는 아래(Ln 17~20)의 코드와 같다.

// 모달 창을 열기 위한 클릭 이벤트 등록
open.addEventListener("click", function () {
    // 모달 창 요소에 active 클래스를 추가하여 보이게 하기
    modal.classList.add("active");
});

/* 위 함수를 화살표 함수로
open.addEventListener("click", () => {
    modal.classList.add("active");
});
*/

// 마찬가지로 모달 창을 닫기 위한 클릭 이벤트 등록
close.onclick = function () {
    // 모달 창 요소의 active 클래스를 제거해서 안 보이게 하기
    modal.classList.remove("active");
}