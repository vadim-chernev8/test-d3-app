import React, { Component } from 'react'
import { connect } from 'react-redux'

import { dataChartSelector } from '../../selectors/app-selector'

import AxisX from './AxisX'
import AxisY from './AxisY'
import Line from './Line'

class ChartLine extends Component {
  render() {
    const { chartData, width, height, margin } = this.props

    return (
      <svg height={height} width={width} >
        <g transform="translate(50,20)">
          <AxisX width={width} height={height} margin={margin} data={chartData}/>
          <AxisY width={width} height={height} margin={margin} data={chartData}/>
          <Line width={width} height={height} margin={margin} data={chartData}/>
        </g>
      </svg>
    )
  }
}

const mapStateToProps = state => ({
  chartData: dataChartSelector(state)
})

export default connect(mapStateToProps)(ChartLine);
