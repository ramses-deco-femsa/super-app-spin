import type {Movement, MovementsFormatted} from '@sas/types';

function formatMonthYear(dateString: string) {
  return new Date(dateString).toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
  });
}

function formatMonth(dateString: string) {
  return new Date(dateString)
    .toLocaleDateString('en', {
      month: 'long',
    })
    .toLowerCase();
}

const translations = {
  today: 'movements.list.today',
  yesterday: 'movements.list.yesterday',
  last_week: 'movements.list.last_week',
  january: 'movements.list.january',
  february: 'movements.list.february',
  march: 'movements.list.march',
  april: 'movements.list.april',
  may: 'movements.list.may',
  june: 'movements.list.june',
  july: 'movements.list.july',
  august: 'movements.list.august',
  september: 'movements.list.september',
  october: 'movements.list.october',
  november: 'movements.list.november',
  december: 'movements.list.december',
};

export const formatMovementsByDate = (
  data: Movement[],
): MovementsFormatted[] => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const lastWeek = new Date(today);
  lastWeek.setDate(lastWeek.getDate() - 7);

  const filteredData: MovementsFormatted[] = [];

  const todayData = data.filter(
    item => new Date(item.date).toDateString() === today.toDateString(),
  );

  if (todayData.length > 0) {
    filteredData.push({
      title: translations.today,
      data: todayData,
    });
    data = data.filter(item => !todayData.includes(item));
  }

  const yesterdayData = data.filter(
    item => new Date(item.date).toDateString() === yesterday.toDateString(),
  );

  if (yesterdayData.length > 0) {
    filteredData.push({
      title: translations.yesterday,
      data: yesterdayData,
    });
    data = data.filter(item => !yesterdayData.includes(item));
  }

  const lastWeekData = data.filter(
    item => new Date(item.date) >= lastWeek && new Date(item.date) < today,
  );
  if (lastWeekData.length > 0) {
    filteredData.push({
      title: translations.last_week,
      data: lastWeekData,
    });
    data = data.filter(item => !lastWeekData.includes(item));
  }

  const uniqueMonths = [
    ...new Set(data.map(({date}) => ({month: formatMonthYear(date), date}))),
  ];

  uniqueMonths.forEach(({month, date}) => {
    const monthData = data.filter(item => formatMonthYear(item.date) === month);
    if (monthData.length > 0) {
      const monthName = formatMonth(date) as keyof typeof translations;

      filteredData.push({
        title: translations[monthName],
        data: monthData,
      });
    }
  });

  return filteredData;
};
