import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, minusCount } from './../store.js';
import { changeName, changeAge } from './../store/userSlice.js';


function Cart() {

    let state = useSelector((state)=>{ return state})
    let dispatch = useDispatch()//store.js로 요청보내주는 함수
    //console.log(state);

    return (
        <div>
            <h6>{state.user.name}의 장바구니를 가진 사람 나이는  {state.user.age}살 입니다.</h6>
            <button onClick={()=>{
                dispatch(changeAge(10));
            }}>나이 증가 버튼</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                        <th>삭제하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    state.shoppingItems.map((obj, i)=>(
                    <tr key={i}>
                        <td>{obj.id}</td>
                        <td>{obj.name}</td>
                        <td>{obj.count}</td>
                        <td>
                            <button onClick={()=>{
                                console.log(obj.id);
                                dispatch(addCount(obj));
                                //dispatch(addCount());
                            }}>+</button>
                        </td>
                        <td>
                            <button onClick={()=>{
                                console.log(obj.id);
                                dispatch(minusCount(obj));
                                //dispatch(addCount());
                            }}>-</button>
                        </td>
                    </tr>
                    ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart