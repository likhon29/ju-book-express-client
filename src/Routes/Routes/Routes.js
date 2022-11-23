import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/categories",
                element: <h1>Categories</h1>
            },
            {
                path: "/blogs",
                element: <h1>Blogs</h1>
            },
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])
export default router;