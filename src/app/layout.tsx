import type { Metadata, Viewport } from "next";
import { Lexend } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend", weight: ["400", "700"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  title: {
    default: "Todoer",
    template: "%s | Todoer",
  },
  description:
    "Todoer is a simple, yet powerful Todo app to help you manage your tasks and stay organized.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          lexend.variable,
          "bg-background text-foreground flex h-dvh flex-col font-sans antialiased",
        )}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
