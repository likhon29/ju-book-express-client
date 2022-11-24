import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import CategoryDetails from "../../Pages/Categories/CategoryDetails/CategoryDetails";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Signup from "../../Pages/Signup/Signup/Signup";

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
                element: <CategoryDetails></CategoryDetails>,
                loader : ({params})=>fetch(`http://localhost:5000/allCategories/${params.id}`)
            }
            ,
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Signup></Signup>
            },
            {
                path: "/about",
                element: <h1>About</h1>
            }
        ]
    }
])
export default router;