import "./globals.css";
import { Montserrat } from 'next/font/google';

export const metadata = {
  title: "Шавасана",
  description: "Ретрит центр, база отдыха",
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
