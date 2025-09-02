"use client";

import Link from 'next/link';
import {
  Building,
  ChevronDown,
  LogIn,
  LogOut,
  Menu,
  UserPlus,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Icons } from '@/components/icons';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const navLinks = [
  { href: '/buy', label: 'Buy' },
  { href: '/rent', label: 'Rent' },
  { href: '/agents', label: 'For Agents' },
];

export function Header() {
  const isMobile = useIsMobile();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const UserMenu = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={isLoggedIn ? "outline" : "default"}>
         {isLoggedIn ? "My Account" : "Login"}
         {isLoggedIn && <ChevronDown className="h-4 w-4" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {isLoggedIn ? (
          <>
            <DropdownMenuItem asChild>
              <Link href="/dashboard">
                <Building className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log Out</span>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem onClick={() => setIsLoggedIn(true)}>
              <LogIn className="mr-2 h-4 w-4" />
              <span>Sign In</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Sign Up</span>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const MobileNav = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle asChild>
            <Link href="/" className="flex items-center gap-2">
              <Icons.logo className="h-6 w-6" />
              <span className="font-bold">Property SPR</span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-4 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
           <Link
              href={'/dashboard'}
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              Dashboard
            </Link>
        </div>
        <Button className="w-full" variant="outline">List a Property</Button>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <div className="mr-8 flex">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="h-8 w-8" />
            <span className="hidden font-bold sm:inline-block text-lg">
              Property SPR
            </span>
          </Link>
        </div>
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary text-foreground/80 text-base"
              >
                {link.label}
              </Link>
            ))}
             <Link
                href={'/dashboard'}
                className="transition-colors hover:text-primary text-foreground/60 text-base"
              >
                Dashboard
              </Link>
          </nav>
        )}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="outline" className="hidden md:flex">List a Property</Button>
          <div className="hidden md:block">
            <UserMenu />
          </div>
          {isMobile && <MobileNav />}
        </div>
      </div>
    </header>
  );
}
