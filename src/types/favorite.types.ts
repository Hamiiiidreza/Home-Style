export type FavoriteItem = {
    id: number;
    name: string;
    price: number | string;
    status: "موجود" | "ناموجود";
    hasDiscount?: boolean;
    image: string;
};