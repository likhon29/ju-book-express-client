import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import CategoryDetails from "../../Pages/Categories/CategoryDetails/CategoryDetails";
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
                path: "/category/:id",
                element: <CategoryDetails></CategoryDetails>
            }
            ,
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/about",
                element: <h1>ABout</h1>
            }
        ]
    }
])
export default router;