import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";

let CustomButton = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

function Detail(props) {
  let { id } = useParams();
  let target = props.shoes.find((x) => x.id == id);
  let [alert, setAlert] = useState(true);
  let [탭, 탭변경] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);

    //update시에는 동작 하지 않는가?
    return () => {
      //clearTimeout(timer);
    };
  }, []);

  return (
    <div className="container">
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
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav justify variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => { 탭변경(0)}} eventKey="link0">Link0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { 탭변경(1)}} eventKey="link1">Link1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { 탭변경(2)}} eventKey="link2">Link2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭}></TabContent>
    </div>
  );
}

function TabContent({탭}) {
    if(탭 == 0) {
        return <div>내용0</div>
    } else if(탭 == 1) {
        return <div>내용1</div>
    } else {
        return <div>내용2</div>
    }
}

export default Detail;
