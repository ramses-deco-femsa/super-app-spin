import {MOVEMENTS_DATA} from '@sas/__mocks__';

import {formatMovementsByDate} from './format-movements-by-date';

describe('formatMovementsByDate', () => {
  let today: Date;

  beforeAll(() => {
    today = new Date();
  });

  it('should return todays section', () => {
    const data = formatMovementsByDate([
      {
        ...MOVEMENTS_DATA[0],
        date: today.toLocaleDateString('en', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      },
    ]);

    expect(data[0].title).toBe('movements.list.today');
  });

  it('should return yesterday section', () => {
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const data = formatMovementsByDate([
      {
        ...MOVEMENTS_DATA[0],
        date: yesterday.toLocaleDateString('en', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      },
    ]);

    expect(data[0].title).toBe('movements.list.yesterday');
  });

  it('should return last_week section', () => {
    const lastWeek = new Date(today);
    lastWeek.setDate(today.getDate() - 4);
    const data = formatMovementsByDate([
      {
        ...MOVEMENTS_DATA[0],
        date: lastWeek.toLocaleDateString('en', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      },
    ]);

    expect(data[0].title).toBe('movements.list.last_week');
  });

  it('should return febrary section', () => {
    const data = formatMovementsByDate([
      {
        ...MOVEMENTS_DATA[0],
        date: 'February 22, 2023',
      },
    ]);

    expect(data[0].title).toBe('movements.list.february');
  });

  it('should return the same data length', () => {
    const dataFormmated = formatMovementsByDate(MOVEMENTS_DATA);

    const dataLenght = dataFormmated.reduce((acc, {data}) => {
      acc += data.length;

      return acc;
    }, 0);

    expect(dataLenght).toBe(MOVEMENTS_DATA.length);
  });
});
