import { Home } from "../../pages/Home/Home";
import { News } from "../../pages/News/News";
import { About } from "../../pages/About/About";
import { Services } from "../../pages/Services/Services";
import { Documents } from "../../pages/Documents/Documents";
import { Workers } from "../../pages/Workers/Workers";
import { WorkerInfo }  from "../../pages/WorkerInfo/WorkerInfo"
import {
    Routes,
    Route,
    Outlet
} from "react-router-dom";
import { Reviews } from "../../pages/Reviews/Reviews";
import { Vacancy } from "../../pages/Vacancy/Vacancy";

export const MainContent = () => {
    return (
        <main className="main">
            <Outlet/>
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/services" element={<Services />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="/workers" element={<Workers />} />
                <Route path="/workers/:id" element={<WorkerInfo />} />
                <Route path="/about" element={<About />} />
                <Route path="/vacancy" element={<Vacancy />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="*" element={<Home to="/"/>}/>
            </Routes> */}
        </main>
    )
}