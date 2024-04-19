import { CircleUserRound, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        {isAuthenticated ? (
          <span className="flex items-center font-bold gap-2">
            {user?.picture ? (
              <div>
                <img
                  src={user.picture}
                  className="h-[50px] rounded-full"
                  alt=""
                />
              </div>
            ) : (
              <CircleUserRound className="text-orange-500" />
            )}{" "}
            {user?.email}
          </span>
        ) : (
          <span>Welcome to MernEats.con!</span>
        )}
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              onClick={async () => await loginWithRedirect()}
              className="flex-1 font-bold bg-orange-500"
            >
              {" "}
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
