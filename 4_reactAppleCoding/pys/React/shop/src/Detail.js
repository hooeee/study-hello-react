import { useParams } from "react-router-dom";
import styled from 'styled-components';

let ColorBtn = styled.button`
  background : ${ props => props.bg };
  color : ${props => props.bg == 'blue' ? 'white' : 'black'};
  padding : 10px;
`;

export function Detail({products}){
    let {id} = useParams();
    const product = products.find((item) => item.id == id);

    if(product === undefined)
    {
        return  (
            <>
            <h4>없는 상품입니다.</h4>
            </>
        )
    }
    else
    {
        return (
            
            <div className="container">
                <ColorBtn bg="blue">색상 버튼</ColorBtn>
                <div className="row">
                    <div className="col-md-6">
                        <img src={product.src} width="100%" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{product.title}</h4>
                        <p>{product.content}</p>
                        <p>{product.price}원</p>
                        <button className="btn btn-danger">주문하기</button> 
                    </div>
                </div>
            </div> 
        )
    }
    
}