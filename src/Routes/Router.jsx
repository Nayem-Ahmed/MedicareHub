import { createBrowserRouter } from "react-router-dom";
import ErroePage from "../Pages/ErrorPage";
import Root from "../MainLayOut/Root";
import Home from "../Pages/Home";
import AboutPage from "../Pages/AboutPage";
import ContactUsPage from "../Pages/ContactUs/ContactUsPage";
import ServicesPage from "../Pages/Services/ServicesPage";
import Appointment from "../Pages/Apoinment";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErroePage></ErroePage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/appointment",
                element: <Appointment></Appointment>,
            },
            {
                path: "/about",
                element: <AboutPage></AboutPage>,
            },
            {
                path: "/contact",
                element: <ContactUsPage></ContactUsPage>,
            },
            {
                path: "/services",
                element: <ServicesPage></ServicesPage>,

            },
            {
                path: "/blog",
                element: <Blog></Blog>,

            },

        ],
    },
]);
export default router;