import { createBrowserRouter } from "react-router-dom";
import ErroePage from "../Pages/ErrorPage";
import Root from "../MainLayOut/Root";
import Home from "../Pages/Home";

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
        ],
    },
]);
export default router;