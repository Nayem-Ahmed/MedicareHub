import { createBrowserRouter } from "react-router-dom";
import ErroePage from "../Pages/ErrorPage";
import Root from "../MainLayOut/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import AboutPage from "../Pages/AboutPage";

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
                path: "/about",
                element: <AboutPage></AboutPage>
            },
        ],
    },
]);
export default router;