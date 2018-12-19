import React from 'react'
import { connect } from 'react-redux'
import { BarChart } from 'react-easy-chart'

import { barChartDataSelecor } from '../selectors/app-selector'

const BarChartData = ({ data, margin, height, width }) => {
  return (<BarChart axes xType={'time'} width={width} height={height} data={data} />)
}

const mapStateToProps = (state) => ({
  data: barChartDataSelecor(state)
})

export default connect(mapStateToProps)(BarChartData)
