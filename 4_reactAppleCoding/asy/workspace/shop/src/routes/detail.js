import { useParams } from "react-router-dom";
import styled from 'styled-components';

let YellowBtn = styled.button`
    background : ${ props => props.bg };
    color : ${ props => props.bg == 'white' ? 'black' : 'white'};
    padding : 10px;
`

function Detail(props) {

    let {id} = useParams();
    let pictureIdx = parseInt(id) + 1;
    let choiceProduct = props.shoes.find((x) => {
        return x.id = id;
    })
    return (
        <div className="container">
            <YellowBtn bg="black">버튼</YellowBtn>
            <div className="row">
            <div className="col-md-6">
                <img src={'https://codingapple1.github.io/shop/shoes'+ pictureIdx +'.jpg'} width="100%" />
            </div>
            <div className="col-md-6">
                <h4 className="pt-5">{choiceProduct.title}</h4>
                <p>{choiceProduct.content}</p>
                <p>{choiceProduct.price}원</p>
                <button className="btn btn-danger">주문하기</button> 
            </div>
            </div>
        </div> 
    )
}

export default Detail;


