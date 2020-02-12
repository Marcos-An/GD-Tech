import React from 'react';
import Helmet from 'react-helmet';
import { url, defaultDescription, defaultTitle, logo } from 'data/config';

export const SEO = ({
  title = defaultTitle,
  description = defaultDescription
}) => {
  const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "GD Tech",
		"url": "${url}",
		"logo": "${logo}",
		"founders": [{
			"@type": "Person",
			"name": "GD Tech"
		}]
		}`;

  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{structuredDataOrganization}</script>
      <title>{title}</title>
      <html lang="pt-br" dir="ltr" />
    </Helmet>
  );
};
