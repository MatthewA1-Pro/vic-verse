import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vortex Analytics | AI-Powered Data Insights",
  description: "The world's most advanced data analytics platform. Predictive insights, real-time dashboards, and AI automation built for modern startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body className="bg-slate-950 text-slate-50 font-sans selection:bg-primary/30 selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
