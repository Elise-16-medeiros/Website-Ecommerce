import { UserButton } from "@clerk/nextjs";
import { MainNav } from "./Main-nav";
import StoreSwitcher from "../store-switcher";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher />
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
}
