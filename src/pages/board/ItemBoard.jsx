//import 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';
// import React, {useState} from 'react';	화면 상태관리
// import { useSearchParams} from 'react-router-dom';	파라미터값사용하는 라우터

//import 컴포넌트

//import css
import '../../css/board.css';


const ItemBoard = (props) => {

	/*---일반 변수 --------------------------------------------*/

	/*---라우터 관련------------------------------------------*/

	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const {board} = props;

	/*---일반 메소드 -----------------------------------------*/

	/*---생명주기 + 이벤트 관련 메소드 ----------------------*/


    return (
        <>
            <tr class="last">
                <td>{board.no}</td>
                <td className="text-left"><Link to="#" rel="noreferrer noopener">{board.title}</Link></td>
                <td>{board.name}</td>
                <td>{board.hit}</td>
                <td>{board.regDate}</td>
                <td><Link to="" rel="noreferrer noopener">[삭제]</Link></td>
            </tr>
        </>
    );
}

export default ItemBoard;