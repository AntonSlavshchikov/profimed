import Main from "./pages/Main";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { News } from "./pages/News/News";
import Admin from "./Admin";
import { Home } from "./pages/Home/Home";
import { Services } from "./pages/Services/Services";
import { Documents } from "./pages/Documents/Documents";
import { Workers } from "./pages/Workers/Workers";
import { WorkerInfo } from "./pages/WorkerInfo/WorkerInfo";
import { About } from "./pages/About/About";
import { Vacancy } from "./pages/Vacancy/Vacancy";
import { Reviews } from "./pages/Reviews/Reviews";
import { AdminNews } from "./components/AdminComponents/AdminNews";
import { AdminDocuments } from "./components/AdminComponents/AdminDocuments";
import { AdminReviews } from "./components/AdminComponents/AdminReviews";
import { AdminVacancy } from "./components/AdminComponents/AdminVacancy";
import { AdminWorkers } from "./components/AdminComponents/AdminWorkers";
import { AdminNewsAdd } from "./components/AdminComponents/AdminNews/AdminNewsAdd";
import { AdminVacancyAdd } from "./components/AdminComponents/AdminVacancy/AdminVacancyAdd";
import { AdminWorkersAdd } from "./components/AdminComponents/AdminWorkers/AdminWorkersAdd";
import { AdminTypeServices } from "./components/AdminComponents/AdminTypeService";
import { AdminTypeServicesAdd } from "./components/AdminComponents/AdminTypeService/AdminTypeServiceAdd";
import { AdminServicesAdd } from "./components/AdminComponents/AdminServices/AdminServicesAdd";
import { AdminServices } from "./components/AdminComponents/AdminServices";
import { AdminNewsEdit } from "./components/AdminComponents/AdminNews/AdminNewsEdit";
import { AdminWorkersEdit } from "./components/AdminComponents/AdminWorkers/AdminWorkersEdit";
import { AdminVacancyEdit } from "./components/AdminComponents/AdminVacancy/AdminVacancyEdit";
import { AdminDocumentsAdd } from "./components/AdminComponents/AdminDocuments/AdminDocumentsAdd";
import { AdminDocumentsEdit } from "./components/AdminComponents/AdminDocuments/AdminDocumentsEdit";
import { AdminTypeAbout } from "./components/AdminComponents/AdminTypeAbout";
import { AdminTypeAboutAdd } from "./components/AdminComponents/AdminTypeAbout/AdminTypeAboutAdd";
import { AdminAbout } from "./components/AdminComponents/AdminAbout";
import { AdminAboutAdd } from "./components/AdminComponents/AdminAbout/AdminAboutAdd";
import { AdminAboutEdit } from "./components/AdminComponents/AdminAbout/AdminAboutEdit";
import { AdminTypeAboutEdit } from "./components/AdminComponents/AdminTypeAbout/AdminTypeAboutEdit";
import { Auth } from "./pages/Auth/Auth";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { Context } from "./index";
import { AdminLicenses } from "./components/AdminComponents/AdminLicenses";
import { AdminLicensesAdd } from "./components/AdminComponents/AdminLicenses/AdminLicensesAdd";
import { AdminLicensesEdit } from "./components/AdminComponents/AdminLicenses/AdminLicensesEdit";
import { AdminReviewsEdit } from "./components/AdminComponents/AdminReviews/AdminReviewsEdit";
import { AdminServicesEdit } from "./components/AdminComponents/AdminServices/AdminServicesEdit";
import { AdminTypeServiceEdit } from "./components/AdminComponents/AdminTypeService/AdminTypeServiceEdit";
import { AdminAppForm } from "./components/AdminComponents/AdminAppForm";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
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
        <Route path="/login" element={<Auth />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="admin_news" element={<AdminNews />} />
          <Route path="admin_news/:id" element={<AdminNewsEdit />} />
          <Route path="admin_news/admin_news_add" element={<AdminNewsAdd />} />
          <Route path="admin_documents" element={<AdminDocuments />} />
          <Route path="admin_documents/:id" element={<AdminDocumentsEdit />} />
          <Route path="admin_documents/admin_document_add" element={<AdminDocumentsAdd />} />
          <Route path="admin_vacancy" element={<AdminVacancy />} />
          <Route path="admin_vacancy/:id" element={<AdminVacancyEdit />} />
          <Route path="admin_vacancy/admin_vacancy_add" element={<AdminVacancyAdd />} />
          <Route path="admin_reviews" element={<AdminReviews />} />
          <Route path="admin_reviews/:id" element={<AdminReviewsEdit />} />
          <Route path="admin_workers" element={<AdminWorkers />} />
          <Route path="admin_workers/:id" element={<AdminWorkersEdit />} />
          <Route path="admin_workers/admin_worker_add" element={<AdminWorkersAdd />} />
          <Route path="admin_typeservices" element={<AdminTypeServices />} />
          <Route
            path="admin_typeservices/admin_typeservices_add"
            element={<AdminTypeServicesAdd />}
          />
          <Route path="admin_typeservices/:id" element={<AdminTypeServiceEdit />} />
          <Route path="admin_services" element={<AdminServices />} />
          <Route path="admin_services/admin_services_add" element={<AdminServicesAdd />} />
          <Route path="admin_services/:id" element={<AdminServicesEdit />} />
          <Route path="admin_typeabout" element={<AdminTypeAbout />} />
          <Route path="admin_typeabout/:id" element={<AdminTypeAboutEdit />} />
          <Route path="admin_typeabout/admin_typeabout_add" element={<AdminTypeAboutAdd />} />
          <Route path="admin_about" element={<AdminAbout />} />
          <Route path="admin_about/admin_about_add" element={<AdminAboutAdd />} />
          <Route path="admin_about/:id" element={<AdminAboutEdit />} />
          <Route path="admin_licenses" element={<AdminLicenses />} />
          <Route path="admin_licenses/admin_licenses_add" element={<AdminLicensesAdd />} />
          <Route path="admin_licenses/:id" element={<AdminLicensesEdit />} />
          <Route path="admin_appform" element={<AdminAppForm />} />
          <Route path="*" element={<AdminNews to="" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
