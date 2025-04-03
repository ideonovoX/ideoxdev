
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "IdeoXai",
  "url": "https://ideox.ai",
  "logo": "https://ideox.ai/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+8801311344747",
    "contactType": "customer service",
    "email": "ai@ideox.ai",
    "areaServed": "Worldwide",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://facebook.com/ideoxai",
    "https://twitter.com/ideoxai",
    "https://linkedin.com/company/ideoxai"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sonabaria",
    "addressLocality": "Satkhira",
    "addressRegion": "Dhaka",
    "postalCode": "9400",
    "addressCountry": "Bangladesh"
  }
});

export const generateServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
  imageUrl?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": "IdeoXai"
  },
  "url": service.url,
  "image": service.imageUrl || "https://ideox.ai/service-default.png"
});

export const generateWebPageSchema = (page: {
  title: string;
  description: string;
  url: string;
  lastReviewed?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": page.title,
  "description": page.description,
  "url": page.url,
  "lastReviewed": page.lastReviewed || new Date().toISOString().split('T')[0],
  "publisher": {
    "@type": "Organization",
    "name": "IdeoXai"
  }
});

export const generateBlogPostSchema = (post: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  author: string;
  imageUrl?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": post.title,
  "description": post.description,
  "author": {
    "@type": "Person",
    "name": post.author
  },
  "datePublished": post.datePublished,
  "image": post.imageUrl || "https://ideox.ai/blog-default.png",
  "url": post.url,
  "publisher": {
    "@type": "Organization",
    "name": "IdeoXai",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ideox.ai/logo.png"
    }
  }
});

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
