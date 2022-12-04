## 컴포넌트 만드는 법
1. function 생성
2. return() 안에 html 담기
3. <함수명></함수명> 쓰기
4. App 도 컴포넌트
```js
// 컴포넌트 
function Modal(){
    return (
      <div className='Modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    )
}
```

#### 컴포넌트 사용하면 좋은 상황들
- 반복적인 html 을 축약할 때
- 큰 페이지들
- 자주 변경되는 것들

#### 의미 없는 div 대신 <></>
```js
// 컴포넌트 
function Modal(){
    return (
      <>
        <div className='modal'>
          <h4>제목</h4>
          <p>날짜</p>
          <p>상세내용</p>
        </div>
      </>
    )
}
```