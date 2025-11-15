import React from 'react'
import Navbar from '../../components/modules/navbar/navbar';
import Footer from '../../components/modules/footer/footer';
import ShoppingTable from '../../components/templates/shopping-table/shopping-table';

function ShoppingCart() {
  return (
    <div>
      <Navbar />
      <ShoppingTable />
      <Footer />
    </div>
  )
}

export default ShoppingCart;
