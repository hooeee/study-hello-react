import './Detail.css';
import { useParams,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect, useState, useRef  } from "react";
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import { Context1 } from './../App.js'
import { cleanup } from '@testing-library/react';
import { addCount, addItem } from './../store.js';


function Detail({ modeling }) {
    let state = useSelector((state)=>{ return state})
    let navigate = useNavigate();
    let dispatch = useDispatch()//store.js로 요청보내주는 함수
    const { 재고 } = useContext(Context1);
    const [hidden, setHidden] = useState(true);
    const [view, setView] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [tab, setTab] = useState(0);
    const [fadeOpacity, setFadeOpacity] = useState('')
    let { id } = useParams();
    let findID = modeling.find(function (model) {
        return model.id == id;
    })// let findID = modeling.find(x => x.id ==id);
    console.log(findID);

    useEffect(()=>{
        let getItems = localStorage.getItem('watched',[findID.id])
        getItems = JSON.parse(getItems)
        getItems.push(findID.id)
        getItems = new Set(getItems)
        getItems = Array.from(getItems)
        localStorage.setItem('watched',JSON.stringify(getItems))
    },[])

    const onInputValueHandler = (input) => {
        if (isNaN(input)) {
            //alert("숫자만 입력하세요");
            setView(true);
        }
        else {
            setView(false);
            setInputValue(input);
            console.log(input);
        }
    }

    const onHidden = (() => {
        setHidden(false);
    })

    useEffect(() => {
        setFadeOpacity('end-opacity')
       const time = setTimeout(() => {
            onHidden()
        }, 2000)
        return () => {
            cleanup(time)
            setFadeOpacity('')
            setView(false);
        }
    },[hidden], [view])

    //before
    // useEffect(() => {
    //     setFadeOpacity('end-opacity')
    //     return () => {
    //         setFadeOpacity('')
    //     }
    // }, [])

    // useEffect(() => {
    //     setTimeout(() => {
    //         onHidden()
    //     }, 2000)
    //     return () => {
    //         setView(false);
    //     }
    // }, [hidden], [view])






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
                            <button className="btn btn-info" onClick={() => {
                                dispatch(addItem(findID))
                                //navigate('/cart')
                            }}>장바구니</button>
                            <button className="btn btn-danger" onClick={() => window.open(findID.link, '_blank')}>주문하기</button>
                        </div>
                    </div>
                </div>


                <Nav variant="tabs" defaultActiveKey="link0">
                    <Nav.Item>
                        <Nav.Link onClick={() => { setTab(0) }} eventKey="link0">상세정보</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">리뷰</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => { setTab(2) }} eventKey="link2">Q&A</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => { setTab(3) }} eventKey="link3">반품/교환정보</Nav.Link>
                    </Nav.Item>
                </Nav>
                <TabContent tab={tab} />
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
    );
}
    function TabContent({ tab }) {
        const [fade, setFade] = useState('')
        useEffect(() => {
            const a = setTimeout(() => { setFade('end') }, 100)
            return () => {
                clearTimeout(a)
                setFade('');
            }
        }, [tab])
        {/* <div className={'start ' + fade}> */ }
        return (
            <div className={`start ${fade}`}>
                {[<div><DetailInfomation /></div>, <div><ReviewInfomation /></div>, <div><QA /></div>, <div>준비중입니다.</div>][tab]}
            </div>
        )
    }


    function DetailInfomation() {
        return (
            <div>
                <span>
                    <h1>상품정보</h1>
                    <h3>상담 시간 19:00 ~23 :00 가능합니다</h3>
                    <p>시간당 1500원입니다. 대화 후 견적 산출 가능해요
                    모델링 파일 첨부 해주시면 화면에 시간 확인 후 결제 및 출력 시작 합니다
                    현재는 모델링은 진행하지 않습니다
                    .
                    출력물 무게에 따라 배송비 유무 있습니다

                    3d프린터 속채움 및 나머지 설정은 현재 기본 상태로 출력 예정이며 혹여 원하시는 조건 있으면 상의후 출력 해드려요

                    Fdm방식의 프린터로 약간의 오차는 생기고 면에 줄은 생길수 있는데 원래 프린터 자체출력물에 생기는 것으로 참고 바랍니다

                    가격협의 가능하고 최선을 다해서 출력해 보내드리겠습니다

                    간단한 모델링 같은 경우 치수랑 알려주시면 만들어드려요(난이도에따라 제작및 출력 2.5만원부터 시작합니다 하지만 협의에 의해 달라질수 있어요 문의 많이 주세요)

                    가격 협의 가능하니 언제든지
                    톡 환영합니다
                    자세한 문의 카카오톡  플러스아이디 검색 : dp3
                    문의 주셔도 감사하겠습니다.
                    </p>
                </span>
            </div>

        )
    }

    function ReviewInfomation() {
        const reviewer = [
            {
                username : "덕불이",
                imgSrc : "./../review1.png",
                reviewWrite: "배송도 빠르고 잘나와서 매우 만족합니다. 감사합니다. 잘쓸게요~^^",
            },
            {
                username : "HiTomorrow",
                imgSrc : "./../review0.png",
                reviewWrite: "쿠키틀 주문제작이 너무 비싸서 3d 프린팅으로 주문했는데, 모양 수정도 뚝딱 해주시고 친절하게 상담해주셔서 믿고 두 번이나 맡겼습니다! 다음에도 또 부탁드릴게요☺️",
            },
            {
                username : "영앤뤼치",
                imgSrc : "./../review2.png",
                reviewWrite: "옛날에 구매했는데 이제야 후기를 다네요ㅜㅜ여기 사장님 진짜 최고십니다. 원하는 3d모형을 만들어주실려고 드라이기로 열까지 가열해주시고 결국 정말 제가 원하는 피규어 똑같이 나왔습니다.가격도 정말싸고 최고십니다!!  다음에 또 거래하고 싶습니다~",
            },
        ]

        const ReviewList = reviewer.map((obj, i)=>(
            <Review reviewer ={reviewer} i = {i}/>
        ))

        return (
            <div>
                <div className="item-main">
                    {ReviewList}
                </div>
            </div>
        )
    }

    function QA() {
        return (
            <div>
                준비중입니다.
            </div>

        )
    }

    function Review({reviewer, i}){
        return (
            <div className="item-sub">
            <div className='username-main'>{reviewer[i].username}</div>
            <div className='image-main'>
                <img src={reviewer[i].imgSrc}></img>
            </div>
            <div className="review-main">
                {reviewer[i].reviewWrite}
            </div>
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


export default Detail;