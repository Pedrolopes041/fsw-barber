import { db } from "@/app/_lib/prisma";
import Barbershopinfo from "./_components/barbershop-info";

interface barbershopDetails {
  params: {
    id?: string;
  };
}

const BarbershopDetailsPage = async ({ params }: barbershopDetails) => {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  });
  return (
    <Barbershopinfo barbershop={barbershop}/>
  );
};

export default BarbershopDetailsPage;
