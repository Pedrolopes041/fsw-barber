import { Prisma } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { format, isPast } from "date-fns";
import { ptBR } from "date-fns/locale";

interface BookingItemProps {
  booking: Prisma.BookingGetPayload<{
    include: {
      service: true,
      barbershop: true
    }
  }>
}

const Booking = ({booking}: BookingItemProps) => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between py-0 p-5">
        <div className="flex flex-col gap-2">
          <Badge variant={isPast(booking.date) ? "default" : "secondary"} className="w-fit">
            {isPast(booking.date) ? "Finalizado" : "Confirmado"}
          </Badge>
          <h2 className="font-bold">{booking.service.name}</h2>

          <div className="flex flex-row items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={booking.barbershop.imageUrl}/>
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <h3 className="text-sm">{booking.barbershop.name}</h3>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center border-l border-solid px-3">
          <p className="text-sm">{format(booking.date, 'MMMM', {
            locale: ptBR
          })}</p>
          <p className="text-2xl">{format(booking.date, 'dd')}</p>
          <p className="text-sm">{format(booking.date, 'hh:mm')}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Booking;
