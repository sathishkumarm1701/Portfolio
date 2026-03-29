const requests: Map<string, number[]> = new Map();
const CLEANUP_INTERVAL = 3600000; // 1 hour

// Extend global type for cleanup tracking
declare global {
  // eslint-disable-next-line no-var
  var _rateLimitCleanupScheduled: boolean | undefined;
}

// Cleanup old entries periodically
function cleanupOldEntries() {
  const now = Date.now();
  const maxAge = 24 * 60 * 60 * 1000; // 24 hours

  for (const [ip, times] of requests.entries()) {
    const recentTimes = times.filter((time) => now - time < maxAge);
    if (recentTimes.length === 0) {
      requests.delete(ip);
    } else {
      requests.set(ip, recentTimes);
    }
  }
}

// Schedule cleanup (only once)
if (typeof globalThis !== 'undefined' && !(globalThis as typeof globalThis & { _rateLimitCleanupScheduled?: boolean })._rateLimitCleanupScheduled) {
  (globalThis as typeof globalThis & { _rateLimitCleanupScheduled?: boolean })._rateLimitCleanupScheduled = true;
  setInterval(cleanupOldEntries, CLEANUP_INTERVAL);
}

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
