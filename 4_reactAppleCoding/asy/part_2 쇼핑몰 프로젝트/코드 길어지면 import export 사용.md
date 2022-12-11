## import export
- 다른 파일에 있는 자료를 가져오려면 import/export 문법 사용

#### export
```js
let a = 10;

export default a;
```
```js
let a = 10;
let b = 20;
export default {a,b};
```

#### import
```js
import a from './data.js'; // a 는 작명 가능
```
```js
import {a,b} from './data.js'; // 변수 작명 불가능
```