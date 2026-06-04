import './globals.css';

// Metadata configuration
export const metadata = {
  title: "AI based IT Solutions & Lead Generation Agency - Digital Aviner",
  description:
    "Digital Aviner offering unparalleled AI powered IT solutions and lead generation services in Dubai.",
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