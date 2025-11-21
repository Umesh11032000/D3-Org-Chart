import { Box } from "@mui/material";
import { useOrgChart } from "../hooks/useOrgChart";
import type { NodeData } from "../types";

interface OrgChartContainerProps {
  data: NodeData[];
  height?: string;
  backgroundColor?: string;
}

export const OrgChartContainer = ({
  data,
  height = "900px",
  backgroundColor = "#f8f9fb",
}: OrgChartContainerProps) => {
  const { chartRef } = useOrgChart({ data });

  return (
    <Box
      ref={chartRef}
      sx={{
        width: "100%",
        height,
        overflow: "auto",
        padding: 2.5,
        background: backgroundColor,
      }}
    />
  );
};

