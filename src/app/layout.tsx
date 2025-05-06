import './globals.css';
import NavBar from '@/components/NavBar';
import { Providers } from './providers';

export const metadata = {
  title: 'Tinder Clone',
  description: 'A swipe-based dating app built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
