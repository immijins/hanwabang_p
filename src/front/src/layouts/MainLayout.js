import MainMenu from '../components/menu/MainMenu';
import Footer from "../components/footer/Footer";

const MainLayout = ({children}) => {
    return (
        <>
            {/* 1. 상단(헤더, 메인배너) */}
            <MainMenu/>

            <div>
                {children}
            </div>

            {/* 7. 푸터 */}
            <Footer/>
        </>
    )
}

export default MainLayout;