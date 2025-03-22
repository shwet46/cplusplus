// pages/_app.tsx
import '@/app/globals.css';
import { Fira_Code } from 'next/font/google';
import type { AppProps } from 'next/app';

// Initialize the font outside the component to avoid re-initialization on re-renders
const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-fira-code',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={firaCode.variable}>
      <Component {...pageProps} />
    </main>
  );
}