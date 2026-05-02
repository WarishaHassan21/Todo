import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Todo App",
  description: "Full-stack Todo application with Next.js, NestJS, Prisma",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-slate-900 dark:text-white transition-colors duration-300">
        {/* MAIN CONTENT ONLY */}
        <main className="flex-grow container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}