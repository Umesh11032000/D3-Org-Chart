import type { NodeData } from "../types";

const API_BASE_URL = "/data";

export const fetchOrgChartData = async (): Promise<NodeData[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/orgChartData.json`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch org chart data: ${response.statusText}`);
    }
    
    const data: NodeData[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching org chart data:", error);
    throw error;
  }
};

