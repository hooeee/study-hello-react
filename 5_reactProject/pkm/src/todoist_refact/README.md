## vite를 이용한 리액트 설치

- node.js 버전의 경우 14.18+, 16+를 요구할 수 있음

```sh
// npm 설치
npm create vite@latest

// yarn 설치
yarn create vite
```

### 리액트 탬플릿 생성

```sh
npm create vite@latest todoist -- --template react

npm create vite@latest todoits -- --template react-ts
```

### 실행해보기

- npm run dev라고 해서 실행하면 바로 실행이 안될것이다
- 해당 프로젝트에 들어가서 npm install 하고 npm run dev를 하면 성공~!

## 부트스트랩

```sh
npm install react-bootstrap bootstrap
```

- index.html 에 아래 link를 추가한다.

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>
```

## 절대경로 설정하기

- 프로젝트의 제일 루트부분인 src안에 jsconfig.json 파일 생성

  ```json
  {
    "compilerOptions": {
      "baseUrl": "src"
    },
    "include": ["src"]
  }
  ```

  - 위와같이 추가를 하면 이렇게 사용 가능

## 리액트 아이콘 | react-icons

```sh
 npm install react-icons --save
```

## 리액트 아이콘 | google-material-icons

```sh
npm install react-google-material-icons
```

- 찾은 아이콘 종류
  - home
  - menu
  - add
  - notifications
  - account_circle
  - help
  - whatshot
  - Tune
  - calendar_month
  - grid_view
  - inbox
  - search
- 찾을 아이콘 종류
  - 해당 일자에 해당하는 아이콘

## 해당 체크 이미지박스 링크

```
https://d3ptyyxy2at9ui.cloudfront.net/assets/images/76bd6d1001a372ece03ef777813b3352.svg

https://d3ptyyxy2at9ui.cloudfront.net/assets/images/21ab83928e698e2cd56b75be2756e393.svg

https://d3ptyyxy2at9ui.cloudfront.net/assets/images/04587b33fb8e382780f4fb5787663300.svg

https://d3ptyyxy2at9ui.cloudfront.net/assets/images/235e73c80b156de08b5182c969622c08.svg
```

## 라우터 사용 하기

```sh
npm install react-router-dom@6

//vite + react 기준
// main.jsx
import { BrowserRouter } from "react-router-dom";
<BrowserRouter>
      <App />
</BrowserRouter>
```

- 위와 같이 감싸놓기
- 현재 사이드 바 부분에 링크 연결
  ```js
              <div
                onClick={() => {
                  navigate("./manage");
                }}
              >
              <div
                onClick={() => {
                  navigate("./today");
                }}
              >
              <div
                onClick={() => {
                  navigate("./tomorrow");
                }}
              >
              <div
                onClick={() => {
                  navigate("./filterLabel");
                }}
              >
  ```

## store 구성하기

```sh
npm install @reduxjs/toolkit react-redux
```

### store.jsx

```js
// vite + react 기준
// main.jsx
import { Provider } from "@reduxjs/toolkit";
import store from "./store/store";

<Provider store={store}></Provider>;

// store.jsx
import { createSlice, configureStore } from "@reduxjs/toolkit";
const user = createSlice({
  name: "user",
  initalState: "park",
  reducers: {
    changeName(state) {
      return "jhon" + state;
    },
  },
});

export const { changeName } = user.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
  },
});
```

### 사용하는 곳에 적용

```js
const a = useSelector((state) => {
  return state.user;
});
```


## Zustand 사용하기
### 설치
```sh
npm install zustand
```
### state 보관함
```js
import create from 'zustand'

const useStore = create(()=>({
  count: 0,
}))

const {count} = useStore();
```

### state 수정
```js
useStore.setState({count: count-1})
```
- 이렇게만 해도 되지만 함수를 미리 정의해서 사용

```js
import create from 'zustand'

const useStore = create(()=>({
  count: 0,
  inc(){
    set((state)=>({count: state.count+1}))
  }
}))

const {count, inc} = useStore();

```
### ajax 요청
```js
import create from 'zustand'

const useStore = create(()=>({
  count: 0,
  inc(){
    set((state)=>({count: state.count+1}))
  },
  async ajax요청(){
    const response = await fetch('https://codingapple1.github.io/data.json');
    console.lof(await response.json());
  }
}))
```
## 디버깅
```js
import {devtools} from 'zustand/middleware';

```
## state 많으면
- 따로 만들거나 ,따로 분리해서 사용하면됨
## middleware
```js
import {persist} from 'zustand/middleware'
``