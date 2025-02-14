import { HOMEPAGE } from "@/constants/routes";
import { ListTodoIcon } from "lucide-react";
import Link from "next/link";
import DesktopNavigation from "./navigation";
import { Suspense } from "react";
import AuthLinks, { AuthLinksSkeleton } from "./auth-links";

export default function Header() {
  return (
    <header>
      <div className="container flex h-20 items-center justify-between px-4">
        <Link
          href={HOMEPAGE}
          className="flex items-center justify-start gap-1 text-xl font-semibold"
          prefetch
        >
          <ListTodoIcon size={24} />
          <span>todoer</span>
        </Link>
        <nav className="hidden items-center justify-end sm:flex">
          <DesktopNavigation />
          <Suspense fallback={<AuthLinksSkeleton />}>
            <AuthLinks />
          </Suspense>
        </nav>
      </div>
    </header>
  );
}
