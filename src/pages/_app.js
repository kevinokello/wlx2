/** Uncomment the below codeblock if you want to add google analytics for more info please visit our docs analytics section */
/** 
import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
*/
import dynamic from "next/dynamic";
import 'rc-drawer/assets/index.css';
import 'assets/css/react-slick.css';
// import "rc-tabs/assets/index.css";
const CrispWithNoSSR = dynamic(
  () => import('../components/crisp'),
  { ssr: false }
)
export default function CustomApp({ Component, pageProps }) {
  /** 
   useEffect(() => {
     initGA();
     logPageView();
     Router.events.on('routeChangeComplete', logPageView);
   }, []);
   */

  return <Component {...pageProps} />;
  
}
