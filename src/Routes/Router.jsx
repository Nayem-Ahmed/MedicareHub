import { createBrowserRouter } from "react-router-dom";
import ErroePage from "../Pages/ErrorPage";
import Root from "../MainLayOut/Root";
import Home from "../Pages/Home";
import AboutPage from "../Pages/AboutPage";
import ContactUsPage from "../Pages/ContactUs/ContactUsPage";
import ServicesPage from "../Pages/Services/ServicesPage";
import Appointment from "../Pages/Apoinment";
import Blog from "../Pages/Blog/Blog";
import BlogPage from "../Pages/Blogpage/BlogPage";
import ServicesDetails from "../Pages/Services/ServicesDetails";

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
                path: "/servicesDetails/:id",
                loader: () => fetch('/services.json'),
                element: <ServicesDetails></ServicesDetails>,

            },
            {
                path: "/blog",
                element: <BlogPage></BlogPage>,

            },

        ],
    },
]);
export default router;