import React from 'react';
import Tabs from './Tabs';
import Gallery from './Gallery';
import Details from './Details';

const ProductDetail = ({ product }) => {
  return (
    <div className="container bg-white mx-auto overflow-x-hidden">
      {/* Product Section */}
      <section
        className="
          grid grid-cols-1 
          lg:grid-cols-2 
          gap-12 
          items-start 
          py-8 
        "
      >
        <Gallery product={product} />
        <Details product={product} />
      </section>

      {/* Tabs Section */}
      <Tabs product={product} />
    </div>
  );
};

export default ProductDetail;
