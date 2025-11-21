import { useEffect, useRef, createElement } from "react";
import { renderToString } from "react-dom/server";
import { OrgChart } from "d3-org-chart";
import type { NodeData, ExtendedNode } from "../types";
import { OrgChartNode } from "../components/OrgChartNode";

interface UseOrgChartProps {
  data: NodeData[];
}

interface UseOrgChartReturn {
  chartRef: React.RefObject<HTMLDivElement | null>;
}

export const useOrgChart = ({ data }: UseOrgChartProps): UseOrgChartReturn => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = new OrgChart()
      // @ts-expect-error - d3-org-chart accepts HTMLElement but types expect string
      .container(chartRef.current)
      .data(data)
      .nodeHeight(() => 85 + 25)
      .nodeWidth(() => 220 + 2)
      .childrenMargin(() => 50)
      .compactMarginBetween(() => 35)
      .compactMarginPair(() => 30)
      .neighbourMargin(() => 20)
      .nodeContent(function (d, _i, _arr, _state) {
        const node = d as unknown as ExtendedNode;
        const nodeElement = createElement(OrgChartNode, { node });
        return renderToString(nodeElement);
      });
    chart.render();
  }, [data]);

  return { chartRef };
};

