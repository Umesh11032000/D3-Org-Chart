import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function OrgChart({ data }) {
  const svgRef = useRef();

  useEffect(() => {
    if (!data) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 1000;
    const dx = 120;
    const dy = 220;

    const tree = d3.tree().nodeSize([dx, dy]);
    const root = d3.hierarchy(data);
    tree(root);

    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2}, 50)`);

    // --- CONNECTOR LINES ---
    g.append("g")
      .attr("fill", "none")
      .attr("stroke", "#cbd5e1")
      .attr("stroke-width", 2)
      .selectAll("path")
      .data(root.links())
      .join("path")
      .attr("d", (d) =>
        `M${d.source.y},${d.source.x + 50}
         V${d.target.x - 50}
         H${d.target.y}`
      );

    // --- NODES ---
    const node = g
      .append("g")
      .selectAll("g")
      .data(root.descendants())
      .join("g")
      .attr("transform", (d) => `translate(${d.y},${d.x})`);

    // --- CARD WRAPPER ---
    node
      .append("rect")
      .attr("width", 150)
      .attr("height", 140)
      .attr("x", -75)
      .attr("y", -10)
      .attr("rx", 14)
      .attr("stroke", "#d1d5db")
      .attr("fill", "#fff")
      .attr("stroke-width", 2)
      .attr("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.1))");

    // --- AVATAR ---
    node
      .append("image")
      .attr("href", (d) => d.data.avatar)
      .attr("width", 70)
      .attr("height", 70)
      .attr("x", -35)
      .attr("y", 5)
      .attr("clip-path", "circle(35px at 35px 35px)");

    // --- NAME ---
    node
      .append("text")
      .attr("y", 90)
      .attr("text-anchor", "middle")
      .style("font-size", "15px")
      .style("font-weight", "600")
      .style("fill", "#1e293b")
      .text((d) => d.data.name);

    // --- POSITION ---
    node
      .append("text")
      .attr("y", 110)
      .attr("text-anchor", "middle")
      .style("font-size", "12px")
      .style("fill", "#64748b")
      .text((d) => d.data.position);

    // --- CHILD COUNT BADGE ---
    node
      .append("circle")
      .attr("cx", 55)
      .attr("cy", 5)
      .attr("r", 14)
      .attr("fill", "#3b82f6");

    node
      .append("text")
      .attr("x", 55)
      .attr("y", 10)
      .attr("text-anchor", "middle")
      .style("fill", "#fff")
      .style("font-size", "13px")
      .text((d) => (d.children ? d.children.length : 0));
  }, [data]);

  return (
    <svg
      ref={svgRef}
      width="1200"
      height="800"
      style={{ background: "#f8fafc", borderRadius: "10px" }}
    ></svg>
  );
}
