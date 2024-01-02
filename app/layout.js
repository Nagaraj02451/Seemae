import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Components/Navbar/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Seemae',
  description: 'Ooty,Nilgiri',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/fav.png" sizes="any" />
      <body className={inter.className}>
      
        {children}
        </body>
    </html>
  )
}
