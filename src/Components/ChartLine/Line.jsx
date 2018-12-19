import React from 'react'
import * as d3 from 'd3'

const Line = ({ data, margin, width, height }) => {
  const lineHeight = height - margin.top - margin.bottom
  const lineWidth = width - margin.left - margin.right

  const x = d3.scaleTime()
  .range([0, lineWidth]);

  const y = d3.scaleLinear().range([lineHeight, 0])

  const line = d3.line()
    .x((d) => x(new Date(d.date)))
    .y((d) => y(d.close))

  data.forEach((d) => {
    x.domain(d3.extent(data, (d) => new Date(d.date)))
    y.domain(d3.extent(data, (d) => d.close))
  })

  const newline = line(data)
  // console.log(newline);

  return (<path className="line" d={newline}></path>)
}

export default Line
