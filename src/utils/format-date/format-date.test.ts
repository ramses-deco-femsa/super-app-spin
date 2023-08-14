import {i18n} from '@test-utils';

import {
  formatNumericDayOfWeekDate,
  formatDayMonthYearDate,
} from './format-date';

describe('formatDate', () => {
  describe('formatNumericDayOfWeekDate', () => {
    it('should return date format as DDDD D in Spanish', () => {
      i18n.changeLanguage('es');
      expect(formatNumericDayOfWeekDate('Tue Aug 08 2023')).toBe('Martes 8');
    });

    it('should return date format as D DDDD in English', () => {
      i18n.changeLanguage('en');
      expect(formatNumericDayOfWeekDate('Tue Aug 08 2023')).toBe('8 Tuesday');
    });

    it('should return date param if is invalid date', () => {
      expect(formatNumericDayOfWeekDate('tuesday')).toBe('tuesday');
    });
  });

  describe('formatDayMonthYearDate', () => {
    it('should return date format in DD/MM/YYYY', () => {
      expect(formatDayMonthYearDate('Tue Aug 08 2023')).toBe('8/8/2023');
    });

    it('should return date param if is invalid date', () => {
      expect(formatDayMonthYearDate('tuesday')).toBe('tuesday');
    });
  });
});
