import { PrismaClient } from "@prisma/client";
import ClientComponent from "./ComponentClient";

const prisma = new PrismaClient();
export const dynamic = "force-dynamic";
export const getProducts = async () => {
    const res = await prisma.product.findMany({
        select: {
            id: true,
            title: true,
            price: true,
            brandId: true,
            brand: true,
        },
        orderBy: {
            createdAt: 'desc', // Urutkan berdasarkan createdAt dari yang terbaru
        }
    });
    return res;
};

export const getBrands = async () => {
    const res = await prisma.brand.findMany();
    return res;
};

const ServerComponent = async () => {
    const [products, brands] = await Promise.all([getProducts(), getBrands()]);

    return <ClientComponent products={products} brands={brands} />;
};

export default ServerComponent;