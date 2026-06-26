const SITE_URL_ENV_VAR = 'VERCEL_PROJECT_PRODUCTION_URL';

function parseSiteOrigin(): string {
  const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();

  if (!siteUrl) {
    throw new Error(`${SITE_URL_ENV_VAR} must be set to the production domain.`);
  }

  const urlWithProtocol = /^https?:\/\//.test(siteUrl) ? siteUrl : `https://${siteUrl}`;
  let url: URL;

  try {
    url = new URL(urlWithProtocol);
  } catch {
    throw new Error(`${SITE_URL_ENV_VAR} must be a valid domain or absolute URL.`);
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new Error(`${SITE_URL_ENV_VAR} must use the http or https protocol.`);
  }

  if (url.pathname !== '/' || url.search || url.hash) {
    throw new Error(`${SITE_URL_ENV_VAR} must be a domain only, without a path, query, or hash.`);
  }

  return url.origin;
}

export function getAbsoluteUrl(path = '/'): string {
  return getAbsoluteUrlForOrigin(getSiteOrigin(), path);
}

export function getAbsoluteUrlForOrigin(origin: string, path = '/'): string {
  return new URL(path, origin).toString().replace(/\/$/, '');
}

export function getSiteOrigin(): string {
  return parseSiteOrigin();
}
