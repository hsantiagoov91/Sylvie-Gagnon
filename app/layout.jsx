import "./globals.css";

export const metadata = {
  title: "Industrial Line Card | Sylvie Gagnon",
  description:
    "Strategic line card for industrial fasteners, tooling, and supply partners.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
