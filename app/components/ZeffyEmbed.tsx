"use client";

import Script from "next/script";
import { useState } from "react";

type ZeffyEmbedProps = {
  /** Zeffy form path, e.g. "/embed/ticketing/chromas-ensemble-enlightenment-concert" */
  formPath: string;
  title?: string;
};

export function ZeffyEmbed({
  formPath,
  title = "Ticketing form powered by Zeffy",
}: ZeffyEmbedProps) {
  const [useFallback, setUseFallback] = useState(false);

  return (
    <div>
      {useFallback ? (
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            height: "450px",
            width: "100%",
            paddingTop: "450px",
          }}
        >
          <iframe
            title={title}
            style={{
              position: "absolute",
              border: 0,
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              width: "100%",
              height: "100%",
            }}
            src={`https://www.zeffy.com${formPath}`}
            allow="payment"
          />
        </div>
      ) : (
        <div data-zeffy-embed data-form-url={formPath} />
      )}
      <Script
        src="https://www.zeffy.com/embed/v2/zeffy-embed.js"
        strategy="afterInteractive"
        onError={() => setUseFallback(true)}
      />
    </div>
  );
}
