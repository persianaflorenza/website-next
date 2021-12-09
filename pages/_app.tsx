import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '../assets/tailwind.css';
import { GlobalStyles } from 'twin.macro';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
