import { roboto } from "../app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <main className="flex min-h-screen flex-col items-center p-24">
          <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
            <h2 className="text-2xl text-bold">Animal finder</h2>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
