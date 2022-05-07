import { Header } from "../navigation/RouterConfig";
import { MainContent } from "../components/Main/MainContent";
import { Footer } from "../components/Footer/Footer";
const Main = () => {
    return (
        <section className="page">
            <Header />
            <MainContent />
            <Footer />
        </section>
    );
}
export default Main;