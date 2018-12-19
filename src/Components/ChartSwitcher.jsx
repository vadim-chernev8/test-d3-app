import React from 'react'

import ChartLine from './ChartLine'
import BarChart from './BarChart'

import { CHART_TYPE } from '../utils/constants'

const ChartSwitcher = ({ type, ...props }) => {
  switch(type) {
    case CHART_TYPE.LINE:
      return <ChartLine {...props}/>
    case CHART_TYPE.BAR:
      return <BarChart {...props}/>
    default:
      return <ChartLine {...props}/>
  }
}

export default ChartSwitcher
