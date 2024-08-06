export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "Cashini",
  description: "Cashini is a modern banking platform for everyone. Cashini is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.",
  generator: 'Next.js',
  authors: [
    {
      name: 'mohamed ali hosni',
    }
  ],
  applicationName: 'Cashini',
  keywords: ["Online Banking Platform", "Financial SaaS Platform", "Modern Banking App", "Real-Time Transactions", 
    "Bank Account Integration", "Money Transfer App", "Personal Finance Management", "Multi-Bank Connection", 
    "Secure Online Payments", "Financial Dashboard", "Banking Platform for Everyone", "Real-Time Transaction Tracking", 
    "Multiple Bank Account Management", "In-App Money Transfers", "Financial Data Visualization", "Budgeting Tools", 
    "Expense Tracking", "Financial Planning Tools", "Secure Banking Platform", "User-Friendly Banking App", 
    "Personal Finance App", "Bank Statement Aggregation", "P2P Money Transfer", "Financial Security", "Financial SaaS Solution",
    "JavaScript Banking App", "React Banking App", "Next.js Financial Platform", "Node.js Backend", "API Integration for Banking", 
    "Real-Time WebSockets", "Financial SaaS SEO", "Web App SEO Optimization", "Responsive Financial Dashboard", 
    "Tailwind CSS for Banking UI", "RESTful API for Banking", "Secure API Endpoints", 
    "How to manage multiple bank accounts in one app", "Best financial SaaS platform for small businesses", 
    "Real-time bank transaction tracking for users", "Secure money transfer app with low fees", 
    "All-in-one personal finance management app",
  ],
  openGraph: {
    title: 'Cashini',
    description: "Cashini is a modern banking platform for everyone. Cashini is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.",
    images: [
      {
        url: '/icons/logo.svg',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    creator: 'mohamedalihosni',
    title: 'Cashini',
    description: "Cashini is a modern banking platform for everyone. Cashini is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.",
    images: [
      {
        url: '/icons/logo.svg',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
