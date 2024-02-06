import { format } from "date-fns";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";
import Booking from "../_components/booking-item";
import Barbershopitem from "./_components/barbeshop-item";
import { db } from "../_lib/prisma";

export default async function Home() {
  const barbershop = await db.barbershop.findMany({});
  return (
    <div>
      <Header />
      <div className="px-5 pt-5">
        <h1 className="font-bold text-xl">Olá, Miguel</h1>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE ',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>

      <div className="px-5 mt-6">
        <Search />
      </div>
      <div className="px-5 mt-6">
        <h2 className="text-sm uppercase font-bold text-gray-400 mb-3">
          Agendamentos
        </h2>
        <Booking />
      </div>
      
      <div className="px-5 mt-6">
        <h2 className="text-sm uppercase font-bold text-gray-400 mb-3">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershop.map((barbershop) => (
            <Barbershopitem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <div className="px-5 mt-6 mb-[4.5rem]">
        <h2 className="text-sm uppercase font-bold text-gray-400 mb-3">
          Populares
        </h2>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershop.map((barbershop) => (
            <Barbershopitem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  );
}
