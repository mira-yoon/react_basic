/* eslint-disable */

import './App.css';
import { useState } from 'react';


function App() {

  let [글제목, 글제목변경] = useState(['남자 코드 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  // let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);

  

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>

      {/* 
      <div>
        <h4 onClick = { ()=>{ setModal(!modal); } }>꾸꾸 분식</h4>
        <p>11월 30일 발행</p>
      </div> 
      */}

      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              {/* <h4 onClick = {()=>{ setModal(!modal)}}>{글제목[i]} </h4> */}
              <h4>{글제목[i]} <span onClick={()=> {
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy)
                }}>👍</span> {따봉[i]} </h4>
              <p>11월 30일 발행</p>
            </div>
          )
        })
      }

      {
        modal == true ? <Modal/> : null // modal이 true면 <Modal/> 컴포넌트를 넣고 false면 아무것도 넣지 마라
      }

    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}


export default App;
