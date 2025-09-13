"use client";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";
import { BookOpen, BookMarkedIcon } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { SearchInput } from "./SearchInput";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* LEFT  */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
            >
              <BookOpen className="h-6 w-6 text-emerald-400" />
              <span className="font-bold text-2xl text-emerald-400">
                <span className="md:hidden">RB</span>
                <span className="hidden md:inline">RapidBrain</span>
              </span>
            </Link>

            <SearchInput />
          </div>

          {/* RIGHT */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <nav>
              <SignedIn>
                <Link
                  prefetch={false}
                  href="/my-courses"
                  className="flex space-x-2 items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors md:border md:border-border md:rounded-md md:px-4 md:py-2"
                >
                  <BookMarkedIcon className="h-4 w-4" />
                  <span className="hidden md:block">My Courses</span>
                </Link>
              </SignedIn>
            </nav>
            <DarkModeToggle />

            <SignedIn>
              <UserButton />
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
