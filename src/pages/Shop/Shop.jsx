import React, { useState } from 'react'
import Topbar from '../../components/modules/topbar/topbar';
import Navbar from '../../components/modules/navbar/navbar';
import Header from '../../components/templates/header/header';
import Breadcrumb from '../../components/modules/breadcrumb/breadcrumb';
import FilterAndSortpanel from '../../components/ui/filter-and-sortpanel';
import ProductSection from '../../components/modules/product-section/product-section';
import Newsletter from '../../components/modules/news-letter/news-letter';
import Footer from '../../components/modules/footer/footer';

function Shop() {

  const [showTopbar, setShowTopbar] = useState(true);

  return (
    <div className='relative'>
      {showTopbar && (
        <Topbar onClose={() => setShowTopbar(false)} />
      )}
      <Navbar />
      <Header
        singleImage="/Images/img-placeholder-2.png"
        isSlidable={false}
        withGradient={false}
      >ّ
        <Breadcrumb
          title="Shop"
          name="Shop Page"
          desc="Let's design the place you always imagined."
        />
      </Header>
      <div className="-mt-21">
       <FilterAndSortpanel
          mode="shop"
        />
      </div>
      <ProductSection
        showHeader={false}
        productCount={12}
        showBorder={false}
      />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Shop;
