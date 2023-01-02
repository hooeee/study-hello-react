import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCart } from "./../store/cartSlice.js";
import { Context1 } from "./../App.js";

let CustomButton = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

function Detail(props) {
  let { 재고 } = useContext(Context1);
  let { id } = useParams();
  let target = props.shoes.find((x) => x.id == id);
  let [alert, setAlert] = useState(true);
  let [탭, 탭변경] = useState(0);
  let [fade, setFade] = useState("");
  let dispatch = useDispatch();

  useEffect(() => {
    let timer = setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      clearTimeout(timer);
      setFade("");
    };
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`container start ${fade}`}>
      {alert == true ? (
        <div className="alert alert-warning">2초이내 구매 시 할인</div>
      ) : null}

      <CustomButton bg="blue">버튼</CustomButton>
      <CustomButton bg="orange">버튼</CustomButton>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{target.title}</h4>
          <p>{target.content}</p>
          <p>{target.price}</p>
          <button
            className="btn btn-danger"
            onClick={() =>
              dispatch(addCart({ id: 0, name: "White and Black", count: 2 }))
            }
          >
            주문하기
          </button>
        </div>
      </div>

      <Nav justify variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(0);
            }}
            eventKey="link0"
          >
            Link0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(1);
            }}
            eventKey="link1"
          >
            Link1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(2);
            }}
            eventKey="link2"
          >
            Link2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭}></TabContent>
    </div>
  );
}

function TabContent({ 탭 }) {
  let [fade, setFade] = useState("");
  let { 재고 } = useContext(Context1);

  useEffect(() => {
    let timer = setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      clearTimeout(timer);
      setFade("");
    };
  }, [탭]);

  return (
    <div className={`start ${fade}`}>
      {[<div>{재고}</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
}

export default Detail;
