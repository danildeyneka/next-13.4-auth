import 'normalize.css/normalize.css';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Provider from '@/app/provider';

const font = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next JWT auth',
  description: 'Credentials provider playground with Next 13.4+',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Provider>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
