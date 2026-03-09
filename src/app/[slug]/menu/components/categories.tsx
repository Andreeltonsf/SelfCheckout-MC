import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Prisma } from "@prisma/client";
import { ClockIcon } from "lucide-react";
import Image from "next/image";

interface RestaurantCategoriesProps {
    restaurant: Prisma.RestaurantGetPayload<{
        include: { MenuCategories: { include: { Products: true } } };
    }>;
}

const RestaurantCategories = ({ restaurant }: RestaurantCategoriesProps) => {
    return (
        <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl border bg-white ">
            <div className="p-5">
                <div className="flex items-center gap-3">
                <Image
                    src={restaurant.avatarImageUrl}
                    alt={restaurant.name}
                    height={45}
                    width={45}
                />
                <div>
                    <h2 className="text-xl font-semibold">{restaurant.name}</h2>
                    <p className="text-xs opacity-55">
                        {restaurant.description}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-1 pt-3 text-xs text-green-500">
                <ClockIcon size={12} />
                <p>Aberto!</p>
            </div>
            </div>
            <ScrollArea className="w-full">
                <div className="flex w-max space-x-4">
                    {restaurant.MenuCategories.map((category) => (
                        <Button key={category.id} variant="secondary" size="sm">
                            {category.name}
                        </Button>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    );
};

export default RestaurantCategories;
