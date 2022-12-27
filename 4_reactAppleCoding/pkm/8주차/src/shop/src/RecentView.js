
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
    return (
        <>
        <div className='recentTitle'>
        최근본 상품
        </div>
        <div className='recentSub'>
        <Container>
            <Row md={3}>
                {
                    copyLocalStorage.map(function (obj, i) {
                        return (
                            <div class="col-md-4">
                             <Link to={'/detail/' + modeling[obj].id } onClick={() => { recentItem(modeling[obj].id ) }}><img className='img-main' src={'./basic' + modeling[obj].id + '.png'} width="70%" /></Link>
                            </div>
                        )
                    })
                }
            </Row>
        </Container>
        </div>
        </>
    )
}

export default RecentView;