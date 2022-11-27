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
import AdminRoute from "../AdminRoute/AdminRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
import BookCategories from "../../Pages/Home/BookCategories/BookCategories";
import BookCategory from "../../Pages/Categories/BookCategory/BookCategory";
import Profile from "../../Pages/Shared/Profile/Profile";
import NotFound from "../../Pages/Others/NotFound";
import BlogDetail from "../../Pages/Blogs/Blog/BlogDetail";
import Payment from "../../Pages/DashBoard/Payment/Payment";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,

        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/categories",
                element: <BookCategory></BookCategory>
            },
            {
                path: "/category/:id",
                element: <PrivateRoute>
                    <CategoryDetails></CategoryDetails>
                </PrivateRoute>,
                loader : ({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            }
            ,
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/blog/:id",
                element: <BlogDetail></BlogDetail>
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
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element:<Profile></Profile>
            },
            {
                path: '/dashboard/myOrders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/myWishLists',
                element: <BuyerRoute><MyWishList></MyWishList></BuyerRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <BuyerRoute><Payment></Payment></BuyerRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/bookings/${params.id}`)
            },
            {
                path: '/dashboard/addProduct',
                element:<SellerRoute><AddProduct></AddProduct></SellerRoute> 
            },
            {
                path: '/dashboard/myProducts',
                element:<SellerRoute><MyProducts></MyProducts></SellerRoute> 
            },
            {
                path: '/dashboard/myBuyers',
                element: <SellerRoute><MyBuyers></MyBuyers></SellerRoute> 
            },
            {
                path: '/dashboard/allSellers',
                element:<AdminRoute><AllSellers></AllSellers></AdminRoute> 
            },
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoute><AllBuyers></AllBuyers> </AdminRoute>
            },
            {
                path: '/dashboard/reportedItem',
                element: <AdminRoute><ReportedItem></ReportedItem></AdminRoute> 
            },
            {
                path: '/dashboard/payment',
                element: <AdminRoute><ReportedItem></ReportedItem></AdminRoute> 
            },
            
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }
])
export default router;