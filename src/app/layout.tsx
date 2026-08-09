import type { Metadata } from "next";
import { Inter, Noto_Serif, Rock_Salt } from "next/font/google";
import CoinRain from "@/components/CoinRain";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const rockSalt = Rock_Salt({
  variable: "--font-rock-salt",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CRA - Build Chaos",
  description:
    "The most easy going and winning man's man meme on the internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${notoSerif.variable} ${rockSalt.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CoinRain />
        {/* BREAKING banner — muncul saat chaos mode aktif */}
        <div className="chaos-breaking" aria-hidden>
          <div className="chaos-breaking-inner">
            <span>🚨 BREAKING: CRA RIPPING PAST THE MARKET</span>
            <span>🚨 BREAKING: DEV RUGGED THE LIQUIDITY</span>
            <span>🚨 BREAKING: CHAOS IS OFFICIALLY ON</span>
            <span>🚨 BREAKING: CRA RIPPING PAST THE MARKET</span>
            <span>🚨 BREAKING: DEV RUGGED THE LIQUIDITY</span>
            <span>🚨 BREAKING: CHAOS IS OFFICIALLY ON</span>
            <span>🚨 BREAKING: CRA RIPPING PAST THE MARKET</span>
            <span>🚨 BREAKING: DEV RUGGED THE LIQUIDITY</span>
            <span>🚨 BREAKING: CHAOS IS OFFICIALLY ON</span>
            <span>🚨 BREAKING: CRA RIPPING PAST THE MARKET</span>
            <span>🚨 BREAKING: DEV RUGGED THE LIQUIDITY</span>
            <span>🚨 BREAKING: CHAOS IS OFFICIALLY ON</span>
          </div>
        </div>
      </body>
    </html>
  );
}