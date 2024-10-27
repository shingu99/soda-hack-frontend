import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Label } from "../ui/label";

export default function Navbar() {
  return (
    <div className="flex justify-center w-full">
      <NavigationMenu className="bg-primary -mt-1 shadow-md p-4 rounded-xl">
        <NavigationMenuList className="flex space-x-4">
          <NavigationMenuItem>
            <a href="/" className="text-white hover:text-red-500">
              <Label className="text-base font-semibold hover:cursor-pointer">
                HOME
              </Label>
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="/profile" className="text-white hover:text-red-500">
              <Label className="text-base font-semibold hover:cursor-pointer">
                PROFILE
              </Label>
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="/contact" className="text-white hover:text-red-500">
              <Label className="text-base font-semibold hover:cursor-pointer">
                CONTACT
              </Label>
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
