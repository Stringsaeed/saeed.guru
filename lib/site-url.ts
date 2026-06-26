const SITE_URL_ENV_VAR = 'NEXT_PUBLIC_SITE_URL';

function parseSiteUrl(): URL {
  const siteUrl = process.env[SITE_URL_ENV_VAR]?.trim();

  if (!siteUrl) {
    throw new Error(`${SITE_URL_ENV_VAR} must be set to an absolute http(s) origin.`);
  }

  let url: URL;

  try {
    url = new URL(siteUrl);
  } catch {
    throw new Error(`${SITE_URL_ENV_VAR} must be a valid absolute URL.`);
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new Error(`${SITE_URL_ENV_VAR} must use the http or https protocol.`);
  }

  if (url.pathname !== '/' || url.search || url.hash) {
    throw new Error(`${SITE_URL_ENV_VAR} must be an origin only, without a path, query, or hash.`);
  }

  return url;
}

export function getAbsoluteUrl(path = '/'): string {
  return new URL(path, getSiteUrl()).toString().replace(/\/$/, '');
}

export function getSiteUrl(): string {
  return parseSiteUrl().origin;
}
