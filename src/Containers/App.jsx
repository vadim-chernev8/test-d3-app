import React from 'react'
import { Route } from 'react-router-dom'

import { paths } from '../utils/constants'
/*
*
* Containers
*/
import EOD from './EOD'
import DataView from './DataView'

export const App = () => {
  return (
    <div>
      <Route exact path={paths.root} component={EOD}/>
      <Route exact path={paths.chartView} component={DataView}/>
    </div>
  )
}
