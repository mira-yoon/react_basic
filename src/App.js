/* eslint-disable */

import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {

  let [글제목, 글제목변경] = useState(['남자 코드 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  let [날짜, 날짜변경] = useState(['11월 28일','11월 29일','11월 30일']);

  

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>

      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick = {()=>{ setModal(!modal); setTitle(i);}}>{글제목[i]} 
                <span onClick={(e)=> {
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}>👍</span> 
                {따봉[i]}
              </h4>
              <p>{날짜[i]}</p>
              {/* <p>11월 30일 발행</p> */}
              <button onClick={(e)=>{
                e.stopPropagation();

                let 새따봉 = [...따봉];
                새따봉.splice(i,1);
                따봉변경(새따봉);
        
                let 새글제목 = [...글제목];
                새글제목.splice(i,1);
                글제목변경(새글제목);
                
              }}>글삭제</button>
            </div>
          )
        })
      }

      <input onChange = { (e) => { 
        입력값변경(e.target.value); // 늦게 처리된다. 제쳐두고 다음줄 실행한다.
        console.log("타겟값: " + e.target.value); // 1등 실행
        console.log("입력값: " + 입력값); // 2등 실행     
      }} /> 

      <button onClick={()=>{

        if(입력값 == "") {
          alert("새 글제목을 입력하세요.");
          return;
        };

        let today = new Date();
        let month = today.getMonth() + 1;
        let date = today.getDate();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let todayInfo = `${month}월 ${date}일 ${hours}시 ${minutes}분`;

        let 새날짜 = [...날짜];
        새날짜.unshift(todayInfo)
        날짜변경(새날짜);

        let 새따봉 = [...따봉];
        새따봉.unshift(0);
        따봉변경(새따봉);

        let 새글제목 = [...글제목];
        새글제목.unshift(입력값);
        글제목변경(새글제목);

      }}>글 발행</button>

      


      {
        modal == true ? <Modal 글제목={글제목} 글제목변경={글제목변경} title={title} /> : null
      }

      <Modal2 글제목={글제목} />

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



class Modal2 extends React.Component {
  // constructor, super, render는 무조건 채워야 한다. 
  constructor(props){
    super(props);
    this.state = {
      name: 'Kim',
      age : 20
    }
  }
  render(){
    return (
      <div>
        안녕 {this.state.name}
        <button onClick={()=>{
          this.setState({name : "Park"})
          console.log(this.props.글제목[0])
        }}>버튼</button>
      </div>
    )
  }
}




export default App;
