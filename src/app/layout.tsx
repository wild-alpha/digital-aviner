import './globals.css';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

// Metadata configuration
export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in Dubai 2025 - Digital Aviner",
  description: "We Do Interior offering unparalleled interior design services in Dubai. With attention to detail and creativity, we transform your vision into reality.",
  alternates: {
    canonical: "https://www.digitalaviner.com/",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
