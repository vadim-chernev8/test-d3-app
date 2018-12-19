import { API_KEY, API_URLS } from './constants'


export const getEODdataUrl = (TICKER) => `${API_URLS.EOD}/${TICKER}.json?api_key=${API_KEY}`
