import React from 'react'
import Topbar from '../../components/modules/topbar/topbar';
import Navbar from '../../components/modules/navbar/navbar';
import Header from '../../components/templates/header/header';
import Hero from '../../components/templates/hero/hero';
import CategorySection from '../../components/templates/category-section/category-section';
import ProductSection from '../../components/modules/product-section/product-section';
import ServicesSection from '../../components/modules/services-section/services-section';


function Home() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Header />
      <Hero />
      <CategorySection />
      <ProductSection />
      <ServicesSection />
    </div>
  )
}

export default Home;
