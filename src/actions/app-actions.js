import { APP_ACTIONS } from './types';

export const getEODdataReq = payload => ({
  type: APP_ACTIONS.GET_EOD_DATA_REQ,
  payload
})

export const getEODdataRes = payload => ({
  type: APP_ACTIONS.GET_EOD_DATA_RES,
  payload
})
