import { useEffect } from "react"
import Script from "next/script"

const GoogleAnalytics: React.FC = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-P8F5G2HMX7');
  }, []);
  return (
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=G-P8F5G2HMX7`}
    />
  )
}

export default GoogleAnalytics