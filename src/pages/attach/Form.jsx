//import 라이브러리
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { useSearchParams} from 'react-router-dom';	파라미터값사용하는 라우터

//import 컴포넌트
import Header from '../include/Header';
import Footer from '../include/Footer';

//import css
import '../../css/gallery.css';


const Form = () => {

	/*---일반 변수 --------------------------------------------*/

	/*---라우터 관련------------------------------------------*/
    const navigate = useNavigate();

	/*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const [profileImg, setProfileImg] = useState();

	/*---일반 메소드 -----------------------------------------*/

	/*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    // 파일선택
    const handleImg = (e)=> {
        console.log("파일선택");
        setProfileImg(e.target.files[0]);   // 파일은 여러개가 들어가는경우가 있어서 배열로 관리 -> files 에 첫번째니까 [0] 0번째방

    };

    // 파일업로드
    const handleSubmit = (e)=> {
        // 이벤트 잡고
        e.preventDefault();
        console.log("전송-파일업로드");
        
        // 데이터 모으고 (묶고)
        // 이미 만들어져있는 FormData
        const formData = new FormData();
        //           이름정해주고, 담은거
        formData.append("profileImg", profileImg);
        //formData.append("name", name);    // 여러개 보낼때 그냥 이렇게 FormData에 여러개 묶어서 보내면됨

        // 서버로 데이터 전송
        axios({
            method: 'post', // 저장
            url: 'http://localhost:9000/api/attachs',

            headers: { "Content-Type": "multipart/form-data" },		//첨부파일
            data: formData, // 첨부파일 multipart방식

            responseType: 'json' //수신타입 받을때
        }).then(response => {
            // console.log(response); //수신데이타
            // console.log(response.data); //수신데이타
            
            const saveName = response.data.apiData;
            console.log(saveName);  // 저장된 이미지 파일이름

            // 결과페이지로 이동
            navigate(`/attach/result?img=${saveName}`);

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
                        <h2>갤러리</h2>
                        <ul>
                            <li><Link to="" rel="noreferrer noopener">일반갤러리</Link></li>
                            <li><Link to="" rel="noreferrer noopener">파일첨부연습</Link></li>
                        </ul>
                    </div>
                    {/* <!-- //aside --> */}

                    <div id="content">

                        <div id="content-head">
                            <h3>첨부파일연습</h3>
                            <div id="location">
                                <ul>
                                    <li>홈</li>
                                    <li>갤러리</li>
                                    <li className="last">첨부파일연습</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>
                        {/* <!-- //content-head --> */}

                        <div id="file">
                            <form action="" method="" onSubmit={handleSubmit} >
                                <table>
                                    <colgroup>
                                        <col style={{width: '600px'}} />
                                    </colgroup>

                                    <tbody>
                                        {/* <tr>
                                            <td className="text-left" ><input type="text" name="content" value="" /></td>
                                        </tr> */}
                                        <tr>
                                            <td className="text-left"><input type="file" name="file" onChange={handleImg} /></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center"><button type="submit">파일업로드</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                        {/* <!-- //file --> */}


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

export default Form;