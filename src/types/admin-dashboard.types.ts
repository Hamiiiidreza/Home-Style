export interface AdminDashboardOverview {
    totalSales: number;
    newOrders: number;
    newCustomers: number;
    activeProducts: number;
}

export interface AdminDashboardSalesPoint {
    date: string;
    sales: number;
}

export interface AdminDashboardGrowthPoint {
    month: string;
    sales: number;
    orders: number;
    customers: number;
}

export interface AdminDashboardOrderUser {
    _id: string;
    name: string;
    phone: number | string;
    email: string | null;
}

export interface AdminDashboardOrderProduct {
    _id: string;
    name: string;
    images?: string[];
}

export interface AdminDashboardOrderItem {
    _id: string;
    product: AdminDashboardOrderProduct;
    color?: string;
    quantity: number;
    sellPrice: number;
}

export interface AdminDashboardOrder {
    _id: string;
    information?: {
        firstName?: string;
        lastName?: string;
    };
    user: AdminDashboardOrderUser | null;
    products: AdminDashboardOrderItem[];
    status: string;
    totalPrice: number;
    trackingCode: string;
    createdAt: string;
}

export interface AdminDashboardData {
    overview: AdminDashboardOverview;
    salesChart: AdminDashboardSalesPoint[];
    lastOrders: AdminDashboardOrder[];
    growthChart: AdminDashboardGrowthPoint[];
}

export interface AdminDashboardResponse {
    success: boolean;
    data: AdminDashboardData;
}
