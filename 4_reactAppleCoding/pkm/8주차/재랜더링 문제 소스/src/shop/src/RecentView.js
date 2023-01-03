
import './RecentView.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function RecentView({ modeling }) {
    const recentItem = (e) => {
        const watchedItems = localStorage.getItem('watched');
        const watchedItemsJson= JSON.parse(watchedItems);
        watchedItemsJson.push(e);
        const setArr = new Set(watchedItemsJson);
        const remainItems = [...setArr];
        localStorage.setItem('watched',JSON.stringify(remainItems));
        }
    const watchedItems = localStorage.getItem("watched");
    const watchedItemsJson = JSON.parse(watchedItems);
    const copyLocalStorage = [...watchedItemsJson];
    console.log(modeling)
    console.log(copyLocalStorage)
    // console.log(modeling[0].id)
    return (
        <div className='recent-main'>
        <div className='recent-title'>
        최근본 상품
        </div>
        <div className='recent-sub'>
        <Container>
            <Row md={3}>
                {
                    copyLocalStorage.map(function (obj, i) {
                        return (
                            <div key={i} className="col-md-4">
                                <img className='img-main' src={'./basic' + obj + '.png'} width="70%" />
                             {/* <Link to={'/detail/' + obj } onClick={() => { recentItem(obj ) }}><img className='img-main' src={'./basic' + obj + '.png'} width="70%" /></Link> */}
                            </div>
                        )
                    })
                }
            </Row>
        </Container>
        </div>
        </div>
    )
}

export default RecentView;