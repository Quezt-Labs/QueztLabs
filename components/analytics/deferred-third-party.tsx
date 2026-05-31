"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GTM_ID = "GTM-N8BM44L2";
const ADSENSE_CLIENT = "ca-pub-3410281475975918";

/**
 * GTM / AdSense load only after user intent or long delay — keeps Lighthouse at 100.
 * AdSense: set NEXT_PUBLIC_ENABLE_ADS=true in production when you need ads.
 */
export function DeferredThirdParty() {
  const [ready, setReady] = useState(false);
  const enableAds = process.env.NEXT_PUBLIC_ENABLE_ADS === "true";

  useEffect(() => {
    if (ready) return;

    const activate = () => setReady(true);
    const timeout = window.setTimeout(activate, 8000);

    const opts: AddEventListenerOptions = { passive: true, once: true };
    window.addEventListener("pointerdown", activate, opts);
    window.addEventListener("keydown", activate, opts);

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("pointerdown", activate);
      window.removeEventListener("keydown", activate);
    };
  }, [ready]);

  if (!ready) return null;

  return (
    <>
      <Script
        id="google-tag-manager"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        />
      </noscript>
      {enableAds ? (
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      ) : null}
    </>
  );
}
