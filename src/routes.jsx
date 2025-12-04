import Home from "./pages/home/home";
import Shop from "./pages/Shop/Shop"
import Product from "./pages/Product/Product"
import ContactUs from "./pages/contact-us/contact-us"
import Register from "./pages/register/Register";
import ShoppingCart from "./pages/shopping-cart/shopping-cart";
import Checkout from "./pages/checkout/checkout";
import OrderComplete from "./pages/order-complete/order-complete";

import UserPanel from "./pages/UserPanel/Index";
import Account from "./pages/UserPanel/account/Account";
import Address from "./pages/UserPanel/address/Address";

const routes = [
    { path: '/', element: <Home /> },
    { path: '/Shop', element: <Shop /> },
    { path: '/Product', element: <Product /> },
    { path: '/contact-us', element: <ContactUs /> },
    { path: '/register', element: <Register /> },
    { path: '/shopping-cart', element: <ShoppingCart /> },
    { path: '/checkout', element: <Checkout /> },
    { path: '/order-complete', element: <OrderComplete /> },
    {
        path: '/my-account/*',
        element: <UserPanel />,
        children: [
            { path: "account", element: <Account /> },
            { path: "address", element: <Address /> },
        ]
    }
]

export default routes;