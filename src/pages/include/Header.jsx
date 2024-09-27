//import 라이브러리
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// import { useSearchParams} from 'react-router-dom';	파라미터값사용하는 라우터

//import 컴포넌트

//import css


const Header = () => {

	/*---일반 변수 --------------------------------------------*/
    //                                 저장했던이름
    //const token = localStorage.getItem("token");
    //console.log(token);

	/*---라우터 관련------------------------------------------*/

	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const [token, setToken] = useState(localStorage.getItem('token'));  // token 가져오는방법으로 초기값잡아주기
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('authUser')));

    // console.log(authUser);  // 그냥 글자임 json이기때문에 js로 바꿔줘야함 JSON.parse 사용해서 바꿔주기
    console.log(authUser);


	/*---일반 메소드 -----------------------------------------*/

	/*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    // 로그아웃 클릭했을때
    const handleLogout = ()=> {
        console.log("로그아웃 클릭");

        // 로컬스토리지에 있는 token 삭제
        localStorage.removeItem("token");

        // 로컬스토리지에 있는 authUser 삭제
        localStorage.removeItem("authUser");

        // 화면반영을 위한 상태값 변경 (삭제)
        setToken(null);
        setAuthUser(null);
    };


    return (
        <>
            <div id="header" className="clearfix">
                <h1>
                    <Link to="" rel="noreferrer noopener" >MySite</Link>
                </h1>


                {/* 삼항연산자 */}
                {
                    (token != null)?(   // 참일때
                        // 로그인했을때 -> (로컬스토리지에 토큰이 있으면)
                        <ul>
                            <li>{authUser.name} 님 안녕하세요^^</li>
                            <li><button className="btn_s" onClick={handleLogout}>로그아웃</button></li>
                            <li><Link to="/user/modifyform" className="btn_s" rel="noreferrer noopener">회원정보수정</Link></li>
                        </ul>
                    ):(         // 거짓일때
                        <ul>
                            <li><Link to="/user/loginform" className="btn_s" rel="noreferrer noopener">로그인</Link></li>
                            <li><Link to="/user/joinform" className="btn_s" rel="noreferrer noopener">회원가입</Link></li>
                        </ul>
                    )
                }
                
            </div>

            <div id="nav">
                <ul className="clearfix">
                    <li><Link to="" rel="noreferrer noopener">입사지원서</Link></li>
                    <li><Link to="" rel="noreferrer noopener">게시판</Link></li>
                    <li><Link to="/attach/form" rel="noreferrer noopener">갤러리</Link></li>
                    <li><Link to="" rel="noreferrer noopener">방명록</Link></li>
                </ul>
            </div>
            {/* <!-- //nav --> */}

        </>
    );
}

export default Header;