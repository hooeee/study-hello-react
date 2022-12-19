## axios
- ajax 를 간단하게 사용할 수 있는 도구

```js
axios.get('url') // 데이터를 전송받을 서버 url 
.then((data)=>{
    let copy = [...shoes, ...data.data]
    setShoes(copy)
})
```
- post
```js
axios.post('url', {name : 'data'}) // 서버에 post 전송
```

- 여러 곳으로 요청
```js
Promise.all([ axios.get('/url1'), axios.get('/url2')])
.then(() =>{

})
```
