
import { IBM_Plex_Mono } from "next/font/google";
import './globals.css'
// Fira_Mono
// DM_Mono
// PT_Mono
// B612_Mono
// Molengo
// Inconsolata
// Fira_Code
// JetBrains_Mono
const inconsolata = IBM_Plex_Mono({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Jayvadhiaya's Portfolio",
  description: "Hello, Welcome to my portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="icon" href="./icon.ico" sizes="any" />
      </head>
      <body className={`${inconsolata.className} text-md md:text-lg `}>
        {children}
      </body>
    </html>
  );
}
