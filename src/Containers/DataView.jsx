import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as d3 from 'd3'

import { submitingSelector } from '../selectors/app-selector'

import ChartSwitcher from '../Components/ChartSwitcher'
import Loader from '../Components/Loader'

import { CHART_TYPE } from '../utils/constants.js'

class DataView extends Component {
  state = {
    graph: "",
    container: "",
    chartWidth: 0,
    chartHeight: 0,
    x: NaN,
    y: NaN,
    data: [],
    margin: {},
    type: ''
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize)
    
    const graph = d3.select("#chart")
    const container = d3.select("#root")
    const margin = {top: 20, right: 20, bottom: 30, left: 50}

    // const containerBB = container.node().getBoundingClientRect()
    // const graphBB = graph.node().getBoundingClientRect()

    const chartWidth = this.getChartSize(container)[0]
    const chartHeight = this.getChartSize(container)[1]

    this.setState({ graph, container, chartWidth, chartHeight, margin })
  }

  resize = (e) => {
    const container = this.state.container
    let chartWidth = this.getChartSize(container)[0]
    let chartHeight = this.getChartSize(container)[1]
    
    this.setState({
      chartWidth: chartWidth,
      chartHeight: chartHeight,
    });
  }

  getChartSize = (el) => {
    let width = .9*parseInt(el.style('width'));
    let height = .7*parseInt(width*7/9);

    return  [width,height];
  }

  render() {
    const { chartWidth, chartHeight, margin, type } = this.state
    const { submiting } = this.props

    return (
      <div id="chart">
        {
          submiting ? <Loader /> : (
            <div>
              <div>
                <button onClick={() => this.setState({...this.state, type: CHART_TYPE.BAR})}>BAR</button>
                <button onClick={() => this.setState({...this.state, type: CHART_TYPE.LINE})}>LINE</button>
              </div>
              <ChartSwitcher width={chartWidth} height={chartHeight} margin={margin} type={type}/>
            </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  submiting: submitingSelector(state)
})

export default connect(mapStateToProps)(DataView)
