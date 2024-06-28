import Layout from "../../layouts/Layout";
import SideMenu from "../../components/menu/SideMenu";
import './class.css'
import Exp_img_1 from "../img/class/exp/exp_img_1.jpg";
import Exp_img_2 from "../img/class/exp/exp_img_2.jpg";
import Exp_img_3 from "../img/class/exp/exp_img_3.jpg";
import Class_tit_8 from "../img/class/class_tit_8.png";
import Exp_class_1 from "../img/class/exp/exp_class_1.jpg";
import Exp_class_2 from "../img/class/exp/exp_class_2.jpg";

const items = [
    {text: '떡/한과 전문과정', path: '/class/special'},
    {text: '카페 디저트', path: '/class/dessert'},
    {text: '요리 클래스/자격증', path: '/class/cook'},
    {text: '단체체험/출강', path: '/class/experience'}
]

const Experience = () => {
    return (
        <Layout>
            <main className='experience_main'>
                <SideMenu title="수업/체험" items={items}/>

                <section>
                    {/* 타이틀 */}
                    <article className="class_tit">
                        <p>단체체험/출강</p>
                        <p>
                            내 손으로 직접 만드는 전통 디저트와 요리,<br/>
                            한과방에서 한식 디저트류와 요리 클래스를 진행합니다
                        </p>
                    </article>

                    {/* 이미지 갤러리 */}
                    <article className="class_imgs">
                        <div>
                            <img src={Exp_img_1} alt="한과방 아동 체험 요리"/>
                        </div>
                        <div>
                            <img src={Exp_img_2} alt="한과방 아동 체험 요리"/>
                        </div>
                        <div>
                            <img src={Exp_img_3} alt="한과방 아동 체험 요리"/>
                        </div>
                    </article>

                    {/* 이미지 + 수업내용 */}
                    <article className="class_txt">
                        {/* 음료/수제청 */}
                        <div className="class_box">
                            <p className="class_txt_tit">
                                <img src={Class_tit_8} alt="한과방 아동 단체체험 출강"/>
                            </p>
                            <div>
                                <div>
                                    <img src={Exp_class_1} alt="한과방 아동 요리"/>
                                </div>
                                <div>
                                    <img src={Exp_class_2} alt="한과방 아동 체험"/>
                                </div>
                            </div>

                            <p>체험 활동을 통해 요리와 더욱 친근해지고 꿈과 창의력을 향상시킵니다</p>
                            <div>
                                <p>
                                    <span className="class_txt_de">디저트체험 :</span> 송편, 강정, 수정과 등 전통 한식 디저트류<br/>
                                    <span className="class_txt_de">요리체험 :</span> 소떡소떡, 궁중떡볶이, 샌드위치, 만두, 비빔밥 등
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

export default Experience;