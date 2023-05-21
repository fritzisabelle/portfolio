import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Isabelle Bernardes | Portfólio",
  description:
    "Hi! I am UI Developer, using next and tailwind to create amazing applications. Grab a coffee and watch out what I have done in the last few months",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
