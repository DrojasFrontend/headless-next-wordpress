import localFont from "next/font/local";
import "../styles/global.scss";
import "slick-carousel/slick/slick.css";

const Bilo = localFont({
  src: "./fonts/Bilo.woff",
  variable: "--font-bilo",
  weight: "400",
});

const BiloBold = localFont({
  src: "./fonts/Bilo-Bold.woff",
  variable: "--font-bilobold",
  weight: "700",
});


export const metadata = {
  title: 'Tu Sitio WordPress',
  description: 'Next.js + WordPress',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Bilo.variable} ${BiloBold.variable}`}>
        {children}
      </body>
    </html>
  )
}
