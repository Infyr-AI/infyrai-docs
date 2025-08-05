import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <img src="/logo.png" alt="Infyr.AI" width="128" height="128" />
      <span style={{ fontWeight: "bold" }}>Documentation</span>
    </div>
  ),
  project: {
    link: "https://github.com/infyr-ai/infyrai-docs",
  },
  docsRepositoryBase: "https://github.com/infyr-ai/infyrai-docs",
  footer: {
    text: "Infyr.AI Documentation",
  },
  head: (
    <>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site:domain" content="docs.infyr.ai" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Infyr.AI Docs",
      defaultTitle:
        "Infyr.AI Documentation - Decentralized AI Inferencing Platform",
      description:
        "Infyr.AI is a decentralized, serverless AI inferencing platform built on Solana blockchain. Access powerful AI models with our APIs while solving GPU shortage challenges through our decentralized exchange.",
      openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://docs.infyr.ai",
        siteName: "Infyr.AI Documentation",
        images: [
          {
            url: "/logo.png",
            width: 128,
            height: 128,
            alt: "Infyr.AI Logo",
          },
        ],
      },
      twitter: {
        handle: "@infyrai",
        site: "@infyrai",
        cardType: "summary_large_image",
      },
    };
  },
};

export default config;
