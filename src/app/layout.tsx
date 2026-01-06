import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Ramesys - Digital Systems Engineered for Scale",
  description: "We build custom-coded digital systems, applications, and software designed to scale, perform, and integrate seamlessly with your business.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className="font-display bg-background-dark text-[#E0E0E0] antialiased"
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
