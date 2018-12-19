import { createSelector } from 'reselect'
import { compose, prop } from 'rambda'
import * as d3 from 'd3'

export const appReducerStateSelector = prop('appReducer')
export const dataSelector = compose(prop('data'), appReducerStateSelector)
export const submitingSelector = compose(prop('submiting'), appReducerStateSelector)

export const dataChartSelector = createSelector(
  dataSelector,
  ({ data }) => data.map(item => ({ date: item[0], close: item[4] })) || []
)

export const barChartDataSelecor = createSelector(
  dataSelector,
  ({ data }) => {
    const timeFormat = d3.timeFormat("%d-%b-%y")
    return data.map(item => ({ x: timeFormat(new Date(item[0])), y: item[4] })) || []
  }
)
