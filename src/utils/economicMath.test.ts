import test from 'node:test';
import assert from 'node:assert/strict';
import { 
  calculateOpportunityCost, 
  calculateProfits, 
  calculateMarketEquilibrium, 
  calculatePriceElasticity 
} from './economicMath.ts';

test('calculateOpportunityCost selects the highest sacrificed alternative', () => {
  assert.equal(calculateOpportunityCost(3800000, 5200000), 5200000);
  assert.equal(calculateOpportunityCost(8000000, 6000000), 8000000);
});

test('calculateProfits computes accounting and economic profit correctly', () => {
  const result = calculateProfits(25000000, 14000000, 8000000);
  assert.equal(result.accountingProfit, 11000000);
  assert.equal(result.economicProfit, 3000000);
});

test('calculateMarketEquilibrium solves Pd = Ps equilibrium', () => {
  // Pd = 100 - 2Q, Ps = 20 + 2Q => 4Q = 80 => Q = 20, P = 60
  const eq = calculateMarketEquilibrium(100, 2, 20, 2);
  assert.ok(eq);
  assert.equal(eq.Qe, 20);
  assert.equal(eq.Pe, 60);
});

test('calculatePriceElasticity computes point elasticity correctly', () => {
  // P1=40000, Q1=1000, P2=50000, Q2=600 => dp=10000, dq=400 => (400/10000)*(40000/1000) = 1.6
  const el = calculatePriceElasticity(40000, 1000, 50000, 600);
  assert.equal(el, 1.6);
});
