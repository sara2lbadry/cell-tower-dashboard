import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './Charts.scss';
import type { StatusData } from '../../types/tower';

interface PieChartProps {
  data: StatusData[];
}

function PieChart({ data }: PieChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !data.length) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const width = 400;
    const height = 300;
    const radius = Math.min(width, height) / 2 - 40;

    const g = svg
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const color = d3
      .scaleOrdinal()
      .domain(data.map(d => d.status))
      .range(['#10b981', '#ef4444']);

    const pie = d3
      .pie<StatusData>()
      .value(d => d.count)
      .sort(null);

    const arc = d3
      .arc<d3.PieArcDatum<StatusData>>()
      .innerRadius(0)
      .outerRadius(radius);

    const labelArc = d3
      .arc<d3.PieArcDatum<StatusData>>()
      .innerRadius(radius * 0.6)
      .outerRadius(radius * 0.6);

    const arcs = g
      .selectAll('.arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    // Add pie slices
    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', d => color(d.data.status) as string)
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 2)
      .on('mouseover', function (event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('transform', 'scale(1.05)');

        // Tooltip
        const tooltip = d3
          .select('body')
          .append('div')
          .attr('class', 'tooltip')
          .style('opacity', 0);

        tooltip.transition().duration(200).style('opacity', 0.9);

        tooltip
          .html(
            `${d.data.status}: ${d.data.count} towers (${d.data.percentage.toFixed(1)}%)`
          )
          .style('left', event.pageX + 10 + 'px')
          .style('top', event.pageY - 28 + 'px');
      })
      .on('mouseout', function () {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('transform', 'scale(1)');
        d3.selectAll('.tooltip').remove();
      });

    // Add labels
    arcs
      .append('text')
      .attr('transform', d => `translate(${labelArc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .style('font-size', '12px')
      .style('font-weight', '500')
      .style('fill', '#ffffff')
      .text(d => `${d.data.percentage.toFixed(1)}%`);

    // Add legend
    const legend = svg
      .append('g')
      .attr('class', 'legend')
      .attr('transform', `translate(20, 20)`);

    const legendItems = legend
      .selectAll('.legend-item')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'legend-item')
      .attr('transform', (d, i) => `translate(0, ${i * 25})`);

    legendItems
      .append('rect')
      .attr('width', 18)
      .attr('height', 18)
      .attr('rx', 3)
      .attr('fill', d => color(d.status) as string);

    legendItems
      .append('text')
      .attr('x', 25)
      .attr('y', 9)
      .attr('dy', '0.35em')
      .style('font-size', '12px')
      .style('fill', '#64748b')
      .style('text-transform', 'capitalize')
      .text(d => `${d.status} (${d.count})`);
  }, [data]);

  return (
    <div className="chart-container">
      <h3 className="chart-title">Tower Status Distribution</h3>
      <svg ref={svgRef} width="400" height="300" className="chart-svg" />
    </div>
  );
}

export default PieChart;
