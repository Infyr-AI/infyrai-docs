import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = resolvedTheme || theme;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <img
        src={currentTheme === "dark" ? "/logo.png" : "/infyr-light.png"}
        alt="Infyr.AI"
        width="128"
        height="128"
      />
      <span style={{ fontWeight: "bold" }}>Documentation</span>
    </div>
  );
};

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/infyr-ai/infyrai-docs",
  },
  docsRepositoryBase: "https://github.com/infyr-ai/infyrai-docs",
  footer: {
    text: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          textAlign: "center",
          padding: "2rem 1rem",
          gap: "1.5rem",
        }}
      >
        {/* Social icons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <a
            href="https://x.com/infyrai"
            aria-label="twitter"
            style={{
              color: "#9CA3AF",
              transition: "all 0.3s ease",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#FFFFFF";
              e.currentTarget.style.backgroundColor = "#374151";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#9CA3AF";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              style={{ fill: "currentColor" }}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.6125 21.5251C16.4625 21.5251 21.2625 14.2126 21.2625 7.87509C21.2625 7.72509 21.2625 7.46259 21.225 7.23759C22.1625 6.56259 22.9875 5.70009 23.625 4.76259C22.725 5.17509 21.825 5.40009 20.8875 5.51259C21.9 4.91259 22.65 3.97509 22.9875 2.8501C22.05 3.3751 21.075 3.78759 19.9125 4.01259C19.0125 3.0751 17.8125 2.4751 16.425 2.4751C13.7625 2.4751 11.5875 4.65009 11.5875 7.31259C11.5875 7.68759 11.625 8.06259 11.7 8.43759C7.8375 8.17509 4.3125 6.26259 1.9125 3.3751C1.5 4.12509 1.275 4.91259 1.275 5.77509C1.275 7.46259 2.1375 8.88759 3.45 9.75009C2.6625 9.71259 1.9125 9.48759 1.275 9.15009C1.275 9.18759 1.275 9.18759 1.275 9.18759C1.275 11.4751 2.925 13.4626 5.1 13.9126C4.6875 14.0251 4.2375 14.0626 3.9 14.0626C3.6 14.0626 3.2625 14.0251 3 13.9501C3.6375 15.8626 5.4 17.2501 7.5 17.2876C5.85 18.5626 3.7875 19.3501 1.575 19.3501C1.125 19.4251 0.75 19.3501 0.375 19.3126C2.4 20.7376 4.9125 21.5251 7.6125 21.5251Z"
                fill="currentColor"
              />
            </svg>
          </a>

          <a
            href="https://dexscreener.com/solana/bwo2dodj4wrra4bhq5dtg7pudxgy9192dkxezhtv8uar"
            aria-label="dexscreener"
            style={{
              color: "#9CA3AF",
              transition: "all 0.3s ease",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#FFFFFF";
              e.currentTarget.style.backgroundColor = "#374151";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#9CA3AF";
              e.currentTarget.style.backgroundColor = "transparent";
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              fillRule="evenodd"
              viewBox="0 0 252 300"
              focusable="false"
            >
              <path d="M151.818 106.866c9.177-4.576 20.854-11.312 32.545-20.541 2.465 5.119 2.735 9.586 1.465 13.193-.9 2.542-2.596 4.753-4.826 6.512-2.415 1.901-5.431 3.285-8.765 4.033-6.326 1.425-13.712.593-20.419-3.197m1.591 46.886l12.148 7.017c-24.804 13.902-31.547 39.716-39.557 64.859-8.009-25.143-14.753-50.957-39.556-64.859l12.148-7.017a5.95 5.95 0 003.84-5.845c-1.113-23.547 5.245-33.96 13.821-40.498 3.076-2.342 6.434-3.518 9.747-3.518s6.671 1.176 9.748 3.518c8.576 6.538 14.934 16.951 13.821 40.498a5.95 5.95 0 003.84 5.845zM126 0c14.042.377 28.119 3.103 40.336 8.406 8.46 3.677 16.354 8.534 23.502 14.342 3.228 2.622 5.886 5.155 8.814 8.071 7.897.273 19.438-8.5 24.796-16.709-9.221 30.23-51.299 65.929-80.43 79.589-.012-.005-.02-.012-.029-.018-5.228-3.992-11.108-5.988-16.989-5.988s-11.76 1.996-16.988 5.988c-.009.005-.017.014-.029.018-29.132-13.66-71.209-49.359-80.43-79.589 5.357 8.209 16.898 16.982 24.795 16.709 2.929-2.915 5.587-5.449 8.814-8.071C69.31 16.94 77.204 12.083 85.664 8.406 97.882 3.103 111.959.377 126 0m-25.818 106.866c-9.176-4.576-20.854-11.312-32.544-20.541-2.465 5.119-2.735 9.586-1.466 13.193.901 2.542 2.597 4.753 4.826 6.512 2.416 1.901 5.432 3.285 8.766 4.033 6.326 1.425 13.711.593 20.418-3.197"></path>
              <path d="M197.167 75.016c6.436-6.495 12.107-13.684 16.667-20.099l2.316 4.359c7.456 14.917 11.33 29.774 11.33 46.494l-.016 26.532.14 13.754c.54 33.766 7.846 67.929 24.396 99.193l-34.627-27.922-24.501 39.759-25.74-24.231L126 299.604l-41.132-66.748-25.739 24.231-24.501-39.759L0 245.25c16.55-31.264 23.856-65.427 24.397-99.193l.14-13.754-.016-26.532c0-16.721 3.873-31.578 11.331-46.494l2.315-4.359c4.56 6.415 10.23 13.603 16.667 20.099l-2.01 4.175c-3.905 8.109-5.198 17.176-2.156 25.799 1.961 5.554 5.54 10.317 10.154 13.953 4.48 3.531 9.782 5.911 15.333 7.161 3.616.814 7.3 1.149 10.96 1.035-.854 4.841-1.227 9.862-1.251 14.978L53.2 160.984l25.206 14.129a41.926 41.926 0 015.734 3.869c20.781 18.658 33.275 73.855 41.861 100.816 8.587-26.961 21.08-82.158 41.862-100.816a41.865 41.865 0 015.734-3.869l25.206-14.129-32.665-18.866c-.024-5.116-.397-10.137-1.251-14.978 3.66.114 7.344-.221 10.96-1.035 5.551-1.25 10.854-3.63 15.333-7.161 4.613-3.636 8.193-8.399 10.153-13.953 3.043-8.623 1.749-17.689-2.155-25.799l-2.01-4.175z"></path>
            </svg>
          </a>
        </div>

        {/* Copyright text */}
        <div
          style={{
            fontSize: "0.875rem",
            color: "#6B7280",
            lineHeight: "1.5",
            textAlign: "center",
          }}
        >
          Infyr.AI 2025. All rights reserved.
        </div>
      </div>
    ),
  },
  head: (
    <>
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
      <meta name="twitter:site:domain" content="docs.infyr.ai" />
      <meta name="twitter:image" content="/logo.png" />
      <meta
        property="og:title"
        content="Infyr.AI Documentation - Decentralized AI Inferencing Platform"
      />
      <meta
        property="og:description"
        content="Infyr.AI is a decentralized, serverless AI inferencing platform built on Solana blockchain. Access powerful AI models with our APIs while solving GPU shortage challenges through our decentralized exchange."
      />
      <meta property="og:image" content="/logo.png" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href="/favicon.ico" />
      <style>{`
        /* Simple footer centering - minimal interference with Nextra */
        footer {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          text-align: center !important;
        }
        
        /* Ensure footer content is centered */
        footer > div {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          width: 100% !important;
          text-align: center !important;
        }
      `}</style>
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
