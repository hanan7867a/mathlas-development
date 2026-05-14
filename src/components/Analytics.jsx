import { Helmet } from 'react-helmet-async'

const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID
const gscVerification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION
const metaPixelId = import.meta.env.VITE_META_PIXEL_ID

function Analytics() {
  return (
    <Helmet>
      {gscVerification && <meta name="google-site-verification" content={gscVerification} />}

      {gaId && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
          <script>
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}', { anonymize_ip: true });`}
          </script>
        </>
      )}

      {metaPixelId && (
        <>
          <script>
            {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${metaPixelId}');
fbq('track', 'PageView');`}
          </script>
          <noscript>{`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1" alt="" />`}</noscript>
        </>
      )}
    </Helmet>
  )
}

export default Analytics
