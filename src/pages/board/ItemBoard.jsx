//import 라이브러리
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// import { useSearchParams} from 'react-router-dom';	파라미터값사용하는 라우터

//import 컴포넌트

//import css
import '../../css/board.css';


const ItemBoard = (props) => {

	/*---일반 변수 --------------------------------------------*/

	/*---라우터 관련------------------------------------------*/

	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const {board, delBoard} = props;
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('authUser')));


	/*---일반 메소드 -----------------------------------------*/

	/*---생명주기 + 이벤트 관련 메소드 ----------------------*/


    return (
        <>
            <tr class="last">
                <td>{board.no}</td>
                <td className="text-left"><Link to={`/board/read/${board.no}`} rel="noreferrer noopener">{board.title}</Link></td>
                <td>{board.name}</td>
                <td>{board.hit}</td>
                <td>{board.regDate}</td>

                {
                    (authUser.no === board.userNo)?(
                        <td> <button type="button" onClick={() =>{return delBoard(board.no)}}>[삭제]</button></td>
                    ):(
                        <td></td>
                    )
                }
                
            </tr>
        </>
    );
}

export default ItemBoard;