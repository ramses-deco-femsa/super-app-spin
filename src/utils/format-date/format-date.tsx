import i18next from 'i18next';

export const formatDate = (dateString: string) => {
  try {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      throw new Error('invalid date');
    }

    const dateFormatted = date.toLocaleDateString(i18next.language, {
      weekday: 'long',
      day: 'numeric',
    });
    return dateFormatted.charAt(0).toUpperCase() + dateFormatted.slice(1);
  } catch (e) {
    return dateString;
  }
};
