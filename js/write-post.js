// 1번조건 끝
// 2번조건 끝
// 3번조건 끝
// 4번조건 끝



let title = document.getElementById('title'); // 제목 textarea input
let intext = document.getElementById('intext') // 본문 textarea input
const joinButton = document.getElementById('join-button'); // 수정하기 button
const helperText = document.getElementById('help'); // *helper text 
let titleCheck = false;
let intextCheck = false; // 디폴트값을 false로 설정
function lengthCheck(element){
    if (element == ""){
        return false;
    } // 만약 element의 innerText가 비어있다면 false 반환
    return true; // true면 공백이 아니고
}
title.addEventListener('input',() =>{
    title = document.getElementById('title');  // 제목 버튼
    titleCheck = lengthCheck(title.value);
    intext = document.getElementById('intext');
    intextCheck = lengthCheck(intext.value);
    if(titleCheck == true && intextCheck == true){
        joinButton.style.backgroundColor = "#7F6AEE"; 
    } // 둘다 채워지는 경우 !! 변경
    else{
        joinButton.style.backgroundColor = "#ACA0EB";
    }
    
    
});

intext.addEventListener('input',() =>{
    title = document.getElementById('title');  // 제목 버튼
    titleCheck = lengthCheck(title.value);
    intext = document.getElementById('intext');
    intextCheck = lengthCheck(intext.value);
    if(titleCheck == true && intextCheck == true){
        joinButton.style.backgroundColor = "#7F6AEE"; 
    } // 둘다 채워지는 경우 !! 변경
    else{
        joinButton.style.backgroundColor = "#ACA0EB";
        
    }
   
    
   
});




joinButton.addEventListener('click',() =>{
    if(titleCheck == false || intextCheck == false){
        helperText.innerText = "*제목, 내용을 모두 작성해주세요.";
    }
    else{
        helperText.innerText = "*helper text";
        window.location.href = "post.html";
    }
});