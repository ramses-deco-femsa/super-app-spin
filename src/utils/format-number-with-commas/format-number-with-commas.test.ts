import {formatNumberWithCommas} from './format-number-with-commas';

describe('formatNumberWithCommas', () => {
  it('should return formatted with commas', () => {
    expect(formatNumberWithCommas(12345)).toBe('12,345');
  });
});
