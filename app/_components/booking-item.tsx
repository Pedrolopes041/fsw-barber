import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const Booking = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between py-0 p-5">
        <div className="flex flex-col gap-2">
          <Badge className="w-fit">Confirmado</Badge>
          <h2 className="font-bold">Corte de Cabelo</h2>

          <div className="flex flex-row items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <h3 className="text-sm">Imagem Barbearia</h3>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center border-l border-solid px-3">
          <p className="text-sm">Fevereiro</p>
          <p className="text-2xl">06</p>
          <p className="text-sm">09:45</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Booking;
