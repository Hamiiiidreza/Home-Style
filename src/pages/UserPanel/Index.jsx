import React from 'react'
import Navbar from '../../components/modules/navbar/navbar';
import Footer from '../../components/modules/footer/footer';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/UserPanel/sidebar/Sidebar';

function Index() {
  return (
    <>
      <Navbar />
      <div className="inline-flex flex-col items-center pt-0 pb-20 bg-white container">
        <div className="inline-flex flex-col items-center px-0 py-20">
          <h1
            className="font-PoppinsMedium w-fit text-black text-[54px] tracking-headline-3 leading-14.5 whitespace-nowrap transition-all hover:drop-shadow-custom"
          >
            My Account
          </h1>
        </div>
        <div class="inline-flex items-start gap-[7px]">
          <Sidebar />
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Index
