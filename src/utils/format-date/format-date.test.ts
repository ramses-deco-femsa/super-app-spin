import {formatDate} from './format-date';
import {i18n} from '../test-utils/test-utils';

describe('formatDate', () => {
  it('should return date format in Spanish', () => {
    i18n.changeLanguage('es');
    expect(formatDate('Tue Aug 08 2023')).toBe('Martes 8');
  });

  it('should return date format in English', () => {
    i18n.changeLanguage('en');
    expect(formatDate('Tue Aug 08 2023')).toBe('8 Tuesday');
  });

  it('should return date param if is invalid date', () => {
    expect(formatDate('tuesday')).toBe('tuesday');
  });
});
