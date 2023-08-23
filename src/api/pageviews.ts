import { formatDateForAPI, getYesterdayDate } from '../utilities/utilities'

const BASE_API_URL = 'https://wikimedia.org/api/rest_v1/metrics'

/**
 * Retrieves the articles with the highest page views on a specific date for given country or globally.
 *
 * @param {Date} date - The date for which to fetch the articles. Defaults to yesterday.
 * @param {string} countryCode [optional] - The two character country code (ISO 3166-1 alpha-2).
 * @return {Promise<any>} - A promise that resolves to the JSON response of the API call.
 */
export const getMostViewedArticles = async (
  date: Date = getYesterdayDate(),
  countryCode?: string
): Promise<any> => {
  // Format the date for the API
  const formattedDate = formatDateForAPI(date)

  // Determine the dynamic slugs based on the country code:
  // Since these routes are so similar, I chose to use this pattern versus handling
  // the logic in the onClick event. It makes this function multi-responsibility, but
  // given the response shape is the same, it felt more tightly coupled.
  let dynamicSlugs = 'top/en.wikipedia'

  if (countryCode) {
    dynamicSlugs = `top-per-country/${countryCode}`
  }

  const response = await fetch(
    `${BASE_API_URL}/pageviews/${dynamicSlugs}/all-access/${formattedDate}`
  )
  return await response.json()
}
