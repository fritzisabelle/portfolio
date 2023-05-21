import "../globals.css";
<link rel="stylesheet" href="https://use.typekit.net/lgr2kqq.css" />;

export const metadata = {
  title: "Isabelle Bernardes | Portfolio",
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
      <body>{children}</body>
    </html>
  );
}
