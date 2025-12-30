"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import { getSubdomainFromHost, getSubdomainConfig } from "@/lib/subdomain-utils";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [metadata, setMetadata] = useState({
    title: "EmCriciúma.com.br",
    description: "Plataforma de serviços para Criciúma",
    keywords: "",
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const host = window.location.host;
      const subdomain = getSubdomainFromHost(host);
      const config = getSubdomainConfig(subdomain);
      
      if (config) {
        setMetadata({
          title: config.title,
          description: config.description,
          keywords: config.keywords.join(', '),
        });
        
        // Atualiza o título da página
        document.title = config.title;
        
        // Atualiza meta tags
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', config.description);
        } else {
          metaDescription = document.createElement('meta');
          metaDescription.setAttribute('name', 'description');
          metaDescription.setAttribute('content', config.description);
          document.head.appendChild(metaDescription);
        }
        
        // Adiciona meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
          metaKeywords.setAttribute('content', config.keywords.join(', '));
        } else {
          metaKeywords = document.createElement('meta');
          metaKeywords.setAttribute('name', 'keywords');
          metaKeywords.setAttribute('content', config.keywords.join(', '));
          document.head.appendChild(metaKeywords);
        }

        // Open Graph
        const ogTags = [
          { property: 'og:title', content: config.title },
          { property: 'og:description', content: config.description },
          { property: 'og:type', content: 'website' },
          { property: 'og:locale', content: 'pt_BR' },
        ];

        ogTags.forEach(tag => {
          let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
          if (ogTag) {
            ogTag.setAttribute('content', tag.content);
          } else {
            ogTag = document.createElement('meta');
            ogTag.setAttribute('property', tag.property);
            ogTag.setAttribute('content', tag.content);
            document.head.appendChild(ogTag);
          }
        });
      }

      // Adiciona scripts de tracking apenas para apartamentosavenda
      if (subdomain === 'apartamentosavenda') {
        // Microsoft Clarity
        if (!document.querySelector('script[data-clarity]')) {
          const clarityScript = document.createElement('script');
          clarityScript.type = 'text/javascript';
          clarityScript.setAttribute('data-clarity', 'true');
          clarityScript.innerHTML = `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "utshat987k");
          `;
          document.head.appendChild(clarityScript);
        }

        // Google Ads (gtag.js)
        if (!document.querySelector('script[src*="googletagmanager"]')) {
          // Script async do gtag.js
          const gtagScript = document.createElement('script');
          gtagScript.async = true;
          gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17843619481';
          document.head.appendChild(gtagScript);

          // Script de configuração do gtag
          const gtagConfig = document.createElement('script');
          gtagConfig.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17843619481');
          `;
          document.head.appendChild(gtagConfig);
        }
      }
    }
  }, []);

  return (
    <html lang="pt-BR">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Patrícia Dorigon - CRECI 43317" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
