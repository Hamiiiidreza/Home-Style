import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CartSidebar from '../cart-sidebar/cart-sidebar';
import Badge from '../../ui/badge';
import MobileMenu from '../mobile-menu/mobile-menu';

function Navbar() {
  const [menuItems] = useState([
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/Shop' },
    { name: 'Product', path: '/Product' },
    { name: 'Contact us', path: '/contact-us' },
  ]);
  const [openCart, setOpenCart] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (!path) return false;
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div>
      <div className="container">
        <nav className="w-full bg-white flex items-center justify-between relative">
          <div className="flex items-center justify-center gap-1">
            {/* Hamburger – mobile only */}
            <button
              className="md:hidden"
              onClick={() => setOpenMobileMenu(true)}
            >
              <img
                src="/Images/menu-line-horizontal.svg"
                alt="menu"
                className="size-6 bg-cover bg-center"
              />
            </button>

            <h1 className="font-PoppinsMedium text-base md:text-2xl leading-none py-4.5">
              <span className="text-black hover:drop-shadow-custom transition-all">
                3legant
              </span>
              <span className="text-neutral-04">.</span>
            </h1>
          </div>

          <ul className="hidden md:flex items-center gap-10 py-4.5 font-InterMedium text-sm">
            {menuItems.map((menu) => (
              <li className="group" key={menu.path}>
                <Link
                  to={menu.path}
                  className={`group-hover:drop-shadow-custom transition-all ${isActive(menu.path) ? 'text-neutral-07' : 'text-neutral-04'
                    }`}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 py-4">
            <button className="hidden sm:block">
              <img
                src="/Images/Search.svg"
                alt="search-icon"
                className="size-6 hover:drop-shadow-custom transition-all cursor-pointer"
              />
            </button>
            <Link
              to="/register"
              className="hidden sm:block"
            >
              <img
                src="/Images/User.svg"
                alt="user-icon"
                className="size-6 hover:drop-shadow-custom transition-all"
              />
            </Link>
            <div className="flex items-center justify-center gap-2 relative">
              <button onClick={() => setOpenCart(true)} className="relative">
                <img
                  src="/Images/Shop.svg"
                  alt="shop-icon"
                  className="size-6 hover:drop-shadow-custom transition-all cursor-pointer"
                />
                <img
                  src="/Images/Curve.svg"
                  alt="shop-icon2"
                  className="absolute top-1 right-2 size-2"
                />
              </button>
              <Badge
                className="flex items-center justify-center font-InterBold leading-0.83 bg-neutral-07 text-white text-xs rounded-full size-5.5"
                number={2} />
            </div>
          </div>
        </nav>
      </div>

      <CartSidebar open={openCart} onClose={() => setOpenCart(false)} />
      <MobileMenu open={openMobileMenu} onClose={() => setOpenMobileMenu(false)} />
    </div>
  );
}

export default Navbar;


