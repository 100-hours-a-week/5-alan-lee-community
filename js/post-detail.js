// 1번조건 구현 완료
// 2번조건 구현 완료 
// 3번조건 구현 완료
// 4번조건 구현 완료
// 5번조건도 구현 완료(사실 좀빵꾸나긴했는데 되긴됨)
function lengthCheck(element) {
  if (element >= 100000) {
    return "100K";
  }
  if (element >= 10000) {
    return "10K";
  }
  if (element >= 1000) {
    return "1K";
  }
  return element;
} // 댓글 convert 함수 !!
// post detail은 끝!!!!!!!!! 



function post(elements) {
  const fixTitle = document.querySelector(".post-title");
  const nickName = document.getElementById("nickName");
  const dates = document.getElementById("dates");
  const img = document.getElementById("fix-image");
  const inputText = document.getElementById("inputText");
  const views = document.getElementById("number");
  const comments = document.getElementById("number2");
  fixTitle.innerText = elements.title;
  nickName.innerText = elements.nickname;
  dates.innerText = elements.dates;
  img.src = elements.img;
  inputText.innerText = elements.innerText;
  views.innerText = lengthCheck(elements.views);
  comments.innerText = lengthCheck(elements.comments);
}

function writeComment(elements) {
  const entireInfo = document.createElement("div");
  const writerInfo = document.createElement("div");
  writerInfo.classList.add("writer-info"); // div writer-info
  const boxInfo = document.createElement("div");
  boxInfo.classList.add("box-info"); // div class= boxinofo
  const parent = document.querySelector("#parent"); // parent를 찾아준다 얜 냅둘거임

  const circle = document.createElement("div");
  circle.classList.add("circle");

  const commentWriter = document.createElement("div");
  commentWriter.classList.add("comment-writer");

  const commentDates = document.createElement("div");
  commentDates.classList.add("comment-dates");

  parent.appendChild(entireInfo);
  entireInfo.appendChild(boxInfo);
  boxInfo.appendChild(writerInfo);
  writerInfo.appendChild(circle);
  writerInfo.appendChild(commentWriter);
  writerInfo.appendChild(commentDates);

  commentWriter.innerText = elements.nickname;
  commentDates.innerText = elements.dates;

  const buttons = document.createElement("div");
  buttons.classList.add("buttons");
  boxInfo.appendChild(buttons);

  const commentFix = document.createElement("button");
  commentFix.setAttribute("type", "button");
  commentFix.setAttribute("class", "fix");
  commentFix.innerText = "수정";

  const commentDelete = document.createElement("button");
  commentDelete.setAttribute("type", "button");
  commentDelete.setAttribute("class", "delete");
  commentDelete.innerText = "삭제";

  buttons.appendChild(commentFix);
  buttons.appendChild(commentDelete);

  const commentDetail = document.createElement("p");
  commentDetail.classList.add("commentDetail");
  entireInfo.appendChild(commentDetail);
  commentDetail.innerText = elements.comment_detail;
}

const b = document.getElementById("behind");
b.addEventListener("click", () => {
  window.location.href = "post.html";
});



const deleteButton = document.getElementsByClassName("delete");

const modal = document.getElementById("modal");

function deleteEventListener(){
for (let i = 0; i < deleteButton.length; i++) {
  deleteButton[i].addEventListener("click", function (event) {
    event.preventDefault();
    let separate = document.getElementById("separate");
    if (i == 0) {
      separate.innerText = "게시글을 삭제하시겠습니까?";
    }
    else{
      separate.innerText = "댓글을 삭제하시겠습니까?";
    }
    modal.style.display = "block";
    document.body.style = "overflow : hidden";
  });
}
}

const cancelButton = document.getElementById("cancel");

cancelButton.addEventListener("click", function (event) {
  modal.style.display = "none";
  document.body.style = "overflow : auto";
});

const commentButton = document.getElementById("comment-button");
const commentInput = document.getElementById("intext");

commentInput.addEventListener("input", function (event) {
  commentButton.style.backgroundColor = "#7F6AEE";
  commentButton.offsetHeight;
  var inputText = event.target.value;
  if (inputText.length === 0) {
    commentButton.style.backgroundColor = "#ACA0EB";
  }
  commentButton.offsetHeight;
});



// 여기까지가 정적 할당



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
    const commentInfo = data.comment_info; // 여기는 댓글 부분
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");
    const postInfo = data.info; // 여기는 post 부분
    
    
    postInfo.forEach((item) => {
      if (postId == item.post_id) {
        // url에서 요청한 부분과 같은 글을 불러온다
        post(item); // 이렇게 하면 json 내에있는 것들이 들어간다
      } //이렇게하면 클릭한 페이지의 내용들을 슉슉 바꿔준다
    });
    commentInfo.forEach((item) => {
      if (postId == item.post_id) {
        writeComment(item);
      }
    }); // 여기까지가 페이지 동적으로 불러오는 일

    function commentInputEventListener(commentNumber){
      commentButton.addEventListener("click", function (event) {
        
        if (commentButton.value == "댓글 수정"){
          const nowText = document.getElementById("intext");
          const findComment = document.querySelectorAll('.commentDetail');
          for (let i = 0; i< findComment.length; i++){ // 안에있는 내용
            if( i+1 == commentNumber){
          findComment[i].innerText = nowText.value;
          //ㅅㅂ 여길 뭘넣어야하냐
          findComment[i].offsetHeight;
            }
          }
          commentButton.value = "댓글 등록";
        }

      });
      

    }

    function fixEventListener(){
      const fix = document.getElementsByClassName("fix");
      const commentText = document.getElementById('intext');
      for (let i = 0; i < fix.length; i++) {
        fix[i].addEventListener("click", () => {
          if (i == 0) {
            // `post-detail.html?id=${item.post_id}`
            window.location.href = `post-fix.html?id=${postId}`;
          } else {
            const buttonText = document.querySelector('.button');
            const fixText = document.getElementById('intext');
            for (let j = 0; j< commentInfo.length; j++){
              if ( (postId == commentInfo[j].post_id) && (i == commentInfo[j].comment_number)){ // 여기서 i는 post id
            fixText.innerText = commentInfo[j].comment_detail;
            buttonText.value = "댓글 수정";
            buttonText.offsetHeight;
            commentInputEventListener(commentInfo[j].comment_number);
              }
        
            }

             // commentInfo.comment_detail
            
            
      
          } // innerText를 댓글 수정으로 바꾸고, 
        });
      } // 댓글 수정 부분 (조건 5번)
    }

    deleteEventListener();
    fixEventListener();
    // 그다음 5번 조건인 댓글 수정

  });

// 4번 조건은 키를 입력하는 순간부터, comment!="" 라면, color change
// if comment가 0이라면 comment부분 display : none;


// 1번조건 완
// 2번조건도 완
// 3번조건도 완
// 4번조건 완
// 5번조건 완,,,,,,,,,,,
