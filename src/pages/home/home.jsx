import React from 'react'
import Topbar from '../../components/modules/topbar/topbar';
import Navbar from '../../components/modules/navbar/navbar';
import Header from '../../components/templates/header/header';
import Hero from '../../components/templates/hero/hero';
import CategorySection from '../../components/templates/category-section/category-section';
import ProductSection from '../../components/modules/product-section/product-section';
import ServicesSection from '../../components/modules/services-section/services-section';
import SaleBanner from '../../components/modules/sale-banner/sale-banner';
import BlogSection from '../../components/modules/blog-section/blog-section';
import Newsletter from '../../components/modules/news-letter/news-letter';
import Footer from '../../components/modules/footer/footer';


function Home() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Header
        images={[
          "/Images/img-placeholder-1.png",
          "/Images/img-placeholder-2.png",
          "/Images/img-placeholder-3.png"
        ]}
        isSlidable={true}
        withGradient={true}
      />
      <Hero />
      <CategorySection />
      <ProductSection
        showHeader={true}
        productCount={4}
        showBorder={true}
      />
      <ServicesSection />
      <SaleBanner />
      <BlogSection />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home;
