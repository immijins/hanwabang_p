import { Children } from "react";
import Menu from '../components/menu/Menu';
import MainMenu from "../components/menu/MainMenu";
import Footer from "../components/footer/Footer";

const Layout = ({children}) => {
    return (
        <>
            <Menu/>

            <div>
                {children}
            </div>

            <Footer/>
        </>
    )
}

export default Layout;