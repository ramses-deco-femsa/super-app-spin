import {formatCurrency} from './format-currency';

describe('formatCurrency', () => {
  it('should return currency format', () => {
    expect(formatCurrency(12345)).toBe('$12,345.00');
  });
});
