import './Detail.css';
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import {Context1} from './../App.js'

function Detail({ modeling }) {
    const {재고} = useContext(Context1);

    const [hidden, setHidden] = useState(true);
    const [view, setView] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [tab, setTab]= useState(0);
    const [fadeOpacity, setFadeOpacity] = useState('')

    useEffect(()=>{
        setFadeOpacity('end-opacity')
      return ()=>{
        setFadeOpacity('')
      }
    },[])

    const onInputValueHandler = (inputValue) => {
        if (isNaN(inputValue)) {
            //alert("숫자만 입력하세요");
            setView(true);
        }
        else {
            setView(false);
            setInputValue(inputValue);
            console.log(inputValue);
        }
    }

    const onHidden = (() => {
        setHidden(false);
    })

    useEffect(() => {
        setTimeout(() => {
            onHidden()
            return () => {
                setView(true);
            }
        }, 2000);
    }, [hidden], [view])

    let { id } = useParams();
    let findID = modeling.find(function (model) {
        return model.id == id;
    })
    console.log(findID);
    return (
        <div className={'container start-opacity ' + fadeOpacity}>
        <div className="div-main">
            <div className="container">
                {
                    view == false ? null : <div className="alert alert-caution">경고: 숫자만입력하세요</div>
                }
                {
                    hidden == true ? <div className="alert alert-warnig">2초이내 구매시 할인</div> : null
                }
                <div className="row">
                    <div className="col-md-6">
                        <img src={'/basic' + findID.id + '.png'} width="100%" />
                    </div>

                    <div className="col-md-6">
                        <input onChange={(e) => { onInputValueHandler(e.target.value) }} />
                        <h1 className="-5">{findID.title}</h1>
                        <h3>{findID.content}</h3>
                        <h5>{findID.price} Won</h5>
                        <button className="btn btn-danger" onClick={() => window.open(findID.link, '_blank')}>주문하기</button>
                    </div>
                </div>
            </div>


            <Nav variant="tabs" defaultActiveKey="link1">
                <Nav.Item>
                    <Nav.Link  onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab = {tab}/>
            {/* {
                tab ==0 ? <div>내용0</div> :null
            }
            {
                tab ==1 ? <div>내용1</div> :null
            }
            {
                tab ==2 ? <div>내용2</div> :null
            } */}
        </div>
    </div>
    )
    function TabContent({tab}){
        const [fade, setFade] = useState('')
        useEffect(()=>{
            const a = setTimeout(()=>{setFade('end')},100)
            return ()=>{
                clearTimeout(a)
                setFade('');
            }
        },[tab])
        {/* <div className={'start ' + fade}> */}
        return (
            <div className={`start ${fade}`}>
                {[<div>{재고}내용0</div>,<div>내용1</div>, <div>내용2</div>][tab]}
            </div>
        )
    }



// function TabContent({tab}){
//     if(tab == 0){
//        return  <div>내용0</div>
//     }else if(tab == 1){
//       return  <div>내용1</div>
//     }else if(tab == 2){
//        return <div>내용2</div>
//     }
// }
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