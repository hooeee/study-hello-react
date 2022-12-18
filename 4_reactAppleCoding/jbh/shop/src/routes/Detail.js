import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
    background: ${(props) => props.bg};
    color: black;
    padding: 10px;
`;

let Box = styled.div`
    background: grey;
    padding: 20px;
`;

// class Detail2 extends React.Component {
//     componentDidMount() {}
//     componentDidUpdate() {}
//     componentWillUnmount() {}
// }

function DetailCard(props) {
    let [count, setCount] = useState(0);
    let [notify, setnotify] = useState(true);
    let [input, setInput] = useState("");
    let { id } = useParams();
    let findProduct = props.shoes.find(function (x) {
        return x.id == id;
    });

    useEffect(() => {
        let timer = setTimeout(() => {
            setnotify(false);
            return () => {
                clearTimeout(timer);
            };
        }, 2000);
    }, []);

    useEffect(() => {
        if (isNaN(input) == true) {
            alert("숫자만 입력 가능합니다.");
        }
    }, [input]);

    return (
        <div className="container">
            <Box>
                <YellowBtn bg="yellow">범범조조</YellowBtn>
            </Box>
            {notify == true ? <div className="alert alert-warning">2초 이내 구매시 할인</div> : null}

            {count}
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                버튼
            </button>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                    <input
                        className="input-Number"
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                    ></input>
                    <h4 className="pt-5">{findProduct.title}</h4>
                    <p>{findProduct.content}</p>
                    <p>{findProduct.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}

export default DetailCard;
