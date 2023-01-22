## Story Book [site_link](https://storybook.js.org/)

![image-20230122052354632](../../assets/img/post/README1/image-20230122052354632.png)

- story book 사이트에 들어감
- Showcase 클릭
  - 관련 적용한 사이트를 볼 수 있는 듯

## 설치하기

```js
npx sb init
```

- 위를 src 있는 폴더에서 실행을 하면 아래와 같이 설치된다.

![image-20230122053317197](../../assets/img/post/README1/image-20230122053317197.png)

- 설치가 완료된 후 실행

  ```sh
  npm run storybook   
  ```

### 에러 발생

- 최신 node.js 18.x 버전으로 실행하는 경우 아래와 같은 에러 발생

  ```sh
    opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
    library: 'digital envelope routines',
    reason: 'unsupported',
    code: 'ERR_OSSL_EVP_UNSUPPORTED'
  }
  ```

- 해결 방법

  ```sh
  sudo npm install -g n
  
  sudo n 16.13.2
  
  // 다시 재 실행
  npm run storybook
  ```

  