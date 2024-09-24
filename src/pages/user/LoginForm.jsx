//import 라이브러리
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { useSearchParams} from 'react-router-dom';	파라미터값사용하는 라우터

//import 컴포넌트

//import css
import '../../css/user.css';


const LoginForm = () => {

	/*---일반 변수 --------------------------------------------*/

	/*---라우터 관련------------------------------------------*/

	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const navigate = useNavigate();


	/*---일반 메소드 -----------------------------------------*/

	/*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    // 아이디
    const handleId = (event)=> {
        setId(event.target.value);
    }

    // 패스워드
    const handlePw = (event)=> {
        setPw(event.target.value);
    }

    // 로그인버튼 클릭했을때
    const handleLogin = (e)=> {
        e.preventDefault(); 

        const userVo= {
            id: id,
            password: pw
        }
        console.log(userVo);

        // 서버로 데이터 전송
        axios({
            method: 'post', // put, post, delete
            url: 'http://localhost:9000/api/user',

            headers: { "Content-Type": "application/json; charset=utf-8" }, 	// post put

            data: userVo, // put, post, JSON(자동변환됨)


            responseType: 'json' //수신타입 받을때
        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data); //수신데이타

            if (response.data.result ==='success') {
                // 리다이렉트
                navigate("/");         // --------------------------------------------------------------
                //alert("로그인성공")
            }else {
                alert("로그인실패");
            }

        }).catch(error => {
            console.log(error);
        });

    };


    return (
        <>
            <div id="wrap">

                <div id="header" className="clearfix">
                    <h1>
                        <Link to="" rel="noreferrer noopener">MySite</Link>
                    </h1>

                    {/* <!-- 
                    <ul>
                        <li>황일영 님 안녕하세요^^</li>
                        <li><Link to="" rel="noreferrer noopener" class="btn_s">로그아웃</Link></li>
                        <li><Link to="" rel="noreferrer noopener" class="btn_s">회원정보수정</Link></li>
                    </ul>
                    -->	 */}
                    <ul>
                        <li><Link to="" rel="noreferrer noopener" class="btn_s">로그인</Link></li>
                        <li><Link to="" rel="noreferrer noopener" class="btn_s">회원가입</Link></li>
                    </ul>
                    
                </div>
                {/* <!-- //header --> */}

                <div id="nav">
                    <ul className="clearfix">
                        <li><Link to="" rel="noreferrer noopener">입사지원서</Link></li>
                        <li><Link to="" rel="noreferrer noopener">게시판</Link></li>
                        <li><Link to="" rel="noreferrer noopener">갤러리</Link></li>
                        <li><Link to="" rel="noreferrer noopener">방명록</Link></li>
                    </ul>
                </div>
                {/* <!-- //nav --> */}

                <div id="container" className="clearfix">
                    <div id="aside">
                        <h2>회원</h2>
                        <ul>
                            <li>회원정보</li>
                            <li>로그인</li>
                            <li>회원가입</li>
                        </ul>
                    </div>
                    {/* <!-- //aside --> */}

                    <div id="content">
                    
                        <div id="content-head">
                            <h3>로그인</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>회원</li>
                                    <li className="last">로그인</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/* <!-- //content-head --> */}

                        <div id="user">
                            <div id="loginForm">
                                <form action="" method="" onSubmit={handleLogin}>

                                    {/* <!-- 아이디 --> */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-uid">아이디</label> 
                                        <input type="text" id="input-uid" name="" value={id} onChange={handleId} placeholder="아이디를 입력하세요" />
                                    </div>

                                    {/* <!-- 비밀번호 --> */}
                                    <div className="form-group">
                                        <label className="form-text" htmlFor="input-pass">비밀번호</label> 
                                        <input type="text" id="input-pass" name="" value={pw} onChange={handlePw} placeholder="비밀번호를 입력하세요" />
                                    </div>

                                    
                                    {/* <!-- 버튼영역 --> */}
                                    <div className="button-area">
                                        <button type="submit" id="btn-submit">로그인</button>
                                    </div>
                                    
                                </form>
                            </div>
                            {/* <!-- //loginForm --> */}
                        </div>
                        {/* <!-- //user --> */}
                    </div>
                    {/* <!-- //content  --> */}
                    
                </div>
                {/* <!-- //container  --> */}

                <div id="footer">
                    Copyright ⓒ 2020 황일영. All right reserved
                </div>
                {/* <!-- //footer --> */}

            </div>
            {/* <!-- //wrap --> */}

        </>
    );
}

export default LoginForm;