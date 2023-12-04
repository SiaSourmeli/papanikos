import TopBar from "../top-bar/topBar";
import Header from "../header/header";
import Footer from "../footer/footer";

function Layout({ children }) {
    return (
        <>
            <TopBar />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}


 export default Layout;