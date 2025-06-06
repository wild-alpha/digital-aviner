import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Dubai - Luxury Interior Designers in UAE",
  description:
    "Best interior design company in Dubai. We Do Interior Design. We are offering professional services of Interior Design and fitout. Contact us today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
      
      </body>
    </html>
  );
}
