

// 너도 끝 !!!! 잘가라 

const t = document.getElementById('import-title');

function titleLengthCheck(element){
    if (element.length > 26){
        element = element.slice(0,26);
    }
    return element;
}

// 여기서는 3번은 기존 json을 불러와야하고,,
const b = document.getElementById('join-button');
b.addEventListener('click',() =>{
  
    window.location.href = "post-detail.html";

}); // 여기에 내부 longtext innerText 변경 
// 여긴 fetch를 통해 post_id 인식

fetch("../data.json")
  .then((response) => {
    // 응답을 JSON으로 파싱
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    // 데이터 처리
    const info = data.info; // 여기는 댓글 부분
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");
    info.forEach((item) => {
        if (item.post_id == postId){
            const postTitle = document.getElementById('import-title');
            const postDetail = document.getElementById('intext');
            postTitle.innerText = item.title;
            postDetail.innerText = item.innerText;

        }
    });
    const joinButton = document.getElementById('join-button');
    joinButton.addEventListener('click',(e) => {
        // 게시글 수정은 백엔드 영역이므로 일단 pass
        window.location.href = `post-detail.html?id=${postId}`;

    });


    

  });