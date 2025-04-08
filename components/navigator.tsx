import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

export const Navigator = ({ color }: { color: string }) => {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="size-6" style={{ color }} />
      </SheetTrigger>
      <SheetContent side="left" className="w-full">
        <SheetHeader>
          <SheetTitle className="px-4">
            <Image src="/logo.png" alt="logo" width={43} height={43} />
          </SheetTitle>
          <SheetDescription className={cn(loggedIn && "text-start")}>
            {loggedIn ? (
              <>
                <div className="flex flex-col items-start gap-6 py-6 border-b border-[#1A1A1A0D]">
                  <Link
                    href="/"
                    className="text-[#001224] text-base font-medium leading-6 hover:bg-[#F4F5F6] w-full py-1.5 px-4"
                  >
                    Messages
                  </Link>
                  <Link
                    href="/"
                    className="text-[#001224] text-base font-medium leading-6 hover:bg-[#F4F5F6] w-full py-1.5 px-4"
                  >
                    Notfications
                  </Link>
                  <Link
                    href="/"
                    className="text-[#001224] text-base font-medium leading-6 hover:bg-[#F4F5F6] w-full py-1.5 px-4"
                  >
                    Bookings
                  </Link>
                  <Link
                    href="/"
                    className="text-[#001224] text-base font-medium leading-6 hover:bg-[#F4F5F6] w-full py-1.5 px-4"
                  >
                    Wishlist
                  </Link>
                  <Link
                    href="/"
                    className="text-[#001224] text-base font-medium leading-6 hover:bg-[#F4F5F6] w-full py-1.5 px-4"
                  >
                    VenCredit
                  </Link>
                  <Link
                    href="/"
                    className="text-[#001224] text-base font-medium leading-6 hover:bg-[#F4F5F6] w-full py-1.5 px-4"
                  >
                    Gift Cards
                  </Link>
                </div>
                <div className="flex flex-col gap-6 py-6 border-b border-[#1A1A1A0D]">
                  <Link
                    href="/"
                    className="text-[#001224] text-base font-medium leading-6 hover:bg-[#F4F5F6] w-full py-1.5 px-4"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/"
                    className="text-[#001224] text-base font-medium leading-6 hover:bg-[#F4F5F6] w-full py-1.5 px-4"
                  >
                    Become a Host
                  </Link>
                </div>
                <div className="mt-6">
                  <p
                    onClick={() => setLoggedIn(false)}
                    className="text-[#001224] text-base font-medium leading-6 hover:bg-[#F4F5F6] w-full py-1.5 px-4"
                  >
                    Log Out
                  </p>
                </div>
              </>
            ) : (
              <div className="flex flex-col gap-6 py-6">
                <Link
                  href="/"
                  className="text-[#001224] text-base font-medium leading-6 hover:bg-[#F4F5F6] w-full py-1.5 px-4"
                >
                  Browse Spaces
                </Link>
                <p
                  onClick={() => setLoggedIn(true)}
                  className="text-[#001224] text-base font-medium leading-6 hover:bg-[#F4F5F6] w-full py-1.5 px-4"
                >
                  Log In
                </p>
                <Link
                  href="/"
                  className="text-[#001224] text-base font-medium leading-6 hover:bg-[#F4F5F6] w-full py-1.5 px-4"
                >
                  Sign Up
                </Link>
                <Button>Become a Host</Button>
              </div>
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
