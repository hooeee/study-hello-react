import { useParams } from 'react-router-dom';

function Detail({ shoes }) {

    const { id } = useParams();
    const findShoe = shoes.find(x => x.id == id);

    return (
        <div className="container">
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