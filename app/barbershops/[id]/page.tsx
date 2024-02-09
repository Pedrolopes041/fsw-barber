import { db } from "@/app/_lib/prisma";
import Barbershopinfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";

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
    include: {
      services: true,
    },
  });
  return (
    <div>
      <Barbershopinfo key={barbershop?.id} barbershop={barbershop} />

      <div className="px-5 flex flex-col gap-4 py-6">
        {barbershop?.services.map((services) => (
          <ServiceItem key={services.id} service={services} />
        ))}
      </div>
    </div>
  );
};

export default BarbershopDetailsPage;
