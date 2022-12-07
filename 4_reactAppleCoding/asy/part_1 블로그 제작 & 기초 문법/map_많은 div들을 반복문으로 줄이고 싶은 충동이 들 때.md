## map
- array 자료 갯수 만큼 함수안의 코드 실행
- 함수의 파라미터는 array 안에 있는 자료를 차례대로 가져옴
- return 을 하면 array 에 담음
- JSX 에는 for 를 사용하지 못하고 map 을 사용
- map 의 콜백함수의 파라미터 첫번째는 array, 두번째는 반복횟수

```js
{
글제목.map(function(a, i){
    return (      
    <div className="list" key={i}>
    <h4 onClick={() => { modal == true ? setModal(false) : setModal(true)}}>
        { 글제목[i] } 
        <span onClick={()=>{ 
        let copy = [...따봉];
        copy[i] = copy[i]+1;
        따봉변경(copy)
        }}>👍</span>{ 따봉[i] }
    </h4>
    <p>2월 17일 발행</p>
    </div>
    )
})
}
```