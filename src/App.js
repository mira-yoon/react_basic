/* eslint-disable */

import './App.css';
import { useState } from 'react';


function App() {

  let post = '꾸꾸 우동 맛집'; // 이게 서버에서 가지고 온 데이터라고 가정

  let [글제목, 글제목변경] = useState(['남자 코드 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);

  // 비슷한 기능을 js로 만든 것이다. 
  // 버튼을 눌러도 html에서 좋아요 숫자는 그대로 0 이다. 
  // 다만 콘솔창을 확인해보면 버튼을 누를 때 마다 숫자가 1씩 커진다. 
  let likeNum = 0;
  function plusNum (){
    likeNum = likeNum + 1;
    console.log(likeNum); 
  }


  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>

      <button onClick={()=> {
        let copy = [...글제목];
        copy[0] = '여자 코드 추천';
        console.log(copy == 글제목); // false
        글제목변경(copy);

        // <오류 케이스 1>
        // 글제목[0] = '여자 코드 추천';
        // console.log(글제목); // 콘솔창에서는 글자가 바뀌었지만 화면에는 반영이 안 된다. 
        // 글제목변경(글제목);

        // <오류 케이스 2>
        // let copy = 글제목;
        // copy[0] = '여자 코드 추천';
        // console.log(copy == 글제목); // true
        // 글제목변경(copy);

      }}>글수정</button>

      <button onClick={()=> {
        let copy = [...글제목];
        copy.sort();
        console.log(copy); // ['강남 우동 맛집', '남자 코드 추천', '파이썬 독학']
        글제목변경(copy);
      }}>가나다 정렬</button>

      <div className="list">
        <h4>{글제목[0]} <span onClick={()=> {따봉변경(따봉+1);}}>👍</span> {따봉} </h4>
        <p>11월 30일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]} <span onClick={plusNum}>👍</span> {likeNum}</h4>
        <p>11월 30일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>11월 30일 발행</p>
      </div>
      <div className="list">
        <h4 className="change">{post}</h4>
        <p>11월 30일 발행</p>
      </div>
      
    </div>
  );
}

export default App;
