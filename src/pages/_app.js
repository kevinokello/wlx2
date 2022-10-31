/** Uncomment the below codeblock if you want to add google analytics for more info please visit our docs analytics section */
/** 
import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
*/
import 'rc-drawer/assets/index.css';
import 'assets/css/react-slick.css';
// import "rc-tabs/assets/index.css";

export default function CustomApp({ Component, pageProps }) {
  /** 
   useEffect(() => {
     initGA();
     logPageView();
     Router.events.on('routeChangeComplete', logPageView);
   }, []);
   */
<Script
  id="crisp-widget"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.$crisp=[];
      window.CRISP_WEBSITE_ID="0a0fe994-0166-4acd-ba01-f78afa76ee79";
      (function(){
        const d = document;
        const s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();`,
  }}
/>;
  return <Component {...pageProps} />;
}
