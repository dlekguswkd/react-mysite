//import 라이브러리
import React, {useState, useEffect} from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';	
import axios from 'axios';
// import { useSearchParams} from 'react-router-dom';	파라미터값사용하는 라우터

//import 컴포넌트
import Header from '../include/Header';
import Footer from '../include/Footer';


//import css
import '../../css/board.css';


const Read = () => {

	/*---일반 변수 --------------------------------------------*/

	/*---라우터 관련------------------------------------------*/
    const { no } = useParams();
    const navigate = useNavigate();

	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    
    const [userNo, setUserNo] = useState("");
    const [name, setName] = useState("");
    const [hit, setHit] = useState("");
    const [regDate, setRegDate] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");


	/*---일반 메소드 -----------------------------------------*/

	/*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    // 로딩 -> 마운트 되었을때
    useEffect(()=>{
        console.log("마운트됐을때");
        console.log(no);

        // 서버로 no값 보내서 no데이터 받기 그리고 화면에 출력하기 
        // 서버로 데이터 전송
        axios({
            method: 'get', // put, post, delete  수정폼-> 데이터 가져오기
            url: `${process.env.REACT_APP_API_URL}/api/boards/${no}`,

            responseType: 'json' //수신타입 받을때
        }).then(response => {
            console.log(response); //수신데이타
            console.log(response.data.result); //수신데이타  성공실패
            // console.log(response.data.apiData.name); //수신데이타   수정할사람의 이름

            if(response.data.result === 'success') {
                // 성공로직
                // useSate 사용해서 값 대입
                setUserNo(response.data.apiData.userNo);
                setName(response.data.apiData.name);
                setHit(response.data.apiData.hit);
                setRegDate(response.data.apiData.regDate);
                setTitle(response.data.apiData.title);
                setContent(response.data.apiData.content);

            }else {
                // 실패로직 -> 리스트로 보내기
                navigate("/board/list");

            }

        }).catch(error => {
            console.log(error);
        }); 

    }, []); 


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
                            <div id="read">
                                <form action="#" method="get">
                                    {/* <!-- 작성자 --> */}
                                    <div className="form-group">
                                        <span className="form-text">작성자</span>
                                        <span className="form-value">{name}</span>
                                    </div>
                                    
                                    {/* <!-- 조회수 --> */}
                                    <div className="form-group">
                                        <span className="form-text">조회수</span>
                                        <span className="form-value">{hit}</span>
                                    </div>
                                    
                                    {/* <!-- 작성일 --> */}
                                    <div className="form-group">
                                        <span className="form-text">작성일</span>
                                        <span className="form-value">{regDate}</span>
                                    </div>
                                    
                                    {/* <!-- 제목 --> */}
                                    <div className="form-group">
                                        <span className="form-text">제 목</span>
                                        <span className="form-value">{title}</span>
                                    </div>
                                
                                    {/* <!-- 내용 --> */}
                                    <div id="txt-content">
                                        <span className="form-value" >{content}<br /></span>
                                    </div>
                                    
                                    {
                                        (authUser.no === userNo)?(
                                            <Link to={`/board/modifyform/${no}`} rel="noreferrer noopener" id="btn_modify" >수정</Link>
                                        ):(
                                            <div></div>
                                        )
                                    }

                                    
                                    <Link to="/board/list" rel="noreferrer noopener" id="btn_modify" >목록</Link>
                                    
                                </form>
                                {/* <!-- //form --> */}
                            </div>
                            {/* <!-- //read --> */}
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

export default Read;