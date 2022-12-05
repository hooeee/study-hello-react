## array / object
- array/object 를 다룰때 원본 보존하는게 좋음
- 담은 변수엔 주소값만 저장됨, [1,2,3] 이 있면 각 1,2,3 의 값이 어디에 저장되어있는지 주소값만 저장됨 == reference data type
- 주소값으 변경하려면 아래 문법으로 수정 (deep copy)
```js
<button onClick={() => {
    let copy = [...글제목]; 
    copy[0] = '여자 코트 추천';
    글제목변경(copy);
}}>글 수정
</button>
```

## state 변경 함수
- 기존 state == 신규 state 의 경우 변경하지 않음