## 이미지 넣는 법
1. css 파일

```css
.main-bg {
  height: 500px;
  background-image: url(../img/main-bg-image.jpg);
  background-size: cover;
  background-position: center;
}

```

2. import

```js
import 변수명 from '이미지 경로';

<div style = {{backgroundImage : 'url('+ 변수명 +')'}}>
```

3. public
- public 폴더에 저장되어있는 이미지 경로 그대로를 입력하여 사용가능 하지만 배포 시 문제가 발생할 수 있으므로 아래와 같은 방식으로 입력하는 것을 권장

```js
<img src={process.env.PUBLIC_URL + '/logo192.png'} /> 
```