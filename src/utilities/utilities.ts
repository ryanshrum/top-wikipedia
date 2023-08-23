/**
 * Formats a given date object to a string in the format "YYYY/MM/DD".
 *
 * @param {Date} date - The date object to be formatted.
 * @return {string} The formatted date string.
 */
export const formatDateForAPI = (date: Date): string => {
  return date.toISOString().split('T')[0].replaceAll('-', '/')
}

/**
 * Formats a date into a readable string representation.
 *
 * @param {Date} date - The date to be formatted.
 * @return {string} The formatted date string.
 */
export const formatDateReadable = (date: Date): string => {
  console.log(date)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export const getYesterdayDate = () => new Date(new Date().setDate(new Date().getDate() - 1))
