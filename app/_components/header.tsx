"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  CalendarIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  UserIcon,
} from "lucide-react";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Sheet,
} from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";

const Header = () => {
  const { data, status } = useSession();
  const HandleLogaut = () => {
    signOut();
  };
  const HandleLogin = () => {
    signIn("google");
  };

  return (
    <Card>
      <CardContent className="flex flex-row justify-between items-center p-5">
        <Image src="/logo.png" alt="fsw-Barber" width={120} height={22} />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon size={16} />
            </Button>
          </SheetTrigger>

          <SheetContent className="p-0">
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
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
