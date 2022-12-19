## useEffect
- useEffect 안에 있는 코드는 html 렌더링 후에 동작
```js
useEffect(() => {
    // mount , update 시 실행
})
```
- 실행 조건을 지정할 수 있음, 아래 항목은 count 가 변경될 때마다 실행됨
```js
useEffect(() => {
    // mount , update 시 실행
    setTimeout(() => {
        setAlert(false)
    }, 2000);
}, [count])
```
- mount 에만 실행
```js
useEffect(() => {
    // mount , update 시 실행
    setTimeout(() => {
        setAlert(false)
    }, 2000);
}, [])
```
- useEffect 가 실행되기 전에 실행
```js
useEffect(() => {
    // mount , update 시 실행
    setTimeout(() => {
        setAlert(false)
    }, 2000);
    return () => {
        // useEffect 가 실행되기 전에 실행
    }
}, [])
```