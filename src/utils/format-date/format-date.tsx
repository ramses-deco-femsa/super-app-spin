import i18next from 'i18next';

const getValidDate = (dateString: string) => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return null;
  }

  return date;
};

export const formatNumericDayOfWeekDate = (dateString: string) => {
  const date = getValidDate(dateString);

  if (!date) {
    return dateString;
  }

  const dateFormatted = date.toLocaleDateString(i18next.language, {
    weekday: 'long',
    day: 'numeric',
  });

  return dateFormatted.charAt(0).toUpperCase() + dateFormatted.slice(1);
};

export const formatDayMonthYearDate = (dateString: string) => {
  const date = getValidDate(dateString);

  if (!date) {
    return dateString;
  }

  const day = date.getDate();
  const month = date.getMonth() + 1; // Los meses en JavaScript son indexados desde 0
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
