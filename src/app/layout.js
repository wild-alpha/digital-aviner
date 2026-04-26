import './globals.css';

// Metadata configuration
export const metadata = {
  title: "Best Digital Marketing Agency in Dubai 2025 - Digital Aviner",
  description:
    "We Do Interior offering unparalleled interior design services in Dubai. With attention to detail and creativity, we transform your vision into reality.",
  alternates: {
    canonical: "https://www.digitalaviner.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}