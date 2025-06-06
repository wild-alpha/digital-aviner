import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Digital Marketing Company Dubai, 2025 - Digital Aviner",
  description:
    "Digital Aviner is the leading digital marketing company in Dubai for 2025, offering expert services in SEO, social media marketing, Google Ads, content creation, and web design. Trusted by businesses across the UAE to drive results, increase ROI, and grow online visibility. Book your free strategy session today!",
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
