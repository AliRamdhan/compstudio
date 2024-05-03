import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "@/laduny/components/Header";
import Footer from "@/laduny/components/Footer";
const inter = Inter({ subsets: ["latin"] });


function MainLayout({children,}: Readonly <{children: React.ReactNode;}>) {
  return (
    <div className="bg-black text-white">
      <ChakraProvider>
        <Header />
        <main className="w-full min-h-screen">{children}</main>
        <Footer />
      </ChakraProvider>
    </div>
  )
}

export default MainLayout
