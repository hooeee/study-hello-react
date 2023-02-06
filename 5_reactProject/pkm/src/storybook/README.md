## 참고
[React에 Storybook 적용하기(feat vite)](https://velog.io/@sjyoung428/React%EC%97%90-Storybook-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0feat-vite)

```sh
npm create vite

> vite-project

> React 

> Typescript

cd vite-project

npx sb init --builder @storybook/builder-vite

npm run storybook
```

```sh
npm -v
8.1.2
```
- 버전 정보

## 스토리북 설치 시
- 스토리북 자체에 나타나게 하기위한 파일 구성
  - button.jsx
  - button.module.css
  - button.stories.jsx
    - 실제 x.stories.jsx 파일이 보여지는 부분임
- 스토리북에 폴더 구조 나누는 방법
