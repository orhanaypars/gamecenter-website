import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

function Navbar() {
  const navLinks = [
    {
      name: "Anasayfa",
      href: "/",
    },
    {
      name: "Hakkımızda",
      href: "/about",
    },
    {
      name: "Bakiye Yükle",
      href: "/balance",
    },
    {
      name: "İletişim",
      href: "/contact",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200/20 bg-blue-900 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-amber-500 hover:text-white">
              Land of MOA
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-sm text-white font-medium hover:text-amber-500"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-2">
            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  variant="outline"
                  className="text-amber-500 border-amber-500 hover:bg-amber-500 hover:text-white"
                >
                  Giriş Yap
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                  Kayıt Ol
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center gap-2">
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "h-10 w-10",
                    },
                  }}
                />
              </div>
            </SignedIn>
          </div>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="p-2 rounded-md focus:outline-none "
                aria-label="Menüyü aç"
              >
                <GiHamburgerMenu size={28} className="text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-4/5 max-w-xs p-0 bg-blue-900 backdrop-blur-lg border-r-0 shadow-xl"
            >
              <div className="h-full flex flex-col">
                <div className="p-4 border-b border-gray-100">
                  <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-amber-500">
                      Land of MOA
                    </span>
                  </Link>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-2">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="block px-4 py-3 text-white rounded-lg transition-colors duration-200 text-base font-medium"
                      onClick={() =>
                        document.dispatchEvent(
                          new KeyboardEvent("keydown", { key: "Escape" })
                        )
                      }
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>

                <div className="p-4 border-t border-gray-100 space-y-3 bg-amber-500">
                  <SignedOut>
                    <SignInButton mode="modal">
                      <Button
                        variant="outline"
                        className="w-full border-amber-500 text-amber-600 hover:bg-amber-50 hover:text-amber-700"
                      >
                        Giriş Yap
                      </Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                        Kayıt Ol
                      </Button>
                    </SignUpButton>
                  </SignedOut>
                  <SignedIn>
                    <div className="flex items-center justify-center p-2">
                      <UserButton
                        afterSignOutUrl="/"
                        appearance={{
                          elements: {
                            avatarBox: "h-10 w-10",
                          },
                        }}
                      />
                      <span className="ml-3 text-sm font-medium text-blue-900">
                        Hesabım
                      </span>
                    </div>
                  </SignedIn>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
