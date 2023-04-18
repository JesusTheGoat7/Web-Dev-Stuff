import {Nunito} from "next/font/google";
import './globals.css'
import Navbar from "./components/navbar/Navbar";

export const metadata = {
  title: 'NiDi',
  description: 'NiDi-Support',
}
const font = Nunito({
  subsets: ["latin"],
}); 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="main">
        <Navbar />
        {children}</body>
    </html>
  )
  }