// 모달 창을 열기 위한 요소 할당
let open = document.querySelector(".modal-open");
// 모달 창에 해당하는 요소 할당
let modal = document.querySelector(".modal");
// 모달 창을 닫기 위한 요소 할당
let close = document.querySelector(".close-modal");

/*
open.onclick = function () { 
    modal.classList.add("active");
}
*/

// 위(Ln 9~11)의 코드는 아래(Ln 17~20)의 코드와 같다.

// 모달 창을 열기 위한 클릭 이벤트 등록
open.addEventListener("click", function () {
    // 모달 창 요소에 active 클래스를 추가하여 보이게 하기
    modalPage.classList.add("active");
});

// 마찬가지로 모달 창을 닫기 위한 클릭 이벤트 등록
close.onclick = function () {
    // 모달 창 요소의 active 클래스를 제거해서 안 보이게 하기
    modal.classList.remove("active");
}