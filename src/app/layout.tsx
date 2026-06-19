import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Ritik Saxena — AI Engineer & Data Scientist",
  description:
    "Premium AI engineering portfolio for Ritik Saxena, focused on GenAI, LLMs, RAG systems, MLOps, NLP, and production AI systems.",
  keywords: [
    "Ritik Saxena",
    "AI Engineer",
    "Data Scientist",
    "Generative AI",
    "LLM",
    "RAG",
    "LangGraph",
    "MLOps",
    "NLP",
    "FastAPI",
  ],
  openGraph: {
    title: "Ritik Saxena — AI Engineer & Data Scientist",
    description:
      "Building production-grade intelligent systems across GenAI, RAG, NLP, MLOps, and applied machine learning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geist.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}