import { YESTERDAY } from './constants'
import { formatDateForAPI } from './utilities'

const BASE_API_URL = 'https://wikimedia.org/api/rest_v1/metrics'

/**
 * Retrieves the articles with the highest page views on a specific date for given country or globally.
 *
 * @param {string} date - The date in the format "YYYY/MM/DD". Defaults to yesterday.
 * @param {string} countryCode [optional] - The two character country code (ISO 3166-1 alpha-2).
 * @return {Promise<any>} - A promise that resolves to the JSON response of the API call.
 */
export const getMostViewedArticles = async (
  date: string = formatDateForAPI(YESTERDAY),
  countryCode?: string
): Promise<any> => {
  let dynamicSlugs = 'top/en.wikipedia'

  if (countryCode) {
    dynamicSlugs = `top-per-country/${countryCode}`
  }

  const response = await fetch(`${BASE_API_URL}/pageviews/${dynamicSlugs}/all-access/${date}`)
  return await response.json()
}
