import './globals.css';

// Metadata configuration
export const metadata = {
  title: "Agentic AI Marketing Agency for Global Brands | Digital Aviner",
  description:
    "Digital Aviner pairs strategists with autonomous AI agents that optimize campaigns in real time, for brands scaling into new global markets.",
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