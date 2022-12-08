import { useParams } from "react-router-dom";
import styled from 'styled-components';

function Detail({modeling}) {
    let {id} = useParams();
    let findID = modeling.find(function(model){
        return model.id == id;
    })
    console.log(findID);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={'/basic' + findID.id + '.png'} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{findID.title}</h4>
                    <p>{findID.content}</p>
                    <p>{findID.price} Won</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
    // let realObj;
    // let realID;
    // modeling.map(function(obj){
    //     if(obj.id==id){
    //         console.log(id);
    //         realObj = obj;
    //         realID = obj.id;
    //         console.log(realObj);
    //     }
    // })
    // return (
    //     <div className="container">
    //         <div className="row">
    //             <div className="col-md-6">
    //                 <img src={'/basic' + realID + '.png'} width="100%" />
    //             </div>
    //             <div className="col-md-6">
    //                 <h4 className="pt-5">{realObj.title}</h4>
    //                 <p>{realObj.content}</p>
    //                 <p>{realObj.price} Won</p>
    //                 <button className="btn btn-danger">주문하기</button>
    //             </div>
    //         </div>
    //     </div>
    // )

}

export default Detail;