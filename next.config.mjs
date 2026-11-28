const legacyRoutes=["/","/demo","/pricing","/resources","/solutions","/legal/privacy","/legal/terms","/features/customers","/features/estimates","/features/forms","/features/invoicing","/features/locations","/features/operations","/features/payment-pages","/features/payments","/features/services","/features/text-to-pay"];
/** @type {import('next').NextConfig} */
const config={async redirects(){return legacyRoutes.map(route=>({source:route==='/'?'/index.html':route+'.html',destination:route,permanent:true}));}};
export default config;
