import TopBar from "../top-bar/topBar";
import Header from "../header/header";
import Footer from "../footer/footer";
import useLocalStorage from 'use-local-storage';


function Layout({ children }) {
    const [theme] = useLocalStorage('theme', 'light')
    
    return (
        <div data-theme={theme}>
            <TopBar />
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}


 export default Layout;