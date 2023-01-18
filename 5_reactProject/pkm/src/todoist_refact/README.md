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