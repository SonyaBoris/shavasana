import "./globals.css";

export const metadata = {
  title: "Шавасана",
  description: "Ретрит центр, база отдыха",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
