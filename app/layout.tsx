import { Navbar, Footer } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <body>{children}</body>
      <Footer />
    </>
  );
}
