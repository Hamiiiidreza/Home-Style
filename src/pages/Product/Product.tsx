import React from 'react'
import Topbar from '../../components/modules/topbar/topbar';
import Navbar from '../../components/modules/navbar/navbar';
import Newsletter from '../../components/modules/news-letter/news-letter';
import Footer from '../../components/modules/footer/footer';
import PageHierarchy from '../../components/modules/Page-Hierarchy/page-hierarchy';
import ProductDetails from '../../components/templates/product-details/product-details';
import { ProductCardProps } from '../../types/product.types';
import { useParams } from "react-router-dom";

type ProductProps = {
  product: ProductCardProps;
}

const Product: React.FC<ProductProps> = ({ product }) => {

  const { id } = useParams();

  return (
    <div>
      <Topbar />
      <div className="px-3 sm:!px-8 xl:!px-40">
        <Navbar />
        <PageHierarchy
          items={["خانه", "فروشگاه", "اتاق نشیمن", "محصول"]}
        />
        <ProductDetails />
        <Newsletter />
        <Footer />
      </div>
    </div>
  )
}

export default Product;
