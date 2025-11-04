import React from 'react';
import Tabs from './Tabs';
import Gallery from './Gallery';
import Details from './Details';

const ProductDetail = ({ product }) => {
  return (
    <div className="container bg-white mx-auto">
      {/* Product Section */}
      <section className="flex flex-col lg:flex-row gap-12 items-start justify-between mx-auto py-8 px-4">
        <Gallery product={product} />
        <Details product={product} />
      </section>
      
      {/* Tabs Section */}
      <Tabs product={product} />
    </div>
  );
};

export default ProductDetail;
