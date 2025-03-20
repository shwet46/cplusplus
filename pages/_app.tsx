import '@/styles/globals.css';
import { Fira_Code } from '@next/font/google';

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-fira-code',
});

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={firaCode.variable}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;