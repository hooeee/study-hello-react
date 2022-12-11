#### navigate
- 페이지 이동을 도와주는 기능

```js
let navigate = useNavigate();

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">MireroShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail')}}>detail</Nav.Link>
            <Nav.Link onClick={() => {navigate(-1)}}>detail</Nav.Link> // 1번 뒤로 가기 -2 면 2번 뒤로가기
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
```

#### 404 페이지
```js
<Route path="*" element={<div>없는 페이지</div>}/>
```

#### nested routes
- Outlet 을 이용해 하위 route 컴포넌트를 어디에 표시할지 정하는 곳
```js
<Route path="/about" element={<About/>}>
    <Route path="member" element={<About/>}/>
    <Route path="location" element={<About/>}/>
</Route>

function About() {
  return (
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  )
}
```