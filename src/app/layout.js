import './globals.css';

// Metadata configuration
export const metadata = {
  title: "AI Powered Software Solutions & Lead Generation Agency - Digital Aviner",
  description:
    "Digital Aviner offering unparalleled AI powered software solutions and lead generation services across the world including Dubai.",
  alternates: {
    canonical: "https://digitalaviner.com/",
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