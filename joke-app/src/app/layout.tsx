
import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from 'react-redux'
import StoreProvider from '../providers/StoreProvider'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Jokes App",
  description: "Embark on a journey of random giggles",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
