import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ai-assist-bot": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "ai-assist-bot": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

