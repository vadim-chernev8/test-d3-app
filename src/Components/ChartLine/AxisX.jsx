import React from 'react'
import * as d3 from 'd3'

const AxisX = ({ data, margin, height, width }) => {
  const axisHeight = height - margin.top - margin.bottom
  const axisWidth = width - margin.left - margin.right

  const x = d3.scaleTime().range([0, axisWidth])
  const xAxis = d3.axisBottom(x)

  x.domain(d3.extent(data, (d) => new Date(d.date)))
  d3.select(".x").attr("transform", "translate(0," + axisHeight + ")").call(xAxis)

  return (<g className="x axis"></g>)
}

export default AxisX
