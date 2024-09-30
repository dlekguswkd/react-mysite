//import 라이브러리
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import React, {useState} from 'react';	화면 상태관리
// import { useSearchParams} from 'react-router-dom';	파라미터값사용하는 라우터

//import 컴포넌트
import Header from '../include/Header';
import Footer from '../include/Footer';


//import css
import '../../css/board.css';


const WriteForm = () => {

	/*---일반 변수 --------------------------------------------*/

	/*---라우터 관련------------------------------------------*/

	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('authUser')));

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate();

	/*---일반 메소드 -----------------------------------------*/

	/*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleContent = (e) => {
        setContent(e.target.value);
    }

    // 저장 (등록할때)
    const handleAdd = (e)=> {
        e.preventDefault();    

        // 데이터 모으고 묶기
        const boardVo = {
            userNo: authUser.no,
            title: title,
            content: content
        }
        console.log(boardVo);

        // 서버로 데이터 전송
        axios({
            method: 'post',         // 저장 (등록)
            url: `${process.env.REACT_APP_API_URL}/api/boards`,

            headers: { "Content-Type": "application/json; charset=utf-8" }, 	// post put 보낼때

            data: boardVo, // put, post, JSON(자동변환됨)

            responseType: 'json' //수신타입 받을때
        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data); //수신데이타

            if (response.data.result ==='success') {
                // 리다이렉트
                navigate("/board/list");
            
            }else {
                alert("등록실패");
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
                        <h2>게시판</h2>
                        <ul>
                            <li><Link to="" rel="noreferrer noopener">일반게시판</Link></li>
                            <li><Link to="" rel="noreferrer noopener">댓글게시판</Link></li>
                        </ul>
                    </div>
                    {/* <!-- //aside --> */}

                    <div id="content">

                        <div id="content-head">
                            <h3>일반게시판</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>게시판</li>
                                    <li className="last">일반게시판</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/* <!-- //content-head --> */}

                        <div id="board">
                            <div id="writeForm">
                                <form action="#" method="get" onSubmit={handleAdd}>
                                    {/* <!-- 제목 --> */}
                                    <div className="form-group">
                                        <label className="form-text" for="txt-title">제목</label>
                                        <input type="text" id="txt-title" name="" value={title} onChange={handleTitle} placeholder="제목을 입력해 주세요" />
                                    </div>
                                
                                    {/* <!-- 내용 --> */}
                                    <div className="form-group">
                                        <textarea id="txt-content" value={content} onChange={handleContent} ></textarea>
                                    </div>
                                    
                                    <Link to="/board/list" rel="noreferrer noopener" id="btn_cancel">취소</Link>

                                    {
                                        (token != null)?(
                                            <button id="btn_add" type="submit" >등록</button>
                                        ):(
                                            <div></div>
                                        )
                                    }

                                </form>
                                {/* <!-- //form --> */}
                            </div>
                            {/* <!-- //writeForm --> */}
                        </div>
                        {/* <!-- //board --> */}
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

export default WriteForm;