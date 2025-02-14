"use client";

import { CONTACT, HOMEPAGE, PRICING, PRIVACY_POLICY, TERMS_OF_USE } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { HomeIcon, WalletIcon, ContactIcon, GlobeLockIcon, HandshakeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <ul className="flex gap-6 pr-6 text-sm">
      <li>
        <Link
          prefetch
          href={HOMEPAGE}
          className={cn(
            "flex items-center justify-between gap-1 p-0.5 opacity-60 hover:opacity-100",
            {
              "opacity-100": pathname === HOMEPAGE,
            },
          )}
        >
          <HomeIcon aria-label="Home" size={16} />
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link
          prefetch
          href={PRICING}
          className={cn(
            "flex items-center justify-between gap-1 p-0.5 opacity-60 hover:opacity-100",
            {
              "opacity-100": pathname === PRICING,
            },
          )}
        >
          <WalletIcon aria-label="Pricing" textDecoration={"underline"} size={16} />
          <span>Pricing</span>
        </Link>
      </li>
      <li>
        <Link
          prefetch
          href={CONTACT}
          className={cn(
            "flex items-center justify-between gap-1 p-0.5 opacity-60 hover:opacity-100",
            {
              "opacity-100": pathname === CONTACT,
            },
          )}
        >
          <ContactIcon aria-label="Contact" size={16} />
          <span>Contact</span>
        </Link>
      </li>
      <li>
        <Link
          prefetch
          href={PRIVACY_POLICY}
          className={cn(
            "flex items-center justify-between gap-1 p-0.5 opacity-60 hover:opacity-100",
            {
              "opacity-100": pathname === PRIVACY_POLICY,
            },
          )}
        >
          <GlobeLockIcon aria-label="Privacy Policy" size={16} />
          <span>Privacy Policy</span>
        </Link>
      </li>
      <li>
        <Link
          prefetch
          href={TERMS_OF_USE}
          className={cn(
            "flex items-center justify-between gap-1 p-0.5 opacity-60 hover:opacity-100",
            {
              "opacity-100": pathname === TERMS_OF_USE,
            },
          )}
        >
          <HandshakeIcon aria-label="Terms of Use" size={16} />
          <span>Terms of Use</span>
        </Link>
      </li>
    </ul>
  );
}
