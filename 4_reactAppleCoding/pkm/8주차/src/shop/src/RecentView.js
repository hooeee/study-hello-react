
import './RecentView.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';

function RecentView({ modeling }) {
    const watchedItems = localStorage.getItem("watched");
    const watchedItemsJson = JSON.parse(watchedItems);
    const copyLocalStorage = [...watchedItemsJson];
    console.log(modeling)
    console.log(copyLocalStorage)
    return (
        <div className='recentTitle'>
        최근본 상품
        <div className='recentSub'>
        <Container>
            <Row md={5}>
                {
                    copyLocalStorage.map(function (obj, i) {
                        return (
                            <Col md={2}>
                                <img src={'./basic' + modeling[obj].id + '.png'} width="70%" />
                            </Col>
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