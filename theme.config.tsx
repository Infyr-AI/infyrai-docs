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
    link: "https://github.com/infyr-ai/examples",
  },
  docsRepositoryBase: "https://github.com/infyr-ai/examples",
  footer: {
    text: "Infyr.AI Documentation",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Infyr.AI Docs",
    };
  },
};

export default config;
