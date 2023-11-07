import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* These meta tags should mostly be at the page level with content specific to that page but for the sake of simplicity I've added them here */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Loch: You can't improve what you don't measure"
        />
        <meta
          property="og:description"
          content="Loch provides institution-grade wallet aggregation for retail investors across leading blockchains. Wallet privacy and anonymity are protected."
        />
        <meta
          property="og:image"
          content="https://framerusercontent.com/images/DaBP3rf7HbH8IEFOjxcweyFs0.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Loch: You can't improve what you don't measure"
        />
        <meta
          name="twitter:description"
          content="Loch provides institution-grade wallet aggregation for retail investors across leading blockchains. Wallet privacy and anonymity are protected.

"
        />
        <meta
          name="twitter:image"
          content="https://framerusercontent.com/images/DaBP3rf7HbH8IEFOjxcweyFs0.jpg"
        />
        <meta name="author" content="Loch" />
        <meta
          name="keywords"
          content="Loch, crypto, cryptocurrency, wallet, wallets, aggregation, retail, investors, blockchains, privacy, anonymity, protected"
        />
      </Head>

      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
