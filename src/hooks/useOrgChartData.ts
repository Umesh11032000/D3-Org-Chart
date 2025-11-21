import { useState, useEffect } from "react";
import type { NodeData } from "../types";
import { fetchOrgChartData } from "../services/api";

interface UseOrgChartDataReturn {
  data: NodeData[] | null;
  loading: boolean;
  error: Error | null;
}

export const useOrgChartData = (): UseOrgChartDataReturn => {
  const [data, setData] = useState<NodeData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedData = await fetchOrgChartData();
        setData(fetchedData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to load data"));
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};

