import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { BreadcrumbDemo } from "@/components/Bredcrupm";
import Topheader from "@/components/Topheader";
import  Header  from "@/components/Header";
import Navbar from "@/components/Navbar";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
      
    
      <CartProvider>
      <Topheader/>
      <Header/>
    <BreadcrumbDemo />
     {children}
     <Navbar/>

      </CartProvider>
        
        
      </body>
    </html>
  );
}

