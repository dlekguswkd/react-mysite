//import 라이브러리
import React, {useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';	
import axios from 'axios';
// import { useSearchParams} from 'react-router-dom';	파라미터값사용하는 라우터

//import 컴포넌트
import Header from '../include/Header';
import Footer from '../include/Footer';

//import css
import '../../css/guestbook.css';


const DeleteForm = () => {

	/*---일반 변수 --------------------------------------------*/

	/*---라우터 관련------------------------------------------*/
    const navigate = useNavigate();
    const {no} = useParams();
    console.log("Received no:", no);

	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const [pw, setPw] = useState('');

	/*---일반 메소드 -----------------------------------------*/

	/*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    // 패스워드
    const handlePw = (e)=> {
        setPw(e.target.value);
    }

    // 삭제버튼 눌렀을때
    const handleDelete = (e)=> {
        e.preventDefault();

        let guestVo  = {
            password: pw
        }
        console.log(guestVo );

        // 서버로 데이터 전송
        axios({
            method: 'delete', // put, post, delete
            url: `http://localhost:9000/api/guestbooks/${no}`,

            headers: { "Content-Type": "application/json; charset=utf-8" }, 	// post put

            data: guestVo , // put, post, JSON(자동변환됨)

            responseType: 'json' //수신타입 받을때
        }).then(response => {
            console.log(response); //수신데이타

            if(response.data.result === 'success') {
                navigate('/guestbook/addlist');
            }else {
                alert("비밀번호를 확인해주세요.")
            }

        }).catch(error => {
            console.log(error);
        });

    }


    return (
        <>
            <div id="wrap">

                {/* <!-- header + nav import --> */}
                <Header />
                {/* <!-- //header + nav --> */}

                <div id="container" className="clearfix">
                    <div id="aside">
                        <h2>방명록</h2>
                        <ul>
                            <li>일반방명록</li>
                            <li>ajax방명록</li>
                        </ul>
                    </div>
                    {/* <!-- //aside --> */}

                    <div id="content">
                    
                        <div id="content-head">
                            <h3>일반방명록</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>방명록</li>
                                    <li className="last">일반방명록</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/* <!-- //content-head --> */}

                        <div id="guestbook">
                            <form action="" method="" onSubmit={handleDelete}>
                                <table id="guestDelete">
                                    <colgroup>
                                        <col style={{width: '10%'}} />
                                        <col style={{width: '40%'}} />
                                        <col style={{width: '25%'}} />
                                        <col style={{width: '25%'}} />
                                    </colgroup>
                                    <tr>
                                        <td>비밀번호</td>
                                        <td><input type="password" name="password" value={pw} onChange={handlePw} /></td>
                                        <td className="text-left"><button type="submit">삭제</button></td>
                                        <td><Link to="/" rel="noreferrer noopener">[메인으로 돌아가기]</Link></td>
                                    </tr>
                                </table>
                                <input type='hidden' name="" value="" />
                                <input type='hidden' name="" value="" />
                            </form>
                            
                        </div>
                        {/* <!-- //guestbook --> */}
                    </div>
                    {/* <!-- //content  --> */}

                </div>
                {/* <!-- //container  --> */}

                {/* <!-- footer import -->  */}
                <Footer />
                {/* <!-- //footer -->  */}

            </div>
            {/* <!-- //wrap --> */}
        </>
    );
}

export default DeleteForm;