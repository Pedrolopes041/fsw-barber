import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return ( 
        <Card>
            <CardContent className="flex flex-row justify-between items-center p-5">
                <Image src="/logo.png" alt="fsw-Barber" width={120} height={22}/>
                <Button variant="outline" size="icon">
                    <MenuIcon size={18}/>
                </Button>
            </CardContent>
        </Card>
     );
}
 
export default Header;