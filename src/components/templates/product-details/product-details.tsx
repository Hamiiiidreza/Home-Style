import { FC } from "react";
import Gallery from "./gallery";
import Details from "./details";
import Comments from "./comments";

const ProductDetails: FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 px-6 md:px-16 py-10 rounded-md shadow-md transition-all hover:drop-shadow-custom mb-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Gallery />
        <Details />
      </div>

      <div className="w-full h-px bg-gray-300 my-12" />

      <Comments />

    </div>
  );
};

export default ProductDetails;


