import Admin from "../Admin";
import { AdminNews} from '../components/AdminComponents/AdminNews';
import { AdminDocuments} from '../components/AdminComponents/AdminDocuments';
import { AdminReviews} from '../components/AdminComponents/AdminReviews';
import { AdminVacancy} from '../components/AdminComponents/AdminVacancy';
import { AdminWorkers} from '../components/AdminComponents/AdminWorkers';
import { AdminNewsAdd } from '../components/AdminComponents/AdminNews/AdminNewsAdd';
import { AdminVacancyAdd } from '../components/AdminComponents/AdminVacancy/AdminVacancyAdd';
import { AdminWorkersAdd } from '../components/AdminComponents/AdminWorkers/AdminWorkersAdd';
import { AdminTypeServices } from '../components/AdminComponents/AdminTypeService';
import { AdminTypeServicesAdd } from '../components/AdminComponents/AdminTypeService/AdminTypeServiceAdd';
import { AdminServicesAdd } from '../components/AdminComponents/AdminServices/AdminServicesAdd';
import { AdminServices } from '../components/AdminComponents/AdminServices';
import { AdminNewsEdit } from '../components/AdminComponents/AdminNews/AdminNewsEdit';
import { AdminWorkersEdit } from '../components/AdminComponents/AdminWorkers/AdminWorkersEdit';
import { AdminVacancyEdit } from '../components/AdminComponents/AdminVacancy/AdminVacancyEdit';
import { AdminDocumentsAdd } from '../components/AdminComponents/AdminDocuments/AdminDocumentsAdd';
import { AdminDocumentsEdit } from '../components/AdminComponents/AdminDocuments/AdminDocumentsEdit';
import { AdminTypeAbout } from '../components/AdminComponents/AdminTypeAbout';
import { AdminTypeAboutAdd } from '../components/AdminComponents/AdminTypeAbout/AdminTypeAboutAdd';
import { AdminAbout } from '../components/AdminComponents/AdminAbout';
import { AdminAboutAdd } from '../components/AdminComponents/AdminAbout/AdminAboutAdd';
import { AdminAboutEdit } from '../components/AdminComponents/AdminAbout/AdminAboutEdit';
import { AdminTypeAboutEdit } from '../components/AdminComponents/AdminTypeAbout/AdminTypeAboutEdit';

import {
    Routes,
    Route,
  } from "react-router-dom";
import { AdminLicenses } from "../components/AdminComponents/AdminLicenses";

export const RouterAdmin = () => {
    return (
        <Route path='/admin' element={<Admin />}>
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
            <Route path="admin_workers" element={<AdminWorkers />} />
            <Route path="admin_workers/:id" element={<AdminWorkersEdit />} />
            <Route path="admin_workers/admin_worker_add" element={<AdminWorkersAdd />} />
            <Route path="admin_typeservices" element={<AdminTypeServices />} />
            <Route path="admin_typeservices/admin_typeservices_add" element={<AdminTypeServicesAdd />} />
            <Route path="admin_services" element={<AdminServices />} />
            <Route path="admin_services/admin_services_add" element={<AdminServicesAdd />} />
            <Route path="admin_typeabout" element={<AdminTypeAbout />} />
            <Route path="admin_typeabout/:id" element={<AdminTypeAboutEdit />} />
            <Route path="admin_typeabout/admin_typeabout_add" element={<AdminTypeAboutAdd />} />
            <Route path="admin_about" element={<AdminAbout />} />
            <Route path="admin_about/admin_about_add" element={<AdminAboutAdd />} />
            <Route path="admin_about/:id" element={<AdminAboutEdit />} />
            <Route path="admin_licenses" element={<AdminLicenses/>} />
            <Route path="*" element={<AdminNews to="" />} />
        </Route>
    );
}