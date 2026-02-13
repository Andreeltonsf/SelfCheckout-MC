

import { db } from "@/lib/prisma";

export async function getRestaurant_bySlug(slug:string) {
    const restaurant = await db.restaurant.findUnique({
        where:{
            slug:slug
        }
    })
    return restaurant;
}
