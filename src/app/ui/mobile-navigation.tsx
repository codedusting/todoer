"use client";

import {
  ACCOUNT,
  CONTACT,
  HOMEPAGE,
  LOGIN,
  LOGOUT,
  PRICING,
  PRIVACY_POLICY,
  SIGNUP,
  TERMS_OF_USE,
} from "@/constants/routes";
import { cn } from "@/lib/utils";
import {
  ContactIcon,
  GlobeLockIcon,
  HandshakeIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  UserIcon,
  UserPlusIcon,
  WalletIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNavigation() {
  const pathname = usePathname();
  const isLoggedIn = false;

  return (
    <nav className="w-full sm:hidden">
      <ul className="flex items-center justify-between">
        <li className="flex-1">
          <Link
            prefetch
            href={HOMEPAGE}
            className={cn(
              "flex flex-col items-center justify-center gap-1 border-t-2 border-solid border-t-transparent p-0.5 pt-1 opacity-60 hover:opacity-100",
              {
                "border-t-primary opacity-100": pathname === HOMEPAGE,
              },
            )}
          >
            <HomeIcon aria-label="Home" size={16} />
            <span className="text-xs">Home</span>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            prefetch
            href={PRICING}
            className={cn(
              "flex flex-col items-center justify-center gap-1 border-t-2 border-solid border-t-transparent p-0.5 pt-1 opacity-60 hover:opacity-100",
              {
                "border-t-primary opacity-100": pathname === PRICING,
              },
            )}
          >
            <WalletIcon aria-label="Pricing" textDecoration={"underline"} size={16} />
            <span className="text-xs">Pricing</span>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            prefetch
            href={CONTACT}
            className={cn(
              "flex flex-col items-center justify-center gap-1 border-t-2 border-solid border-t-transparent p-0.5 pt-1 opacity-60 hover:opacity-100",
              {
                "border-t-primary opacity-100": pathname === CONTACT,
              },
            )}
          >
            <ContactIcon aria-label="Contact" size={16} />
            <span className="text-xs">Contact</span>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            prefetch
            href={PRIVACY_POLICY}
            className={cn(
              "flex flex-col items-center justify-center gap-1 border-t-2 border-solid border-t-transparent p-0.5 pt-1 opacity-60 hover:opacity-100",
              {
                "border-t-primary opacity-100": pathname === PRIVACY_POLICY,
              },
            )}
          >
            <GlobeLockIcon aria-label="Privacy Policy" size={16} />
            <span className="text-xs">Privacy</span>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            prefetch
            href={TERMS_OF_USE}
            className={cn(
              "flex flex-col items-center justify-center gap-1 border-t-2 border-solid border-t-transparent p-0.5 pt-1 opacity-60 hover:opacity-100",
              {
                "border-t-primary opacity-100": pathname === TERMS_OF_USE,
              },
            )}
          >
            <HandshakeIcon aria-label="Terms of Use" size={16} />
            <span className="text-xs">Terms</span>
          </Link>
        </li>
        {!isLoggedIn && (
          <>
            <li className="flex-1">
              <Link
                prefetch
                className={cn(
                  "flex flex-col items-center justify-center gap-1 border-t-2 border-solid border-t-transparent p-0.5 pt-1 opacity-60 hover:opacity-100",
                  {
                    "border-t-primary opacity-100": pathname === LOGIN,
                  },
                )}
                href={LOGIN}
              >
                <LogInIcon aria-label="Login" size={16} />
                <span className="text-xs">Login</span>
              </Link>
            </li>
            <li className="flex-1">
              <Link
                prefetch
                href={SIGNUP}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 border-t-2 border-solid border-t-transparent p-0.5 pt-1 opacity-60 hover:opacity-100",
                  {
                    "border-t-primary opacity-100": pathname === SIGNUP,
                  },
                )}
              >
                <UserPlusIcon aria-label="Sign up" size={16} />
                <span className="text-xs">Register</span>
              </Link>
            </li>
          </>
        )}
        {isLoggedIn && (
          <>
            <li className="flex-1">
              <Link
                prefetch
                href={ACCOUNT}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 border-t-2 border-solid border-t-transparent p-0.5 pt-1 opacity-60 hover:opacity-100",
                  {
                    "border-t-primary opacity-100": pathname === ACCOUNT,
                  },
                )}
              >
                <UserIcon aria-label="Account" size={16} />
                <span className="text-xs">Account</span>
              </Link>
            </li>
            <li className="flex-1">
              <Link
                prefetch
                className={cn(
                  "flex flex-col items-center justify-center gap-1 border-t-2 border-solid border-t-transparent p-0.5 pt-1 opacity-60 hover:opacity-100",
                  {
                    "border-t-primary opacity-100": pathname === LOGOUT,
                  },
                )}
                href={LOGOUT}
              >
                <LogOutIcon aria-label="Login" size={16} />
                <span className="text-xs">Logout</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
