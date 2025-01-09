import { LOGIN, SIGNUP, ACCOUNT } from "@/constants/routes";
import { LogInIcon, UserPlusIcon, UserIcon, LogOutIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { logoutAction } from "../actions";

export default async function AuthLinks() {
  const isLoggedIn = true;

  return (
    <ul className="flex items-center gap-2 sm:border-l-2 sm:border-solid sm:border-l-border sm:pl-4 sm:text-base">
      {!isLoggedIn && (
        <>
          <li>
            <Button asChild variant={"ghost"}>
              <Link className="inline-flex" href={LOGIN}>
                <span>Login</span>
                <LogInIcon aria-label="Login" />
              </Link>
            </Button>
          </li>
          <li>
            <Button asChild>
              <Link href={SIGNUP} className="inline-flex">
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
              <Link className="inline-flex" href={ACCOUNT}>
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
      <ul className="flex items-center gap-2 sm:border-l-2 sm:border-solid sm:border-l-border sm:pl-4">
        <li>
          <a className="[&amp;_svg]:size-4 [&amp;_svg]:shrink-0 inline-flex h-10 items-center justify-center gap-2 border border-input px-4 py-2 transition-colors">
            <span>
              <Skeleton className="w-[38.7px] max-w-full" /> {/* w-[55.55px] */}
            </span>
            <SVGSkeleton className="h-[24px] w-[24px]" />
          </a>
        </li>
        <li>
          <a className="[&amp;_svg]:size-4 [&amp;_svg]:shrink-0 inline-flex h-10 items-center justify-center gap-2 px-4 py-2 transition-colors">
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
  <svg className={className + " animate-pulse rounded bg-gray-300"} />
);
