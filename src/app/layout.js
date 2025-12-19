import { Crimson_Text, Ultra } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "@/components/Navbar";

const ultra = Ultra({
  variable: "--font-ultra",
  subsets: ['latin'],
  weight: ['400'],
})

const crimsonText = Crimson_Text({
  variable: "--font-crimson-text",
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export const metadata = {
  title: "Portfolio V2",
  description: "Created by Seth Arvin Gripon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${crimsonText.variable} ${ultra.variable} `}
      >
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
