import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import CategoryDetails from "../../Pages/Categories/CategoryDetails/CategoryDetails";
import AllBuyers from "../../Pages/DashBoard/Admin/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/DashBoard/Admin/AllSellers/AllSellers";
import ReportedItem from "../../Pages/DashBoard/Admin/ReportedItem/ReportedItem";
import MyOrders from "../../Pages/DashBoard/Buyers/MyOrders/MyOrders";
import MyWishList from "../../Pages/DashBoard/Buyers/MyWishList/MyWishList";
import DashBoardLayout from "../../Layout/DashBoardLayout/DashBoardLayout";
import AddProduct from "../../Pages/DashBoard/Sellers/AddProduct/AddProduct";
import MyBuyers from "../../Pages/DashBoard/Sellers/MyBuyers/MyBuyers";
import MyProducts from "../../Pages/DashBoard/Sellers/MyProducts/MyProducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Signup from "../../Pages/Signup/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,
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
    },
    {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        children: [
            {
                path: '/dashboard',
                element:<MyOrders></MyOrders>
            },
            {
                path: '/dashboard/myOrders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/myWishLists',
                element: <MyWishList></MyWishList>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/myBuyers',
                element: <MyBuyers></MyBuyers>
            },
            {
                path: '/dashboard/allSellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/reportedItem',
                element: <ReportedItem></ReportedItem>
            },
            
        ]
    }
])
export default router;