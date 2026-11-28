const legacyRoutes=["/","/demo","/pricing","/resources","/solutions","/legal/privacy","/legal/terms","/features/customers","/features/estimates","/features/forms","/features/invoicing","/features/locations","/features/operations","/features/payment-pages","/features/payments","/features/services","/features/text-to-pay"];
/** @type {import('next').NextConfig} */
const config={async redirects(){return [
  ...legacyRoutes.map(route=>({source:route==='/'?'/index.html':route+'.html',destination:route,permanent:true})),
  {source:'/payments/bpf.html',destination:'https://app.elevnos.com/payments/bpf',permanent:false},
  {source:'/payments/atm/agreement',destination:'https://app.elevnos.com/payments/atm/processing-agreement',permanent:false},
  {source:'/payments/atm/agreement.html',destination:'https://app.elevnos.com/payments/atm/processing-agreement',permanent:false},
  {source:'/payments/:path*',destination:'https://app.elevnos.com/payments/:path*',permanent:false},
  {source:'/equipment-financing/:path*',destination:'https://app.elevnos.com/equipment-financing/:path*',permanent:false},
  {source:'/signup',destination:'https://app.elevnos.com/signup',permanent:false},
  {source:'/signin',destination:'https://app.elevnos.com/signin',permanent:false}
];}};
export default config;
