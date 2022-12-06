## props
- 자식 컴포넌트에서 부모 컴포넌트에 있던 state 를 사용하고 싶으면 props 로 전송해서 사용
- 무조건 부모 컴포넌트에서 자식 컴포넌트로만 전송 가능
```js
function App (){
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  return (
    <div>
      <Modal 글제목={글제목}></Modal>
    </div>
  )
}

function Modal(props){
  return (
    <div className="modal">
      <h4>{ props.글제목[0] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
```