import React from "react";
import { Navigate } from "react-router-dom";

import Home from "./pages/home/home";
import Shop from "./pages/Shop/Shop"
import Product from "./pages/Product/Product";
import ContactUs from "./pages/contact-us/contact-us"
import ShoppingCart from "./pages/cart/cart";
import Checkout from "./pages/Checkout/Checkout";
import OrderComplete from "./pages/order-complete/order-complete";
import Blogs from './pages/blogs/blogs';
import Blog from "./pages/blogs/blog/blog";
import AboutUs from "./pages/about-us/about-us";

import UserPanel from "./pages/UserPanel/layout";
import Dashboard from "./pages/UserPanel/dashboard/Dashboard";
import Orders from "./pages/UserPanel/orders/Orders";
import Favorites from "./pages/UserPanel/favorites/favorites";
import UserTickets from "./pages/UserPanel/tickets/tickets";
import UserTicket from "./pages/UserPanel/tickets/ticket/ticket";
import UserAccount from "./pages/UserPanel/account/account";

import AdminPanel from "./pages/AdminPanel/layout";
import AdminDashboard from "./pages/AdminPanel/dashboard/AdminDashboard";
import Products from "./pages/AdminPanel/products/products";
import AddProduct from "./pages/AdminPanel/products/addproduct/AddProduct";
import EditProduct from "./pages/AdminPanel/products/editproduct/EditProduct";
import UserManagement from "./pages/AdminPanel/users/Users";
import Articles from "./pages/AdminPanel/articles/Articles";
import AddArticle from "./pages/AdminPanel/articles/addarticle/AddArticle";
import EditArticle from "./pages/AdminPanel/articles/editarticle/EditArticle";
import AdminTickets from "./pages/AdminPanel/tickets/tickets";
import AdminTicket from "./pages/AdminPanel/tickets/ticket/ticket";

const routes = [
    { path: '/', element: <Home /> },
    { path: '/Shop', element: <Shop /> },
    { path: '/product/:code/:slug', element: <Product /> },
    { path: '/contact-us', element: <ContactUs /> },
    { path: '/about-us', element: <AboutUs /> },
    { path: '/cart', element: <ShoppingCart /> },
    { path: '/checkout', element: <Checkout /> },
    { path: '/order-complete/:trackingCode', element: <OrderComplete /> },
    { path: '/blogs', element: <Blogs /> },
    { path: '/blogs/:slug/:name', element: <Blog /> },
    {
        path: '/my-account',
        element: <UserPanel />,
        children: [
            { index: true, element: <Navigate to="dashboard" replace /> },
            { path: "dashboard", element: <Dashboard /> },
            { path: "orders", element: <Orders /> },
            { path: 'favorites', element: <Favorites /> },
            { path: "tickets", element: <UserTickets /> },
            { path: 'tickets/:id', element: <UserTicket /> },
            { path: "account", element: <UserAccount /> },
        ]
    },
    {
        path: '/p-admin',
        element: <AdminPanel />,
        children: [
            { index: true, element: <Navigate to="dashboard" replace /> },
            { path: "dashboard", element: <AdminDashboard /> },
            {
                path: "admin-product",
                children: [
                    { index: true, element: <Products /> },
                    { path: "add-product", element: <AddProduct /> },
                    { path: "edit-product", element: <EditProduct /> },
                ]
            },
            { path: "admin-users", element: <UserManagement /> },
            {
                path: "admin-articles",
                children: [
                    { index: true, element: <Articles /> },
                    { path: "add-article", element: <AddArticle /> },
                    { path: "edit-article", element: <EditArticle /> },
                ]
            },
            {
                path: "admin-tickets",
                children: [
                    { index: true, element: <AdminTickets /> },
                    { path: "ticket-detail", element: <AdminTicket /> },
                ]
            },
        ]
    },
]

export default routes;