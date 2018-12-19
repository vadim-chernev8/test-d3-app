import React from 'react'
import * as d3 from 'd3'

const AxisY = ({ data, margin, height, width }) => {
  const axisHeight = height - margin.top - margin.bottom
  const axisWidth = width - margin.left - margin.right

  const y = d3.scaleLinear()
    .range([axisHeight, 0])

  const yAxis = d3.axisLeft(y)

  y.domain(d3.extent(data, (d) => d.close))

  d3.select(".y").call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Price ($)")

  return (<g className="y axis"></g>)
}

export default AxisY
