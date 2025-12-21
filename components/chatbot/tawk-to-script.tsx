import Script from "next/script";

/**
 * Tawk.to Live Chat Script Component
 *
 * Uses Next.js Script component for optimal loading
 * Property ID: 694805130b00e71980bdd24c
 * Widget ID: 1jd0l7m7f
 */
export function TawkToScript() {
  return (
    <Script
      id="tawk-to-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/694805130b00e71980bdd24c/1jd0l7m7f';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
        `,
      }}
    />
  );
}
