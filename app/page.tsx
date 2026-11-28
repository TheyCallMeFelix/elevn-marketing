import './styles.css';
import Content from './content';
export const metadata = {
  "title": "Elevn — Run the business. Not the chaos.",
  "description": "Elevn brings payments, payment pages, estimates, invoicing, recurring billing, smart forms, customer management and everyday business operations into one Business Operating System.",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Elevn — Run the business. Not the chaos.",
    "description": "Elevn brings payments, payment pages, estimates, invoicing, recurring billing, smart forms, customer management and everyday business operations into one Business Operating System.",
    "url": "/",
    "siteName": "Elevn",
    "type": "website",
    "images": [
      {
        "url": "/og-elevn-hq.png",
        "width": 1200,
        "height": 630
      }
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Elevn — Run the business. Not the chaos.",
    "description": "Elevn brings payments, payment pages, estimates, invoicing, recurring billing, smart forms, customer management and everyday business operations into one Business Operating System.",
    "images": [
      "/og-elevn-hq.png"
    ]
  }
};
export default function Page(){return <Content/>;}
