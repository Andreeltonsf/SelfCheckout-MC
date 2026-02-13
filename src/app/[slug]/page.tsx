import { getRestaurant_bySlug } from "@/data/get-restaurant_by-slug";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MethodOption } from "./components/method-option";


interface RestaurantPageProps {
    params:Promise<{slug:string}>;
}



async function RestaurantPage({params}:RestaurantPageProps) {
    const {slug} = await params;
    const restaurant = await getRestaurant_bySlug(slug);


    if(!restaurant) {
        return notFound();
    }


    return (
        <div className="h-screen flex flex-col items-center justify-center px-6 pt-24">
            {/* Logo */}
            <div className="flex flex-col items-center gap-2">
                <Image src={restaurant?.avatarImageUrl} alt={restaurant?.name} width={82} height={82} />



                <h2 className="font-semibold">{restaurant?.name}</h2>
            </div>
            {/* Seção de seja bem vindo */}
            <div className="pt-24 text-center space-y-2">
                <h3 className="text-2xl font-semibold">
                    Seja bem-vindo ao restaurante {restaurant?.name}!
                </h3>
                <p className="opacity-55">
                    Escolha como prefere aproveitar sua refeição. Estamos para oferecer praticidade, qualidade e sabor em cada detalhe!
                </p>
            </div>
            {/* Seção de escolha se é para consumir no local ou não */}
            <div className=" grid grid-cols-2 gap-4 pt-14">
                <MethodOption slug={slug} option="DINE_IN" imageUrl="/dine_in.png" imageAlt="Consumir no Local" buttonText="Consumir no local"/>
                <MethodOption slug={slug} option="TAKEWAY" imageUrl="/take_way.png" imageAlt="Para levar" buttonText="Levar para a viagem"/>
            </div>
        </div>
  );
}

export default RestaurantPage;
