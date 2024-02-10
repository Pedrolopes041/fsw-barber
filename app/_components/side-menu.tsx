import { signIn, signOut, useSession } from "next-auth/react";
import { SheetHeader, SheetTitle } from "./ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  CalendarIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";

const SideMenu = () => {
  const { data, status } = useSession();
  const HandleLogaut = () => {
    signOut();
  };
  const HandleLogin = () => {
    signIn("google");
  };
  return (
    <>
      <SheetHeader className="text-left border-b border-solid border-secondary p-5">
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>

      {status === "authenticated" && (
        <div>
          <div className="flex items-center justify-around mt-4">
            <div className="flex flex-row items-center gap-3 p-3">
              <Avatar>
                <AvatarImage src={data.user?.image ?? ""} />
              </Avatar>
              <h1>{data.user?.name}</h1>
            </div>
            <Button onClick={HandleLogaut} variant="secondary">
              <LogOutIcon />
            </Button>
          </div>
          <div className="flex flex-col gap-4 w-full p-3">
            <Button
              variant="outline"
              className="flex justify-start gap-3 items-center"
              asChild
            >
              <Link href="/">
                <HomeIcon size={18} />
                Ínicio
              </Link>
            </Button>

            <Button
              variant="outline"
              className="flex justify-start gap-3 items-center"
              asChild
            >
              <Link href="/bookings">
                <CalendarIcon size={18} />
                Agendamentos
              </Link>
            </Button>
          </div>
        </div>
      )}

      {status == "unauthenticated" && (
        <div>
          <div className="flex items-center mt-4">
            <div className="flex flex-row items-center gap-3 p-3">
              <UserIcon size={32} />
            </div>
            <h1>Olá. Faça seu login!</h1>
          </div>

          <div className="flex flex-col gap-4 w-full p-3">
            <Button
              variant="secondary"
              className="flex justify-start gap-3 items-center"
              onClick={HandleLogin}
            >
              <LogInIcon size={18} />
              Fazer Login
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default SideMenu;
