import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { useEffect } from "react";
import { AppProps } from 'next/app';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JonathanK | Portfolio",
  description: "Welcome to Jonathan Kullman's portfolio. Explore my projects, skills, and achievements in [your field/industry]. Get in touch to collaborate or learn more about my work.",
};



export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <>
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                document.body.removeAttribute('cz-shortcut-listen');
              });
            `,
          }}
        />
          </body>
    </html>
    </>
  );
}
