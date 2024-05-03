import "./globals.css";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
   title: {
      template: "%s | Laduny Computer",
      default: "Laduny Computer",
   },
   description: "Laduny Computer is a service computer",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={poppins.className}>
            {children}
         </body>
      </html>
   );
}
