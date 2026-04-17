// JSON-LD Structured Data helpers for SEO

export interface JSONLDOrganization {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs: string[];
  address: {
    '@type': string;
    addressCountry: string;
    addressLocality: string;
  };
  contact: {
    '@type': string;
    contactType: string;
    telephone: string;
    email: string;
  };
}

export interface JSONLDLocalBusiness extends JSONLDOrganization {
  '@type': 'LocalBusiness' | 'ProfessionalService';
  areaServed: string[];
  priceRange: string;
}

/**
 * Generate Organization structured data
 */
export function getOrganizationSchema(): JSONLDOrganization {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Iván Calás',
    url: 'https://ivancalas.es',
    logo: 'https://ivancalas.es/logo.png',
    description:
      'Especialista en diseño web, SEO y fotografía profesional en España. Más de 20 años de experiencia.',
    sameAs: [
      'https://www.facebook.com/ivancalas',
      'https://www.instagram.com/ivancalas',
      'https://www.linkedin.com/in/ivancalas',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ES',
      addressLocality: 'España',
    },
    contact: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+34-652-814-970',
      email: 'info@ivancalas.es',
    },
  };
}

/**
 * Generate LocalBusiness structured data
 */
export function getLocalBusinessSchema(): JSONLDLocalBusiness {
  return {
    ...getOrganizationSchema(),
    '@type': 'LocalBusiness',
    areaServed: [
      'ES',
      'Barcelona',
      'Madrid',
      'Valencia',
      'Andalucía',
      'Cataluña',
    ],
    priceRange: '$$',
  };
}

/**
 * Generate WebPage schema
 */
export function getWebPageSchema(
  title: string,
  description: string,
  url: string,
  image?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    image: image || 'https://ivancalas.es/og-image.jpg',
    isPartOf: {
      '@id': 'https://ivancalas.es',
    },
    datePublished: new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: 'Iván Calás',
      url: 'https://ivancalas.es',
    },
  };
}

/**
 * Generate BlogPosting schema
 */
export function getBlogPostingSchema(
  title: string,
  description: string,
  url: string,
  image: string,
  datePublished: string,
  author: string = 'Iván Calás'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    url: url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
