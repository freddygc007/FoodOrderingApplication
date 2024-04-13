import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent>
        <span>Welcome to MernEats.con!</span>
      </SheetContent>
      <Separator />
      <SheetDescription className="flex">
        <Button className="flex-1 font-bold bg-orange-500"> Log In</Button>
      </SheetDescription>
    </Sheet>
  );
};

export default MobileNav;