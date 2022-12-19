import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { FormSelect, Nav } from 'react-bootstrap';
import { Context1 } from './../App.js'

function Detail(props) {

    let {재고} = useContext(Context1) // context 해체

    let [alert, setAlert] = useState(true)
    let [number, setNumber] = useState('')
    let [tabNum, setTabNum] = useState(0)
    

    useEffect(() => {
        // mount , update 시 실행
        let timer = setTimeout(() => {
            setAlert(false)
        }, 2000);

        return () => {
            // useEffect 가 실행되기 전에 실행
            clearTimeout(timer);
        }
    })

    let {id} = useParams();
    let pictureIdx = parseInt(id) + 1;
    let choiceProduct = props.shoes.find((x) => {
        return x.id = id;
    })
    return (
        <div className="container">
            {
                alert == true 
                ? 
                <div className="alert alert-warning">
                    2초이내 구매 시 할인
                </div>
                : 
                null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={'https://codingapple1.github.io/shop/shoes'+ pictureIdx +'.jpg'} width="100%" />
                </div>
                <div>
                    <div>
                        <p>경고 : 숫자만 입력하세요.</p>
                    </div>
                    <input onChange={InputCheckNumber}></input>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{choiceProduct.title}</h4>
                    <p>{choiceProduct.content}</p>
                    <p>{choiceProduct.price}원</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>

            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={() => { setTabNum(0) }}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={() => { setTabNum(1) }}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={() => { setTabNum(2) }}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tabNum={tabNum}></TabContent>
        </div> 
    )
}

function InputCheckNumber(e) {
    if(isNaN(e.target.value) == true){
        alert('숫자를 입력해주세요');
    }
}

function TabContent(props){
    let {재고} = useContext(Context1)
    const arr = [ <div>{재고[0]}</div>, <div>{재고[1]}</div>, <div>{재고[2]}</div>]
    let [fade, setFade] = useState('');
    useEffect(() => {
        let a = setTimeout(() => {
            setFade('end')
        }, 100);
        
        return ()=>{
            clearTimeout(a)
            setFade('')
        }
    }, [props.tabNum])

    return (<div className={'start ' + fade}> {arr[props.tabNum]} </div>)
}


export default Detail;


