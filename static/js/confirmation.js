//!-- TikTok Pixel Code -->

!function (w, d, t) {
      w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++
)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=i+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
    
      ttq.load('CGMGMNBC77UBEG41A60G');
      ttq.page();
    }(window, document, 'ttq');

//!-- End TikTok Pixel Code -->

//!-- Google Tracking Tags -->
// Google tag (gtag.js)
var gtagScript = document.createElement('script');
gtagScript.async = true;
gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11064141022';
document.head.appendChild(gtagScript);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'AW-11064141022');

// Google Event snippet for Begin Checkout conversion page
gtag('event', 'conversion', {'send_to': 'AW-11064141022/sur-COeN_5UYEN7J5Zsp'});


// Fathom Confirmation Event
window.addEventListener('load', (event) => {
      fathom.trackGoal('KURKINW3', 6200);
  });
  