import { Link, useLocation } from "react-router-dom";
import '../../pages/css/all.css'
import './Menu.css'

const SideMenu = ({title, items}) => {
    const location = useLocation(); // 현재 경로

    return (
        <aside>
            <ul>
                <li className="side_title">{title}</li>
                {items.map((item, index) => (
                    <li key={index} className={`side_txt ${location.pathname === item.path ? 'active' : ''}`}>
                        <Link to={item.path}>
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default SideMenu;