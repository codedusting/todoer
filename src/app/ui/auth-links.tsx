import Link from "next/link";

import { LogInIcon, LogOutIcon, UserIcon, UserPlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ACCOUNT, LOGIN, SIGNUP } from "@/constants/routes";

import { logoutAction } from "../actions";

export default async function AuthLinks() {
  const isLoggedIn = true;

  return (
    <ul className="sm:border-l-border flex items-center gap-2 sm:border-l-2 sm:border-solid sm:pl-4 sm:text-base">
      {!isLoggedIn && (
        <>
          <li>
            <Button asChild variant={"ghost"}>
              <Link className="inline-flex" href={LOGIN} prefetch>
                <span>Login</span>
                <LogInIcon aria-label="Login" />
              </Link>
            </Button>
          </li>
          <li>
            <Button asChild>
              <Link href={SIGNUP} className="inline-flex" prefetch>
                <span>Start for free</span>
                <UserPlusIcon aria-label="Sign up" />
              </Link>
            </Button>
          </li>
        </>
      )}
      {isLoggedIn && (
        <>
          <li>
            <Button asChild variant={"ghost"}>
              <Link className="inline-flex" href={ACCOUNT} prefetch>
                <span>Account</span>
                <UserIcon aria-label="Login" />
              </Link>
            </Button>
          </li>
          <li>
            <form action={logoutAction}>
              <Button>
                <span>Logout</span>
                <LogOutIcon aria-label="Sign up" />
              </Button>
            </form>
          </li>
        </>
      )}
    </ul>
  );
}

export function AuthLinksSkeleton() {
  return (
    <>
      <ul className="sm:border-l-border flex items-center gap-2 sm:border-l-2 sm:border-solid sm:pl-4">
        <li>
          <a className="border-input inline-flex h-10 items-center justify-center gap-2 border px-4 py-2 transition-colors [&_svg]:size-4 [&_svg]:shrink-0">
            <span>
              <Skeleton className="w-[38.7px] max-w-full" /> {/* w-[55.55px] */}
            </span>
            <SVGSkeleton className="h-[24px] w-[24px]" />
          </a>
        </li>
        <li>
          <a className="inline-flex h-10 items-center justify-center gap-2 px-4 py-2 transition-colors [&_svg]:size-4 [&_svg]:shrink-0">
            <span>
              <Skeleton className="w-[90.35px] max-w-full" /> {/* w-[48.91px] */}
            </span>
            <SVGSkeleton className="h-[24px] w-[24px]" />
          </a>
        </li>
      </ul>
    </>
  );
}

const SVGSkeleton = ({ className }: { className: string }) => (
  <svg className={className + " animate-pulse rounded-xs bg-gray-300"} />
);
