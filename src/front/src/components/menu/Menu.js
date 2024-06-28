import { Link } from "react-router-dom";
import '../../pages/css/all.css'
import './Menu.css'
import subLogo from "../../pages/img/logo.png";
import Menu_bar from "../../pages/img/icon_menu.png";
import React, {useState} from "react";

const Menu = () => {
    // 모바일 메뉴 상태
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    }

    return (
        <header className='sub_header'>
            <div className="s_header_pc">
                <div className='sub_logo'>
                    <Link to={'/'}>
                        <img src={subLogo} alt="logo"/>
                    </Link>
                </div>

                <nav>
                    <div>
                        <ul>
                            <li><Link to={'/story/intro'}>한과방이야기</Link></li>
                            <li><Link to={'/order/rice'}>주문/판매</Link></li>
                            <li><Link to={'/class/special'}>수업/체험</Link></li>
                            <li><Link to={'/notice'}>공지사항</Link></li>
                        </ul>
                        <a href="https://pf.kakao.com/_kdBwG" target="_blank" rel="noopener noreferrer">문의하기</a>
                    </div>
                </nav>
            </div>

            <div className="header_m">
                <div onClick={toggleMobileMenu}>
                    <img src={Menu_bar}/>
                </div>
                <div className={`header_m_menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <p className="header_m_close" onClick={closeMobileMenu}>
                        <span>&times;</span>
                    </p>
                    <ul className="header_m_nav">
                        <li>
                            <Link to={'/'} onClick={closeMobileMenu}>
                                <img src={subLogo}/>
                            </Link>
                        </li>
                        <li><Link to={'/story/intro'} onClick={closeMobileMenu}>한과방이야기</Link></li>
                        <li><Link to={'/order/rice'} onClick={closeMobileMenu}>주문/판매</Link></li>
                        <li><Link to={'/class/special'} onClick={closeMobileMenu}>수업/체험</Link></li>
                        <li><Link to={'/notice'} onClick={closeMobileMenu}>공지사항</Link></li>
                        <li>
                            <a href="https://pf.kakao.com/_kdBwG" target="_blank" onClick={closeMobileMenu}>
                                문의하기
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="header_m_logo">
                    <Link to={'/'}>
                        <img src={subLogo}/>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Menu;