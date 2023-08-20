/**
 * Formats a given date object to a string in the format "YYYY/MM/DD".
 *
 * @param {Date} date - The date object to be formatted.
 * @return {string} The formatted date string.
 */
export const formatDateForAPI = (date: Date): string => {
  return date.toISOString().split('T')[0].replaceAll('-', '/')
}
