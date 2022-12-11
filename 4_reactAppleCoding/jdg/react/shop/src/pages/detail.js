import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let YellowButton = styled.button`
    background: ${props => props.bg};
    color: ${props => props.bg == 'blue' ? 'white' : 'black'};
    padding: 10px;
`

let Box = styled.div`
    background: grey;
    padding: 20px;
`

function Detail({ props, shoes }) {

    const { id } = useParams();
    const findShoe = shoes.find(x => x.id == id);

    return (
        <div className="container">
            <YellowButton bg="blue">버튼</YellowButton>
            <YellowButton bg="orange">버튼</YellowButton>
            <Box>박스</Box>
            <div className="row">
                <div className="col-md-6">
                    <img src={findShoe.img} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{findShoe.title}</h4>
                    <p>{findShoe.content}</p>
                    <p>{findShoe.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}


export default Detail;