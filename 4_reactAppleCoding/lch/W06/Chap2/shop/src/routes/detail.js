import { useParams } from "react-router-dom";
import styled from 'styled-components';

let CustomButton = styled.button`
    background : ${ props => props.bg };
    color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
    padding : 10px;
`

function Detail(props) {
    let { id } = useParams();
    let target = props.shoes.find(x => x.id==id);

    return (
        <div className="container">
            <CustomButton bg="blue">버튼</CustomButton>
            <CustomButton bg="orange">버튼</CustomButton>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{target.title}</h4>
                    <p>{target.content}</p>
                    <p>{target.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;