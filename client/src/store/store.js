import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './reducers/newsSlice';
import workersReducer from './reducers/workersSlice';
import servicesReducer from "./reducers/servicesSlice";
import typeServicesReducer from "./reducers/typeServicesSlice";
import reviewsReducer from "./reducers/reviewsSlice";
import vacancyReducer from "./reducers/vacancySlice";
import documentsReducer from "./reducers/documentsSlice";
import aboutReducer from "./reducers/aboutSlice";
import typeAboutReducer from "./reducers/typeAboutSlice";
import licensesReducer from "./reducers/licensesSlice";
import userReducer from "./reducers/userSlice";
import appFormReducer from "./reducers/appFormSlice";

export const store = configureStore({
  reducer: {
      news: newsReducer,
      workers: workersReducer,
      services: servicesReducer,
      typeServices: typeServicesReducer,
      reviews: reviewsReducer,
      vacancy: vacancyReducer,
      documents: documentsReducer,
      about: aboutReducer,
      typeAbout: typeAboutReducer,
      licenses: licensesReducer,
      user: userReducer,
      appForm: appFormReducer,
  },
})