import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import SiteHeader from '../components/site-header';
import SiteFooter from '../components/site-footer';
export const metadata: Metadata={metadataBase:new URL('https://elevnos.com'),title:'Elevn — Business OS',description:'Run the business. Not the chaos.',icons:{icon:'/favicon.svg'},robots:{index:false,follow:false},openGraph:{siteName:'Elevn',type:'website',images:['/og-elevn-hq.png']}};
export const viewport: Viewport={themeColor:'#101113',colorScheme:'dark'};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body className="flex min-h-dvh flex-col"><SiteHeader/><div className="min-w-0 flex-1">{children}</div><SiteFooter/></body></html>}
