import React from 'react'
import Topbar from '../../components/modules/topbar/topbar';
import Navbar from '../../components/modules/navbar/navbar';
import Newsletter from '../../components/modules/news-letter/news-letter';
import Footer from '../../components/modules/footer/footer';
import Breadcrumb from '../../components/modules/breadcrumb/breadcrumb';
import ProductDetails from '../../components/templates/product-details/product-details';

function Product() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Breadcrumb />
      <ProductDetails />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Product
