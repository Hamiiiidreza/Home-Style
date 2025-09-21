import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

function Navbar() {

  const [menuItems, setMenuItems] = useState([
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/Shop' },
    { name: 'Product', path: '/Product' },
    { name: 'Contact us', path: '/contact-us' },
  ]);
  const location = useLocation();

  // تابع بررسی فعال بودن مسیر
  const isActive = (path) => {
    if (!path) return false;
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // تابع بررسی فعال بودن منو
  const isMenuActive = (menu) => {
    if (isActive(menu.path)) return true;
  };

  return (
    <div>
      <div className="container">
        <nav className="w-full bg-white flex items-center justify-between">

          <h1 className="font-PoppinsMedium text-2xl leading-none py-4.5">
            <span className="text-black hover:drop-shadow-custom transition-all">3legant</span>
            <span className="text-neutral-04">.</span>
          </h1>

          <ul className="flex items-center gap-10 py-4.5 font-InterMedium text-sm">
            {menuItems.map((menu) => (
              <li
                className='group'
                key={crypto.randomUUID()}>
                <Link
                  to={menu.path}
                  className={`group-hover:drop-shadow-custom transition-all ${isMenuActive(menu) ? 'text-neutral-07' : 'text-neutral-04'}`}>
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 py-4">
            <button>
              <img
                src='/Images/Search.svg'
                alt='search-icon'
                className="size-6 hover:drop-shadow-custom transition-all" />
            </button>
            <Link to="/my-account">
              <img
                src='/Images/User.svg'
                alt='user-icon'
                className="size-6 hover:drop-shadow-custom transition-all" />
            </Link>
            <div className='flex items-center justify-center gap-2'>
              <Link
                to="/Shop"
                className="relative">
                <img
                  src='/Images/Shop.svg'
                  alt='shop-icon'
                  className="size-6 hover:drop-shadow-custom transition-all" />
                <img
                  src="/Images/Curve.svg"
                  alt="shop-icon2"
                  className='absolute top-1 right-2 size-2' />
              </Link>
              <span className="flex items-center justify-center font-InterBold leading-0.83 bg-neutral-07 text-white text-xs rounded-full size-5.5">
                2
              </span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;
