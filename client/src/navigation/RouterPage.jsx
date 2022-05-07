import { App } from "../App";
import { News } from '../pages/News/News';
import { Home } from '../pages/Home/Home';
import { Services } from '../pages/Services/Services';
import { Documents } from '../pages/Documents/Documents';
import { Workers } from '../pages/Workers/Workers';
import { WorkerInfo } from '../pages/WorkerInfo/WorkerInfo';
import { About } from '../pages/About/About';
import { Vacancy } from '../pages/Vacancy/Vacancy';
import { Reviews } from '../pages/Reviews/Reviews';

import {
    Routes,
    Route,
  } from "react-router-dom";

export const RouterPage = () => {
    return (
        <Route path='/' element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="services" element={<Services />} />
            <Route path="documents" element={<Documents />} />
            <Route path="workers" element={<Workers />} />
            <Route path="workers/:id" element={<WorkerInfo />} />
            <Route path="about" element={<About />} />
            <Route path="vacancy" element={<Vacancy />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="*" element={<Home to="" />} />
        </Route>
    );
}