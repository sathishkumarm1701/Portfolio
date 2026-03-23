const requests: Map<string, number[]> = new Map();

export function rateLimit(ip: string, windowMs: number = 900000, maxRequests: number = 5): boolean {
  const now = Date.now();
  const windowStart = now - windowMs;

  if (!requests.has(ip)) {
    requests.set(ip, []);
  }

  const ipRequests = requests.get(ip)!;
  const recentRequests = ipRequests.filter((time) => time > windowStart);

  if (recentRequests.length >= maxRequests) {
    return false;
  }

  recentRequests.push(now);
  requests.set(ip, recentRequests);

  return true;
}

export function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  return forwarded ? forwarded.split(',')[0].trim() : 'unknown';
}
