import "./globals.css";
import { Providers } from "./providers";
import { fonts } from "./fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.roboto.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
