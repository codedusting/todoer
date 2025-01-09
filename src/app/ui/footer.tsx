import { getYear } from "date-fns";
import MobileNavigation from "./mobile-navigation";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="container flex items-center justify-center px-4">
        <MobileNavigation />
        <div className="hidden flex-col items-center justify-center gap-y-2 sm:flex sm:h-20">
          <p className="text-center">
            Copyright &copy; {getYear(new Date())} Todoer. All Rights Reserved.
          </p>
          <p className="text-center text-xs">
            This website and its content are protected by copyright laws. Unauthorized use or
            duplication without express permission is prohibited.
          </p>
        </div>
      </div>
    </footer>
  );
}
