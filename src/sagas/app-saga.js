import { all, takeLatest, put, call } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { fetchData } from '../utils/client'

import { getEODdataRes } from '../actions/app-actions'
import { APP_ACTIONS } from '../actions/types'

import { getEODdataUrl } from '../utils/function.utils'
import { paths } from '../utils/constants'

function* fetchEODdata({ payload: { TICKER } }) {
  yield put(push(paths.chartView))
  
  const url = getEODdataUrl(TICKER)

  const { dataset } = yield call(fetchData, url)
  
  dataset.data.length = 1000
  yield put(getEODdataRes({ ...dataset, data: dataset.data.slice(0, 1000) }))
}

export default function* saga() {
  yield all([
    takeLatest(APP_ACTIONS.GET_EOD_DATA_REQ, fetchEODdata)
  ])
}
