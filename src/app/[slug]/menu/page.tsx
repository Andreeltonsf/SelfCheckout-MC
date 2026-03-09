import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import RestaurantCategories from "./components/categories";
import { RestaurantHeader } from "./components/header";

interface MenuPageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ consumptionMethod: string }>;
}

const isConsumptionMethod = (method: string) => {
    return ["DINE_IN", "TAKEWAY"].includes(method);
};

export default async function MenuPage({
    params,
    searchParams,
}: MenuPageProps) {
    const { slug } = await params;
    const { consumptionMethod } = await searchParams;

    if (!isConsumptionMethod(consumptionMethod)) {
        return notFound();
    }
    const restaurant = await db.restaurant.findUnique({
        where: {
            slug,
        },
        include: {
            MenuCategories: { include: { Products: true } },
        },
    });

    if (!restaurant) {
        return notFound();
    }
    return (
        <div>
            <RestaurantHeader restaurant={restaurant} />
            <RestaurantCategories restaurant={restaurant} />
        </div>
    );
}
