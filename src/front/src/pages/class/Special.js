import Layout from "../../layouts/Layout";
import SideMenu from "../../components/menu/SideMenu";
import './class.css'
import Class_tit_1 from "../img/class/class_tit_1.png"
import Class_tit_2 from "../img/class/class_tit_2.png"
import Class_tit_3 from "../img/class/class_tit_3.png"
import Special_img_1 from "../img/class/special/special_img_1.jpg"
import Special_img_2 from "../img/class/special/special_img_2.jpg"
import Special_img_3 from "../img/class/special/special_img_3.jpg"
import Special_class_1 from "../img/class/special/special_class_1.jpg"
import Special_class_2 from "../img/class/special/special_class_2.jpg"
import Special_class_3 from "../img/class/special/special_class_3.jpg"
import Special_class_4 from "../img/class/special/special_class_4.jpg"
import Special_class_5 from "../img/class/special/special_class_5.jpg"
import Special_class_6 from "../img/class/special/special_class_6.jpg"

const items = [
    {text: '떡/한과 전문과정', path: '/class/special'},
    {text: '카페 디저트', path: '/class/dessert'},
    {text: '요리 클래스/자격증', path: '/class/cook'},
    {text: '단체체험/출강', path: '/class/experience'}
]

const Special = () => {
    return (
        <Layout>
            <main className='special_main'>
                <SideMenu title="수업/체험" items={items}/>

                <section>
                    {/* 타이틀 */}
                    <article className="class_tit">
                        <p>떡/한과 전문과정</p>
                        <p>
                            전통의 맛과 멋을 담은 떡/한과,<br/>
                            떡과 한과에 대한 기본기부터 여러가지 활용을 직접 배워보실 수 있습니다.
                        </p>
                    </article>

                    {/* 이미지 갤러리 */}
                    <article className="class_imgs">
                        <div>
                            <img src={Special_img_1} alt="한과방 송편"/>
                        </div>
                        <div>
                            <img src={Special_img_2} alt="한과방 돌 백일상"/>
                        </div>
                        <div>
                            <img src={Special_img_3} alt="한과방 폐백 이바지"/>
                        </div>
                    </article>

                    {/* 이미지 + 수업내용 */}
                    <article className="class_txt">
                        {/* 떡 */}
                        <div className="class_box">
                            <p className="class_txt_tit">
                                <img src={Class_tit_1}/>
                            </p>
                            <div>
                                <div>
                                    <img src={Special_class_1} alt="한과방 꽃송편"/>
                                </div>
                                <div>
                                    <img src={Special_class_2} alt="한과방 인절미"/>
                                </div>
                            </div>

                            <p>맵쌀과 찹쌀을 이용하여 떡의 기본기와 활용을 배워 첨가물과 방부제가 없는 건강한 떡 만드는 과정</p>
                            <div>
                                <p>
                                    <span className="class_txt_de">절편류 :</span> 절편을 활용한 떡, 꽃절편, 바람떡 등 <span className="class_txt_de">| 설기류 :</span>  잣설기, 단호박, 흑임자 설기 등<br/>
                                    <span className="class_txt_de">꽃송편 :</span> 여러가지 과일병 <span className="class_txt_de">| 쑥떡류 :</span> 쑥구리단자, 인절미, 쑥 찹쌀떡, 쑥갠떡 등<br/>
                                    <span className="class_txt_de">단자류 :</span> 흑미단자, 사과단자, 고구마단자 <span className="class_txt_de">| 대추고 활용 떡 : </span>약식, 대추단자, 잡과단자<br/>
                                    <span className="class_txt_de">고물떡류 :</span> 두텁떡, 두텁편, 거피시루떡 <span className="class_txt_de">| 찰떡류 : </span>호두찰편, 구름떡, 영양찰떡<br/>
                                    <span className="class_txt_de">개성주악, 증편 : </span>흑임자, 감태 응용 <span className="class_txt_de">| 경단류 : </span>기본 및 여러가지 경단 수업
                                </p>
                            </div>

                            <div className="class_button">
                                <a href="https://pf.kakao.com/_kdBwG" target="_blank">수업 문의</a>
                            </div>
                        </div>

                        {/* 한과 */}
                        <div className="class_box">
                            <p className="class_txt_tit">
                                <img src={Class_tit_2}/>
                            </p>
                            <div>
                                <div>
                                    <img src={Special_class_3} alt="한과방 수제육포"/>
                                </div>
                                <div>
                                    <img src={Special_class_4} alt="한과방 모듬한과"/>
                                </div>
                            </div>

                            <p>오랜 시간 정성과 마음을 가득 담아 완성되는 한과, 강정, 정과들을 만드는 과정</p>
                            <div>
                                <p>
                                    <span className="class_txt_de">기본란 만들기와 활용 :</span> 율란, 조란, 강란 등<br/>
                                    <span className="class_txt_de">유밀과 만들기 :</span> 멸치, 새우, 꽃 매작과, 차수과, 응용 등<br/>
                                    <span className="class_txt_de">전통 약과 :</span> 개성약과, 응용 등<br/>
                                    <span className="class_txt_de">정과 :</span> 인삼, 도라지, 더덕 / 과일, 채소, 견과류를 이용한 정과<br/>
                                    <span className="class_txt_de">강정류 : </span> 곡류를 이용한 정과<br/>
                                    <span className="class_txt_de">수제육포 수업, 곶감오림 : </span> 새우, 전복포 활용<br/>
                                    <span className="class_txt_de">구절판 꾸미기</span> : 각종 란 만들기 <br/>
                                    <span className="class_txt_de">음청류 : </span> 생강청, 오미자 화채, 레몬청 등 <br/>
                                </p>
                            </div>

                            <div className="class_button">
                                <a href="https://pf.kakao.com/_kdBwG" target="_blank">수업 문의</a>
                            </div>
                        </div>

                        {/* 창업과정 */}
                        <div className="class_box">
                            <p className="class_txt_tit">
                                <img src={Class_tit_3}/>
                            </p>
                            <div>
                                <div>
                                    <img src={Special_class_5} alt="한과방 돌 백일상"/>
                                </div>
                                <div>
                                    <img src={Special_class_6} alt="한과방 이바지"/>
                                </div>
                            </div>

                            <p></p>
                            <div>
                                <p>
                                    <span className="class_txt_de">
                                        통과의례 상차림 | 돌 백일 상차림<br/>
                                        상 장례 차림 | 떡 한과 전문가 과정 | 폐백, 이바지
                                    </span>
                                </p>
                            </div>

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

export default Special;