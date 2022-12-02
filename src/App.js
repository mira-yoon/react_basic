/* eslint-disable */

import './App.css';
import { useState } from 'react';


function App() {

  let [글제목, 글제목변경] = useState(['남자 코드 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>

      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick = {()=>{ setModal(!modal); setTitle(i)}}>{글제목[i]} <span onClick={()=> {
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy);
                }}>👍</span> {따봉[i]} </h4>
              <p>11월 30일 발행</p>
            </div>
          )
        })
      }

      <input></input>


      {
        modal == true ? <Modal 글제목={글제목} 글제목변경={글제목변경} title={title} /> : null
      }

    </div>
  );
}

/* 
state를 자식에 만들면 부모 -> 자식 전송할 필요가 없다. 
하지만 title이라는 state가 App에서도 필요하다면 App에 만들어놔야 한다. 
state를 사용하는 컴포넌트들 중 최상위 컴포넌트에 만든다. 
*/
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=> {
        let copy = [...props.글제목];
        copy[0] = '여자 코드 추천';
        props.글제목변경(copy);
      }}>글수정</button>
    </div>
  )
}


/*
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=> {
        let copy = [...props.글제목];
        copy[0] = '여자 코드 추천';
        props.글제목변경(copy);
      }}>글수정</button>
    </div>
  )
}
*/


export default App;
