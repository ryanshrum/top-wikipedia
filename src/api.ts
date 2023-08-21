const BASE_API_URL = 'https://wikimedia.org/api/rest_v1/metrics'

/**
 * Retrieves the articles with the highest page views on a specific date.
 *
 * @param {string} date - The date in the format "YYYY/MM/DD".
 * @return {Promise<any>} - A promise that resolves to the JSON response of the API call.
 */
export const getArticles = async (date: string): Promise<any> => {
  const response = await fetch(`${BASE_API_URL}/pageviews/top/en.wikipedia/all-access/${date}`)
  return await response.json()
}
