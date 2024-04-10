import { getServerSession } from "next-auth";
import Header from "../_components/header";
import { authOptions } from "@/app/_lib/auth";
import { redirect } from "next/navigation";
import { db } from "../_lib/prisma";
import Booking from "../_components/booking-item";
import { isFuture, isPast } from "date-fns";

const BookingsPage = async () => {
  //recuperar a sessão do usuario  (vê se ele está logado ou não )
  const session = await getServerSession(authOptions);
  // se ele não estiver logado, redirecione
  if (!session?.user) {
    return redirect("/");
  }
  const bookings = await db.booking.findMany({
    where: {
      userId: (session.user as any).id,
    },
    include: {
      service: true,
      barbershop: true,
    },
  });

  const bookingConfirmed = bookings.filter((booking) => {
    return isFuture(booking.date);
  });
  const bookingFinish = bookings.filter((booking) => {
    return isPast(booking.date);
  });
  return (
    <>
      <Header />

      <div className="px-5 py-6">
        <h1 className="text-xl font-bold">Agendamentos</h1>
        {bookingConfirmed.length > 0 && (
          <h2 className="text-gray-400 uppercase font-bold text-sm mt-6 mb-3">
            Confirmados
          </h2>
        )}

        <div className="flex flex-col gap-3">
          {bookingConfirmed.map((booking) => (
            <Booking key={booking.id} booking={booking} />
          ))}
        </div>

        {bookingFinish.length > 0 && (
          <h2 className="text-gray-400 uppercase font-bold text-sm mt-6 mb-3">
            Finalizados
          </h2>
        )}

        <div className="flex flex-col gap-3">
          {bookingFinish.map((booking) => (
            <Booking key={booking.id} booking={booking} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BookingsPage;
