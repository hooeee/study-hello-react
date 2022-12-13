## styled-components
- css 대신 js 에서 컴포넌트의 스타일을 주입할 수 있음
- 컴포넌트 생성 시 미리 스타일 주입
- 컴포넌트 생성한 js 파일에서만 적용
```js
let YellowBtn = styled.button`
    background : yellow;
    color : black;
    padding : 10px;
`
```
```js
let YellowBtn = styled.button`
    background : ${ props => props.bg };
    color : black;
    padding : 10px;
`

let copyYellowBtn = styled.button(YellowBtn)`
    margin : 10px;
`

<YellowBtn bg="blue">버튼</YellowBtn>
```

