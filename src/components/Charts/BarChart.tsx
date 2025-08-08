import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import type { CityData } from '../../types/tower';
import './Charts.scss';

interface BarChartProps {
  data: CityData[];
}

function BarChart({ data }: BarChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !data.length) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .rangeRound([0, width])
      .padding(0.1)
      .domain(data.map(d => d.city));

    const y = d3
      .scaleLinear()
      .rangeRound([height, 0])
      .domain([0, d3.max(data, d => d.count) || 0]);

    // Add bars
    g.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.city) || 0)
      .attr('y', d => y(d.count))
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d.count))
      .attr('fill', '#2563eb')
      .attr('rx', 4)
      .on('mouseover', function (event, d) {
        d3.select(this).attr('fill', '#1d4ed8');

        // Tooltip
        const tooltip = d3
          .select('body')
          .append('div')
          .attr('class', 'tooltip')
          .style('opacity', 0);

        tooltip.transition().duration(200).style('opacity', 0.9);

        tooltip
          .html(`${d.city}: ${d.count} towers`)
          .style('left', event.pageX + 10 + 'px')
          .style('top', event.pageY - 28 + 'px');
      })
      .on('mouseout', function () {
        d3.select(this).attr('fill', '#2563eb');
        d3.selectAll('.tooltip').remove();
      });

    // Add value labels on bars
    g.selectAll('.label')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('x', d => (x(d.city) || 0) + x.bandwidth() / 2)
      .attr('y', d => y(d.count) - 5)
      .attr('text-anchor', 'middle')
      .style('font-size', '12px')
      .style('fill', '#64748b')
      .text(d => d.count);

    // Add x-axis
    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .style('font-size', '12px')
      .style('fill', '#64748b');

    // Add y-axis
    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y).ticks(5))
      .selectAll('text')
      .style('font-size', '12px')
      .style('fill', '#64748b');

    // Style axis lines
    g.selectAll('.axis path, .axis line')
      .style('stroke', '#e2e8f0')
      .style('stroke-width', '1px');
  }, [data]);

  return (
    <div className="chart-container">
      <h3 className="chart-title">Towers by City</h3>
      <svg ref={svgRef} width="400" height="300" className="chart-svg" />
    </div>
  );
}

export default BarChart;
