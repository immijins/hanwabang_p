import {Link} from "react-router-dom";
import '../../pages/css/all.css'
import './Footer.css'
import Icon_inst from "../../pages/img/icon_inst.png"
import Icon_blog from "../../pages/img/icon_blog.png"
import Icon_talk from "../../pages/img/icon_talk.png"

import footer_logo from '../../pages/img/footer_logo.png'

const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                    <a href="https://www.instagram.com/hangwabang/" target="_blank">
                        <img src={Icon_inst}/>
                    </a>
                    <a href="https://blog.naver.com/hangwabang_" target="_blank">
                        <img src={Icon_blog}/>
                    </a>
                    <a href="https://pf.kakao.com/_kdBwG" target="_blank">
                        <img src={Icon_talk}/>
                    </a>
                </div>
                <ul>
                    <li>상호명 : 한과방 &nbsp;&nbsp;&nbsp; 사업자등록번호 : 889-04-00212 &nbsp;&nbsp;&nbsp; 주소 : 경상북도 경주시 동천로 30번길 12-9 &nbsp;&nbsp;&nbsp; 전화번호 : 054-742-1911</li>
                    <li>Copyright ⓒ HANGWABANG All RIght Reserved</li>
                </ul>
                <div>
                    <img src={footer_logo}/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;