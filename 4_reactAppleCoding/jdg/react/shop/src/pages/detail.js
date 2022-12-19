import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';

let YellowButton = styled.button`
    background: ${props => props.bg};
    color: ${props => props.bg == 'blue' ? 'white' : 'black'};
    padding: 10px;
`

let Box = styled.div`
    background: grey;
    padding: 20px;
`


// 옛날 방식
class Detail2 extends React.Component {
    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }
}



function Detail({ props, shoes }) {

    const { id } = useParams();
    const findShoe = shoes.find(x => x.id == id);

    const [count, setCount] = useState(0);
    const [alertMsg, setAlertMsg] = useState(true);
    const [num, setNum] = useState("");
    const [tab, setTab] = useState(0);

    const [fade2, setFade2] = useState('');

    useEffect(() => {
        setFade2('end');

        return () => {
            setFade2('');
        }
    }, [])

    useEffect(() => {
        if (isNaN(num) == true) {
            alert("숫자만 입력하세요");
        }
    }, [num])

    // hook
    useEffect(() => {
        // mount, update 시 여기 코드 실행

        const a = setTimeout(() => { setAlertMsg(false) }, 2000);

        return () => { clearTimeout(a) }; // useEffect 동작 전에 실행되는 구문

    }, []) // dependency

    return (
        <div className={`container start ${fade2}`}>
            {
                alertMsg == true ? <div className='alert alert-warning'>
                    2초 이내 구매시 할인
                </div> : null
            }

            <input onChange={e => setNum(e.target.value)} />

            {count}
            <button onClick={() => { setCount(count + 1) }}>버튼</button>
            <YellowButton bg="blue">버튼</YellowButton>
            <YellowButton bg="orange">버튼</YellowButton>
            <Box>박스</Box>
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${findShoe.id + 1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{findShoe.title}</h4>
                    <p>{findShoe.content}</p>
                    <p>{findShoe.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(0)} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(1)} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(2)} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab} />
        </div>
    );
}

function TabContent({ tab }) {

    const [fade, setFade] = useState('');

    useEffect(() => {
        const a = setTimeout(() => {
            setFade('end');
        }, 100);

        return () => {
            clearTimeout(a);
            setFade('');
        }
    }, [tab])

    return (<div className={`start ${fade}`}>
        {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>)
}

export default Detail;