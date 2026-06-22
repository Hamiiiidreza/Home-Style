import React, { useState } from 'react';
import { Eye, Edit, MoreVertical, Plus, Sofa, FunnelPlus, Info } from 'lucide-react';
import CustomInput from '../../../components/ui/custom-input';
import CustomPagination from '../../../components/ui/custom-pagination';
import { useNavigate } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";

type ProductStatus = 'موجود' | 'کم موجود' | 'ناموجود';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  status: ProductStatus;
  statusColor: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'مبل مدرن الوبس',
    category: 'مبلمان',
    price: '۲۴,۸۵۰,۰۰۰',
    status: 'موجود',
    statusColor: 'bg-green-100 text-green-700',
    image: '/Images/product-20.jpg',
  },
  {
    id: 2,
    name: 'میز ناهارخوری چوبی',
    category: 'میز و صندلی',
    price: '۱۸,۹۰۰,۰۰۰',
    status: 'موجود',
    statusColor: 'bg-green-100 text-green-700',
    image: '/Images/product-20.jpg',
  },
  {
    id: 3,
    name: 'صندلی راحتی موناکو',
    category: 'صندلی',
    price: '۹,۵۰۰,۰۰۰',
    status: 'کم موجود',
    statusColor: 'bg-orange-100 text-orange-600',
    image: '/Images/product-20.jpg',
  },
  {
    id: 4,
    name: 'میز جلو مبلی وودلند',
    category: 'میز جلو مبلی',
    price: '۶,۳۸۰,۰۰۰',
    status: 'موجود',
    statusColor: 'bg-green-100 text-green-700',
    image: '/Images/product-20.jpg',
  },
  {
    id: 5,
    name: 'تخت خواب دو نفره روما',
    category: 'تخت خواب',
    price: '۳۲,۵۰۰,۰۰۰',
    status: 'ناموجود',
    statusColor: 'bg-rose-100 text-rose-700',
    image: '/Images/product-20.jpg',
  },
  {
    id: 6,
    name: 'آباژور ایستاده فوردیک',
    category: 'نورپردازی',
    price: '۴,۲۸۰,۰۰۰',
    status: 'موجود',
    statusColor: 'bg-green-100 text-green-700',
    image: '/Images/product-20.jpg',
  },
];

const ProductManagement: React.FC = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalProducts = 75;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const [openDetails, setOpenDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const navigate = useNavigate();

  return (
    <section className="w-full bg-white rounded-md shadow-lg my-10 p-6 border transition-all hover:drop-shadow-custom">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-start gap-3">
          <div className="flex items-center justify-center size-9 rounded-md bg-neutral-01">
            <Sofa className="text-secondary-color-blue" />
          </div>
          <h2 className="flex items-center text-2xl font-VazirBold text-neutral-07">
            محصولات
          </h2>
        </div>
        <p className="font-VazirRegular text-sm text-gray-500 mt-2">
          لیست تمامی محصولات فروشگاه را مشاهده، مدیریت و ویرایش کنید.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          <CustomInput
            type="text"
            placeholder=" جستجو در محصولات..."
            inputClassName="h-10 w-full rounded-md border bg-white px-4 font-VazirRegular text-sm outline-none transition-all placeholder:text-neutral-04 focus:border-neutral-04 sm:w-80 pl-10"
          />
          <button className="flex items-center justify-center gap-2 border px-4 h-10 font-VazirRegular rounded-md cursor-pointer transition-all hover:bg-main hover:text-white">
            <FunnelPlus size={16} />
            فیلتر
          </button>
        </div>
        <button
          onClick={() => navigate("/p-admin/admin-product/add")}
          className="px-4 py-3 rounded-md flex items-center gap-2 bg-main text-white border--main transition-colors hover:bg-main/90 cursor-pointer"
        >
          <Plus size={18} />
          افزودن محصول جدید
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-md shadow-sm border overflow-x-auto">
        <table className="w-full text-center border rounded-md overflow-hidden">
          <thead className="bg-gray-50 border-b">
            <tr className="bg-gray-50 text-neutral-07 font-VazirMedium text-xs border-b border-gray-100">
              <th className="pl-50">محصول</th>
              <th className="p-4">دسته بندی</th>
              <th className="p-4">وضعیت موجودی</th>
              <th className="p-4">قیمت (تومان)</th>
              <th className="p-4">جزئیات</th>
              <th className="p-4">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: Product) => (
              <tr
                key={product.id}
                className="border rounded-md shadow-sm overflow-hidden mt-1 border-gray-50 hover:bg-gray-50 transition-colors"
              >
                <td className="p-4 font-VazirMedium">
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-32 h-20 bg-gray-200 rounded-lg"
                    />
                    <span>{product.name}</span>
                  </div>
                </td>

                <td className="p-4 font-VazirMedium text-sm text-gray-600">
                  {product.category}
                </td>

                <td className="p-4">
                  <span
                    className={`flex items-center justify-center py-2 font-VazirMedium rounded-md text-xs ${product.statusColor}`}
                  >
                    {product.status}
                  </span>
                </td>

                <td className="p-4 font-VazirMedium">{product.price}</td>

                {/* Details Column */}
                <td className="p-4">
                  <div className="flex items-center justify-center">
                    <Info
                      size={18}
                      onClick={() => {
                        setSelectedProduct(product);
                        setOpenDetails(true);
                      }}
                      className="cursor-pointer text-secondary-color-blue hover:text-gray-600"
                    />
                  </div>
                </td>

                {/* Actions */}
                <td className="p-4">
                  <div className="flex items-center justify-center gap-3">
                    <Eye
                      size={18}
                      className="cursor-pointer text-secondary-color-blue hover:text-gray-600"
                    />
                    <Edit
                      onClick={() => navigate("/p-admin/admin-product/edit")}
                      size={18}
                      className="cursor-pointer text-secondary-color-blue hover:text-gray-600"
                    />
                    <MoreVertical
                      size={18}
                      className="cursor-pointer text-main hover:text-gray-600"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        totalItems={totalProducts}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={setItemsPerPage}
        label="محصول"
      />

      {/* Details Modal */}
      <Dialog open={openDetails} onOpenChange={setOpenDetails}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-VazirBold text-center">
              جزئیات محصول
            </DialogTitle>
          </DialogHeader>

          {selectedProduct && (
            <div className="space-y-3 font-VazirRegular text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">نام محصول</span>
                <span>{selectedProduct.name}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">دسته بندی</span>
                <span>{selectedProduct.category}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">قیمت</span>
                <span>{selectedProduct.price} تومان</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">رنگ</span>
                <span>قهوه‌ای</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">سایز</span>
                <span>سه نفره</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">وزن</span>
                <span>۴۵ کیلوگرم</span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductManagement;


