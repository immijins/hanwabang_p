import Layout from "../../layouts/Layout";
import SideMenu from "../../components/menu/SideMenu";
import './class.css'
import Dessert_img_1 from "../img/class/dessert/dessert_img_1.jpg";
import Dessert_img_2 from "../img/class/dessert/dessert_img_2.jpg";
import Dessert_img_3 from "../img/class/dessert/dessert_img_3.jpg";
import Class_tit_4 from "../img/class/class_tit_4.png";
import Dessert_class_1 from "../img/class/dessert/dessert_class_1.jpg";
import Dessert_class_2 from "../img/class/dessert/dessert_class_2.jpg";
import Class_tit_5 from "../img/class/class_tit_5.png";
import Dessert_class_3 from "../img/class/dessert/dessert_class_3.jpg";
import Dessert_class_4 from "../img/class/dessert/dessert_class_4.jpg";

const items = [
    {text: '떡/한과 전문과정', path: '/class/special'},
    {text: '카페 디저트', path: '/class/dessert'},
    {text: '요리 클래스/자격증', path: '/class/cook'},
    {text: '단체체험/출강', path: '/class/experience'}
]

const Dessert = () => {
    return (
        <Layout>
            <main className='dessert_main'>
                <SideMenu title="수업/체험" items={items}/>

                <section>
                    {/* 타이틀 */}
                    <article className="class_tit">
                        <p>카페 디저트 수업</p>
                        <p>
                            전통 디저트의 깊은 맛을 배우는 시간,<br/>
                            정성 가득한 디저트의 색다른 레시피를 직접 배우고 만들어보실 수 있습니다
                        </p>
                    </article>

                    {/* 이미지 갤러리 */}
                    <article className="class_imgs">
                        <div>
                            <img src={Dessert_img_1} alt="한과방 두텁떡"/>
                        </div>
                        <div>
                            <img src={Dessert_img_2} alt="한과방 약과"/>
                        </div>
                        <div>
                            <img src={Dessert_img_3} alt="한과방 대추 단자"/>
                        </div>
                    </article>

                    {/* 이미지 + 수업내용 */}
                    <article className="class_txt">
                        {/* 음료/수제청 */}
                        <div className="class_box">
                            <p className="class_txt_tit">
                                <img src={Class_tit_4} alt="한과방 음료 수제청"/>
                            </p>
                            <div>
                                <div>
                                    <img src={Dessert_class_1} alt="한과방 수제청"/>
                                </div>
                                <div>
                                    <img src={Dessert_class_2} alt="한과방 오미자차"/>
                                </div>
                            </div>

                            <p>오랜 전통의 맛을 담은 후식과 계절마다 어울리는 수제청</p>
                            <div>
                                <p>
                                    <span className="class_txt_de">수제청 :</span> 레몬청, 자두/복숭아청, 패션후루츠청<br/>
                                    <span className="class_txt_de">수제차 :</span> 오미자차, 수정과, 사과차, 대추차, 쌍화차, 십전대보탕
                                </p>
                            </div>

                            <div className="class_button">
                                <a href="https://pf.kakao.com/_kdBwG" target="_blank">수업 문의</a>
                            </div>
                        </div>

                        {/* 떡/선물세트 */}
                        <div className="class_box">
                            <p className="class_txt_tit">
                                <img src={Class_tit_5} alt="한과방 떡 선물세트"/>
                            </p>
                            <div>
                                <div>
                                    <img src={Dessert_class_3} alt="한과방 수제육포"/>
                                </div>
                                <div>
                                    <img src={Dessert_class_4} alt="한과방 다식"/>
                                </div>
                            </div>

                            <p>간단한 다식으로도, 선물 구성으로도 좋은 강정, 약과 등의 구성</p>
                            <div>
                                <p>
                                    <span className="class_txt_de">떡류 :</span> 조각설기, 영양찰편, 오븐찰떡, 송편, 쑥개떡, 약식, 수수부꾸미, 화전, 찹쌀떡<br/>
                                    <span className="class_txt_de">선물세트 :</span> 육포, 개성약과, 다식과, 감태오란다, 도넛강정, 과일강정, 견과류강정, 정과
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

export default Dessert;