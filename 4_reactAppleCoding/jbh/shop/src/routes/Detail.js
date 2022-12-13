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

function DetailCard(props) {
    let { id } = useParams();
    let findProduct = props.shoes.find(function (x) {
        return x.id == id;
    });

    return (
        <div className="container">
            <Box>
                <YellowBtn bg="yellow">범범조조</YellowBtn>
            </Box>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
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
