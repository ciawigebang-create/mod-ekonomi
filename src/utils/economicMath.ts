export function calculateOpportunityCost(altA: number, altB: number): number {
  return Math.max(altA, altB);
}

export function calculateProfits(revenue: number, directCost: number, opportunityCost: number) {
  const accountingProfit = revenue - directCost;
  const economicProfit = revenue - (directCost + opportunityCost);
  return { accountingProfit, economicProfit };
}

export function calculateMarketEquilibrium(a: number, b: number, c: number, d: number) {
  // Pd = a - bQ, Ps = c + dQ
  // a - bQ = c + dQ => (b+d)Q = a - c => Qe = (a - c)/(b + d)
  if (b + d === 0) return null;
  const Qe = (a - c) / (b + d);
  const Pe = a - b * Qe;
  return { Qe, Pe };
}

export function calculatePriceElasticity(p1: number, q1: number, p2: number, q2: number): number {
  const dp = Math.abs(p2 - p1);
  const dq = Math.abs(q2 - q1);
  if (dp === 0 || q1 === 0) return 0;
  return Number(((dq / dp) * (p1 / q1)).toFixed(3));
}
