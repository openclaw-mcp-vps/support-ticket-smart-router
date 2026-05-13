import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Support Ticket Smart Router — Route tickets to the right team instantly",
  description: "AI-powered ticket routing that analyzes content and automatically assigns to the correct team with confidence scoring. Integrates with Zendesk, Intercom, and Freshdesk."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="acf0fff5-98c6-4309-ad73-bbdbba1ceeb5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
