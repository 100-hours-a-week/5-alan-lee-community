// 1번조건 : 포기(드롭다운 화나서 못하겠다)
// 2,3,4번 조건 구현 완료

const b = document.getElementById('fix-button'); // 수정하기 클릭시
const help = document.getElementById('helptext'); // helperText
const f = document.getElementById('finished-fix'); // 수정완료 버튼
function isDuplicated(element){
    return true;
}
const x = document.getElementById('nickname');
x.addEventListener('blur',() =>{
    const inputId = x.value;
    
    if(inputId.length == 0){
        help.innerText = "*닉네임을 입력해주세요."
    }
    // 닉네임 중복은 json data forEach 돌면서 catch 
    else if(inputId.length >=11){

        help.innerText = "*닉네임은 최대 10자 까지 작성 가능합니다."
    } // 닉네임 최대 10자까지 작성 가능
    else{
        help.innerText = "";
    }
    
        
     // 이 조건들 모두 충족시 토스트 메시지 띄우기
 


});

b.addEventListener('click',() =>{
    const id = document.getElementById('nickname');
    if(id.value.length >0 && id.value.length <=10){
        f.style.display = "block";
        f.offsetHeight;
        setTimeout(function () {
            f.style.display = "none"; // 일정 시간 후에 페이지 이동
          }, 2000); // 3초(3000밀리초) 후에 실행
        }
});

const q = document.getElementById('quit-button'); // quit-button (회원탈퇴)
const modal = document.getElementById('modal'); // 모달 버튼 load


q.addEventListener('click',function(event){
    let separate = document.getElementById('separate');
    separate.innerText = "회원탈퇴 하시겠습니까?"
    modal.style.display = "block";
    document.body.style = "overflow : hidden";
    
  });

const cancelButton = document.getElementById('cancel');

cancelButton.addEventListener('click',function(event){
  modal.style.display = "none";
  document.body.style = "overflow : auto";
  
});


const quit = document.getElementById('post-delete'); // 회원탈퇴 - 확인 버튼

quit.addEventListener('click',() =>{

    // json data delete
    window.location.href = "login.html";
});
 
// 확인 누르면 데이터 삭제하기 구현

//5번 조건 : 모달까지는 완료 , json 연동해서 data delete -> 