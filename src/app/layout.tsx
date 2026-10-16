import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const getSiteUrl = () => {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'https://wedding-hung-lan.aish.onl');
  return envUrl.startsWith('http') ? envUrl : `https://${envUrl}`;
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Thiệp mời đám cưới Hùng - Lan",
  description: "Trân trọng kính mời quý khách đến dự lễ cưới của Minh Hùng & Hương Lan",
  openGraph: {
    title: "Thiệp mời đám cưới Hùng - Lan",
    description: "Trân trọng kính mời quý khách đến dự lễ cưới của Minh Hùng & Hương Lan",
    url: "/",
    siteName: "Thiệp cưới Hùng - Lan",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/anh_cuoi_hung_lan/SM_02631_1.jpeg",
        width: 1920,
        height: 2879,
        alt: "Thiệp mời đám cưới Hùng - Lan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiệp mời đám cưới Hùng - Lan",
    description: "Trân trọng kính mời quý khách đến dự lễ cưới của Minh Hùng & Hương Lan",
    images: ["/images/anh_cuoi_hung_lan/SM_02631_1.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=The+Nautigal:wght@400;700&family=Viaoda+Libre&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
