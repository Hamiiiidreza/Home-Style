import Home from "./pages/home/home";
import Shop from "./pages/Shop/Shop"
import Product from "./pages/Product/Product"
import ContactUs from "./pages/contact-us/contact-us"
import Myaccount from "./pages/my-account/my-account";

const routes = [
    { path: '/', element: <Home /> },
    { path: '/Shop', element: <Shop /> },
    { path: '/Product', element: <Product /> },
    { path: '/contact-us', element: <ContactUs /> },
    { path: '/my-account', element: <Myaccount /> },
]

export default routes;