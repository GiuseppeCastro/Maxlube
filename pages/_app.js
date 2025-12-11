import Head from 'next/head';
import '../styles/global.css';
import '../src/components/MaxTifiSection.css';
import '../src/components/CertificationsSection.css';
import '../src/components/Footer.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
