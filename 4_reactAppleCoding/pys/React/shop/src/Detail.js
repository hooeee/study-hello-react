import "./Detail.css";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";
import { Context1 } from "./App.js";
let ColorBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

export function Detail({ products }) {
  let { 재고 } = useContext(Context1);

  let [count, setCount] = useState(0);
  let [numAlert, setNumAlert] = useState(false);
  let [inputValue, setInputValue] = useState("");

  let { id } = useParams();
  const product = products.find((item) => item.id == id);
  let [tab, setTab] = useState(0);
  /*
    // 랜더링이 끝난 후 실행 된다.
  // 오래 걸리는 작업에 쓴다.
  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);
    console.log(2);
    // useEffect가 실행되기 전에 실행됌(CleanUpFunction)
    // 또한 unmount 할 때 실행됌(다른 페이지로 넘어갈때)
    // 기존 데이터를 삭제하기 위해 사용함
    return () => {
      console.log(1);
      clearTimeout(a); // 타이머 제거
    };
  }, []); // []이거 넣으면 1번만 됌

  useEffect(() => {}); // 1. 재렌더링 할때마다 코드를 실행하고 싶을 때,
  useEffect(() => {}, []); // 2. mount 시 1회 코드 실행하고 싶으면
  useEffect(() => {
    return () => {}; // 3. unmount시 1회 코드 실행하고 싶거나, useEffect 실행 전에 실행하려면
  }, []);

  useEffect(() => {}, [count]); // 4. 특정 상태 변경하고 싶을때

  */

  let [detailFade, setDetailFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setDetailFade("end");
    }, 100);

    if (isNaN(inputValue)) {
      setNumAlert(false);
      console.log(numAlert);
    } else {
      setNumAlert(true);
      console.log(numAlert);
    }
    return () => {
      setDetailFade("");
    };
  }, []);

  if (product === undefined) {
    return (
      <>
        <h4>없는 상품입니다.</h4>
      </>
    );
  } else {
    return (
      <div className={`container start ${detailFade}`}>
        {count}
        <ColorBtn
          onClick={() => {
            setCount(count + 1);
          }}
          bg="blue"
        >
          색상 버튼
        </ColorBtn>
        <div className="row">
          <div className="col-md-6">
            <img src={product.src} width="100%" />
          </div>
          {numAlert == true ? (
            <div className="alert alert-warning">
              문자만 입력하세요 {numAlert}
            </div>
          ) : null}
          <div>
            <input
              type="text"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              defaultValue={inputValue}
            ></input>
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{product.title}</h4>
            <p>{product.content}</p>
            <p>{product.price}원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>

        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link eventKey="link0" onClick={() => setTab(0)}>
              탭0
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={() => setTab(1)}>
              탭1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2" onClick={() => setTab(2)}>
              탭2
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent shoes={products} index={tab} />
      </div>
    );
  }

  function TabContent({ products, index }) {
    let [fade, setFade] = useState("");
    let { 재고 } = useContext(Context1);
    useEffect(() => {
      setTimeout(() => {
        setFade("end");
      }, 100);

      return () => {
        setFade("");
      };
    }, []);
    return (
      <div className={`start ${fade}`}>
        {
          [
            <div>내용0 재고 : {재고[index]}</div>,
            <div>내용1 재고 : {재고[index]}</div>,
            <div>내용2 재고 : {재고[index]}</div>,
          ][index]
        }
      </div>
    );
  }
}
