import Layout from "../../layouts/Layout";
import SideMenu from "../../components/menu/SideMenu";
import './class.css'
import Cook_img_1 from "../img/class/cook/cook_img_1.jpg";
import Cook_img_2 from "../img/class/cook/cook_img_2.jpg";
import Cook_img_3 from "../img/class/cook/cook_img_3.jpg";
import Class_tit_6 from "../img/class/class_tit_6.png";
import Cook_class_1 from "../img/class/cook/cook_class_1.jpg";
import Cook_class_2 from "../img/class/cook/cook_class_2.jpg";
import Class_tit_7 from "../img/class/class_tit_7.png";
import Cook_class_3 from "../img/class/cook/cook_class_3.jpg";
import Cook_class_4 from "../img/class/cook/cook_class_4.jpg";

const items = [
    {text: '떡/한과 전문과정', path: '/class/special'},
    {text: '카페 디저트', path: '/class/dessert'},
    {text: '요리 클래스/자격증', path: '/class/cook'},
    {text: '단체체험/출강', path: '/class/experience'}
]

const Cook = () => {
    return (
        <Layout>
            <main className='cook_main'>
                <SideMenu title="수업/체험" items={items}/>

                <section>
                    {/* 타이틀 */}
                    <article className="class_tit">
                        <p>요리 클래스/자격증</p>
                        <p>
                            직접 실습해보며 배우는 다양한 생활 요리부터<br/>
                            합격을 위한 1:1 지도와 모의고사까지 한번에! 요리 클래스에서 배워보실 수 있습니다

                        </p>
                    </article>

                    {/* 이미지 갤러리 */}
                    <article className="class_imgs">
                        <div>
                            <img src={Cook_img_1} alt="한과방 요리 클래스"/>
                        </div>
                        <div>
                            <img src={Cook_img_2} alt="한과방 조리 기능사"/>
                        </div>
                        <div>
                            <img src={Cook_img_3} alt="한과방 떡 제조 기능사"/>
                        </div>
                    </article>

                    {/* 이미지 + 수업내용 */}
                    <article className="class_txt">
                        {/* 음료/수제청 */}
                        <div className="class_box">
                            <p className="class_txt_tit">
                                <img src={Class_tit_6} alt="한과방 요리 클래스"/>
                            </p>
                            <div>
                                <div>
                                    <img src={Cook_class_1} alt="한과방 요리 클래스"/>
                                </div>
                                <div>
                                    <img src={Cook_class_2} alt="한과방 원데이 클래스"/>
                                </div>
                            </div>

                            <p>생활에서 활용 가능한 밑반찬과 김치특강까지 내 손으로 차리는 정갈한 밥상</p>
                            <div>
                                <p>
                                    김치특강, 생활요리, 밑반찬, 특별메뉴, 원데이클래스
                                </p>
                            </div>

                            <div className="class_button">
                                <a href="https://pf.kakao.com/_kdBwG" target="_blank">수업 문의</a>
                            </div>
                        </div>

                        {/* 떡/선물세트 */}
                        <div className="class_box">
                            <p className="class_txt_tit">
                                <img src={Class_tit_7} alt="한과방 자격증 특강"/>
                            </p>
                            <div>
                                <div>
                                    <img src={Cook_class_3} alt="한과방 조리 기능사"/>
                                </div>
                                <div>
                                    <img src={Cook_class_4} alt="한과방 떡 제조 기능사"/>
                                </div>
                            </div>

                            <p>조리 자격증의 기본기부터 실습 모의고사까지 합격을 향한 첫 걸음</p>
                            <div>
                                <p>
                                    <span className="class_txt_de">조리기능사 :</span> 한식, 양식, 일식, 중식, 복어 <span className="class_txt_de"> | 떡 제조 기능사</span>
                                </p>
                            </div>

                            <table>
                                <caption>
                                    [ 2024년 정기 기능사 실기시험 일정 ]
                                </caption>
                                <thead>
                                    <tr>
                                        <th>회차</th>
                                        <th>원서접수</th>
                                        <th>실기시험</th>
                                        <th>합격자발표</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1회</td>
                                        <td>02.05 ~ 02.08</td>
                                        <td>03.16 ~ 04.07</td>
                                        <td>04.09 / 04.17</td>
                                    </tr>
                                    <tr>
                                        <td>2회</td>
                                        <td>04.23 ~ 04.26</td>
                                        <td>06.01 ~ 06.16</td>
                                        <td>06.26 / 07.03</td>
                                    </tr>
                                    <tr>
                                        <td>특별</td>
                                        <td>05.21 ~ 05.24</td>
                                        <td>06.16 ~ 06.25</td>
                                        <td>07.03 / 07.10</td>
                                    </tr>
                                    <tr>
                                        <td>3회</td>
                                        <td>07.16 ~ 07.19</td>
                                        <td>08.17 ~ 09.03</td>
                                        <td>09.11 / 09.25</td>
                                    </tr>
                                    <tr>
                                        <td>4회</td>
                                        <td>09.30 ~ 10.04</td>
                                        <td>11.09 ~ 11.24</td>
                                        <td>12.04 / 12.11</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="class_button">
                                <a href="https://pf.kakao.com/_kdBwG" target="_blank">수업 문의</a>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </Layout>
    )
}

export default Cook;