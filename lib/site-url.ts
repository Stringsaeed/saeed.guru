import { headers } from 'next/headers';

const DEFAULT_HOST = 'saeed.guru';

function normalizeHost(host: string | null): string {
  const normalizedHost = host?.trim().split(',')[0]?.trim();

  if (!normalizedHost) {
    return DEFAULT_HOST;
  }

  return normalizedHost.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
}

function normalizeProtocol(protocol: string | null, host: string): 'http' | 'https' {
  const normalizedProtocol = protocol?.trim().split(',')[0]?.replace(':', '');

  if (normalizedProtocol === 'http' || normalizedProtocol === 'https') {
    return normalizedProtocol;
  }

  return host.startsWith('localhost') || host.startsWith('127.0.0.1') ? 'http' : 'https';
}

export function getAbsoluteUrlForOrigin(origin: string, path = '/'): string {
  return new URL(path, origin).toString().replace(/\/$/, '');
}

export function getSiteOriginFromHeaders(headersList: Headers): string {
  const host = normalizeHost(headersList.get('x-forwarded-host') ?? headersList.get('host'));
  const protocol = normalizeProtocol(headersList.get('x-forwarded-proto'), host);

  return `${protocol}://${host}`;
}

export async function getAbsoluteUrl(path = '/'): Promise<string> {
  return getAbsoluteUrlForOrigin(await getSiteOrigin(), path);
}

export async function getSiteOrigin(): Promise<string> {
  return getSiteOriginFromHeaders(await headers());
}
