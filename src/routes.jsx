import Home from "./pages/home/home";
import Shop from "./pages/Shop/Shop"
import Product from "./pages/Product/Product"
import ContactUs from "./pages/contact-us/contact-us"
import Myaccount from "./pages/my-account/my-account";
import ShoppingCart from "./pages/shopping-cart/shopping-cart";
import Checkout from "./pages/checkout/checkout";
import OrderComplete from "./pages/order-complete/order-complete";

const routes = [
    { path: '/', element: <Home /> },
    { path: '/Shop', element: <Shop /> },
    { path: '/Product', element: <Product /> },
    { path: '/contact-us', element: <ContactUs /> },
    { path: '/my-account', element: <Myaccount /> },
    { path: '/shopping-cart', element: <ShoppingCart /> },
    { path: '/checkout', element: <Checkout /> },
    { path: '/order-complete', element: <OrderComplete /> },
]

export default routes;