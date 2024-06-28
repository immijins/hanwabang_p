import MainLayout from '../layouts/MainLayout';
import './css/main.css'
import {Link} from "react-router-dom";

import logo_intro from '../pages/img/logo_intro.png'
import order_1 from '../pages/img/order_1.jpg'
import order_2 from '../pages/img/order_2.jpg'
import order_3 from '../pages/img/order_3.jpg'
import class_1 from '../pages/img/class_1.jpg'
import class_2 from '../pages/img/class_2.jpg'
import class_3 from '../pages/img/class_3.jpg'
import class_4 from '../pages/img/class_4.jpg'
import Main_banner from './img/main_banner.jpg'
import inst_1 from "./img/inst_1.jpg"
import inst_2 from "./img/inst_2.jpg"
import inst_3 from "./img/inst_3.jpg"
import inst_4 from "./img/inst_4.jpg"
import inst_5 from "./img/inst_5.jpg"
import Main_notice from "./Main_notice";

const Main = () => {
    return (
        <MainLayout>
            {/* 1. 메인배너 */}
            <article className='main_banner'>
                <div className='banner'>
                    <img src={Main_banner}/>
                </div>
                <div className='intro_dec'></div>
            </article>

            {/* 2. 소개 */}
            <article className='main_intro'>
                <div>
                    <div>
                        <span>맛과 멋을 담아 드리는,&nbsp;</span>
                        <span>한과방</span>
                    </div>
                    <div>
                        <p>전통의 맛과 멋을 담아낸 손떡, 한과 그리고 요리수업으로 여러분을 맞이합니다.</p>
                        <br/>
                        <p>손떡의 부드럽고 고소한 맛, 한과의 정성가득한 솜씨,<br/>
                            그리고 전통의 기술을 전수하는 요리수업은 고요한 시간 속에서 고요한 맛의 여행을 약속합니다.<br/>
                            우리의 손길은 과거로부터 전해져 온 전통의 향기를 간직하며, 당신에게 맛과 멋의 조화를 선사합니다. </p>
                        <br/>
                        <p>
                            한입에 전통의 감동을 만끽하며,<br/>
                            함께하는 시간이 소중한 순간이 되길 바랍니다.
                        </p>
                        <div>
                            <img src={logo_intro} alt='한과방'/>
                        </div>
                    </div>
                </div>
                <div className='line_dec'></div>
            </article>

            {/* 3. 주문/판매 */}
            <article className='main_order'>
                <div>
                    <p className='title'>본연의 맛과 향,</p>
                    <div className='order_content'>
                        <Link to={'/order/rice'}>
                            <div className='order top_80'>
                                <div>
                                    <div className="main_order_hover"></div>
                                    <img src={order_1} alt='전통 떡/한과'/>
                                </div>
                                <div>
                                    <p>전통 떡/한과</p>
                                    <p>한국의 전통적인 맛과 정성이 담긴 떡과 한과</p>
                                </div>
                            </div>
                        </Link>
                        <Link to={'/order/give'}>
                            <div className='order top_20'>
                                <div>
                                    <div className="main_order_hover"></div>
                                    <img src={order_2} alt='행사 답례/선물'/>
                                </div>
                                <div>
                                    <p>행사 답례/선물</p>
                                    <p>소중한 분들에게 전하는 특별한 답례와 선물</p>
                                </div>
                            </div>
                        </Link>
                        <Link to={'/order/celebrate'}>
                            <div className='order top_100'>
                                <div>
                                    <div className="main_order_hover"></div>
                                    <img src={order_3} alt='돌, 백일, 생신 기념'/>
                                </div>
                                <div>
                                    <p>돌, 백일, 생신 기념</p>
                                    <p>아름다운 순간을 위해 정성 담은 고운 조각</p>
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
            </article>

            {/* 4. 수업/체험 */}
            <article className='main_class'>
                <div className='line_dec'></div>
                <div>
                    <p className='title'>오랜 전통의 맛과 현대 감각,</p>
                    <div className='main_class_content'>
                        <Link to={'/class/special'}>
                            <div className='main_class_box'>
                                <div>
                                    <img src={class_1} alt='떡/한과 전문과정'/>
                                </div>
                                <p>떡/한과 전문과정</p>
                            </div>
                        </Link>
                        <Link to={'/class/special'}>
                            <div className='main_class_box'>
                                <div>
                                    <img src={class_2} alt='카페 디저트'/>
                                </div>
                                <p>카페 디저트</p>
                            </div>
                        </Link>
                        <Link to={'/class/special'}>
                            <div className='main_class_box'>
                                <div>
                                    <img src={class_3} alt='요리 클래스'/>
                                </div>
                                <p>요리 클래스</p>
                            </div>
                        </Link>
                        <Link to={'/class/special'}>
                            <div className='main_class_box'>
                                <div>
                                    <img src={class_4} alt='단체체험/출강수업'/>
                                </div>
                                <p>단체체험/출강수업</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </article>

            {/* 5. 공지사항 */}
            <article className='main_notice'>
                <Main_notice/>
            </article>

            {/* 6. 인스타그램 */}
            <article className='main_instagram'>
                <section className='main_inst_section'>
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/hangwabang/">
                                <img src={inst_1}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/hangwabang/">
                                <img src={inst_2}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/hangwabang/">
                                <img src={inst_3}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/hangwabang/">
                                <img src={inst_4}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/hangwabang/">
                                <img src={inst_5}/>
                            </a>
                        </li>
                    </ul>
                </section>
            </article>
        </MainLayout>
    )
}

export default Main;