import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta
          name="title"
          content="Infyr.AI Documentation - Decentralized AI Inferencing Platform"
        />
        <meta
          name="description"
          content="Infyr.AI is a decentralized, serverless AI inferencing platform built on Solana blockchain. Access powerful AI models with our APIs while solving GPU shortage challenges through our decentralized exchange."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://docs.infyr.ai" />
        <meta
          property="og:title"
          content="Infyr.AI Documentation - Decentralized AI Inferencing Platform"
        />
        <meta
          property="og:description"
          content="Infyr.AI is a decentralized, serverless AI inferencing platform built on Solana blockchain. Access powerful AI models with our APIs while solving GPU shortage challenges through our decentralized exchange."
        />
        <meta property="og:image" content="https://docs.infyr.ai/logo.png" />
        <meta property="og:site_name" content="Infyr.AI Documentation" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@infyrai" />
        <meta name="twitter:creator" content="@infyrai" />
        <meta
          name="twitter:title"
          content="Infyr.AI Documentation - Decentralized AI Inferencing Platform"
        />
        <meta
          name="twitter:description"
          content="Infyr.AI is a decentralized, serverless AI inferencing platform built on Solana blockchain. Access powerful AI models with our APIs while solving GPU shortage challenges through our decentralized exchange."
        />
        <meta name="twitter:image" content="https://docs.infyr.ai/logo.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://docs.infyr.ai" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
