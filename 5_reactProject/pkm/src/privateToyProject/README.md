## Exercise Client 개발

## 목적

- React 개발 복습 및 개인 Toy Project
- React에서 배울것
  - UseEffect, Redux, axios, router, reactquery등 기술 복습 및 학습

### 새로운 라이브러리 적용

- Redux 또는 zustad 사용 해보기

### 새로운 언어 적용

- js -> tjs로 해보는 연습 추후에 완성 후 같음 프로젝트로 개발

## 개발 방향

- 계획 및 기획 -> 디자인 -> frontUI 구성 완성 -> backend구성 -> DB에 데이터 저장 후 -> 완료

## 프로젝트 시간

- 2022-01-07 ~ 0000-00-00

## 프로젝트 개발 관리

- 2023-01-07
  - 사용자 화면 구성 및 기획
    - [기획 화면](https://www.figma.com/file/4w8LFS54495JQkvvwAByeF/Untitled?node-id=5%3A10&t=IOEz8QTq8XhzOJ41-1)
    - 초기 화면 구성

## 23-01-07 기록

### 리액트 설치

```js
npx create-react-app exercise_blognpm
```

### material UI 설치

```sh
npm install @mui/material @emotion/react @emotion/styled
```

- 위의 설치 파일을 우선 설치한다.
- 리액트 버전이 아래의 조건에 부합해야함
  ```markdown
  react >= 17.0.0 and react-dom >= 17.0.0 are peer dependencies.
  ```
- 글꼴 설치

```js
 npm install @fontsource/roboto
```

- 아이콘 설치

```js
npm install @mui/icons-material
```

- 버튼 넣어보기

```js
import * as React from "react";
import Button from "@mui/material/Button";

export default function MyApp() {
  return (
    <div>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}
```
