import Script from "next/script";
import { env } from "@/lib/env";

function gtmContainerId(value: string | undefined): string | undefined {
  if (!value) {
    return undefined;
  }

  return /^GTM-[A-Z0-9]+$/i.test(value) ? value : undefined;
}

function gaMeasurementId(value: string | undefined): string | undefined {
  if (!value) {
    return undefined;
  }

  return /^G-[A-Z0-9]+$/i.test(value) ? value : undefined;
}

/**
 * Loads Google Tag Manager when NEXT_PUBLIC_GTM_ID is set.
 * Otherwise loads Google Analytics 4 when NEXT_PUBLIC_GA_MEASUREMENT_ID is set.
 * Never loads both — GTM should own tags if it is in use.
 */
export function Analytics() {
  const gtmId = gtmContainerId(env.gtmId);
  const gaId = gaMeasurementId(env.gaMeasurementId);

  if (gtmId) {
    return (
      <>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            className="hidden"
            title="Google Tag Manager"
          />
        </noscript>
      </>
    );
  }

  if (!gaId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
      </Script>
    </>
  );
}
