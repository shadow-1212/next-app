import './globals.css'
import {Montserrat} from "@next/font/google";
const montserrat = Montserrat({
    weight: ["400", "500"],
    subsets: ['latin'],
    variable: "--font-montserrat",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`${montserrat.className}`}>
          <nav>
              <h1>
                  <ul>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Sign up</a></li>
                  </ul>
              </h1>
          </nav>
        {children}
      </body>
    </html>
  )
}
