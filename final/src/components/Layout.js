import Header from "../components/Header";
import Footer from "../components/Footer";

export const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}