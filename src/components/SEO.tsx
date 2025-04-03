
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  type?: string;
  imageUrl?: string;
  schemaMarkup?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({
  title = 'IdeoXai - AI Automation Solutions for Business',
  description = 'Transform your business with IdeoXai\'s intelligent AI solutions. Chat bots, business automation & Facebook automation to streamline operations and boost productivity.',
  canonicalUrl = 'https://ideox.ai/',
  type = 'website',
  imageUrl = 'https://ideox.ai/og-image.png',
  schemaMarkup,
}) => {
  const fullTitle = title.includes('IdeoXai') ? title : `${title} | IdeoXai`;
  
  return (
    <Helmet>
      {/* Standard meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Schema.org markup */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
