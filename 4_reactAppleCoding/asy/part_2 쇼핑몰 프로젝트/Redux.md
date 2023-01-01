## Redux

- 컴포넌트들이 props 없이 state 공유 가능

## Redux 설정

- createSlice : useState 와 비슷한 용도로 state 생성
- configureStore : 사용할 Redux 설정

```js
import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "kim",
});

export default configureStore({
  reducer: {
    user: user.reducer,
  },
});
```

## Redux 사용

- useSelector 함수를 이용해 Redux state 를 불러옴

```js
let a = useSelector((state) => {
  return state;
});
let a = useSelector((state) => {
  return state.stock;
});
```

## Redux 변경

1. state 수정 함수 만들기

- reducers 사용
- 함수(param) : param 은 기존 state

```js
let user = createSlice({
  name: "user",
  initialState: "kim",
  reducers: {
    changeName(state) {
      return "john kim";
    },
  },
});
```

2. 만든 함수 export

- 여러 함수들을 export 할 수 있음

```js
export let {changeName, 함수 1, ....} = user.actions
```

3. 변경 함수 사용

- dispatch 를 이용해 함수 사용

```js
{
  state.cart.map((cart) => {
    return (
      <tr>
        <td>{cart.id}</td>
        <td>{cart.name}</td>
        <td>{cart.count}</td>
        <td>
          <button
            onClick={() => {
              dispatch(changeName());
            }}
          >
            +
          </button>
        </td>
      </tr>
    );
  });
}
```
