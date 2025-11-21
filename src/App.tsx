import { Box, CircularProgress, Typography, Alert } from "@mui/material";
import { OrgChartContainer } from "./components/OrgChartContainer";
import { useOrgChartData } from "./hooks/useOrgChartData";

const App = () => {
  const { data, loading, error } = useOrgChartData();

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          padding: 2,
        }}
      >
        <Alert severity="error" sx={{ maxWidth: 600 }}>
          <Typography variant="h6" gutterBottom>
            Error Loading Data
          </Typography>
          <Typography>{error.message}</Typography>
        </Alert>
      </Box>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h6">No data available</Typography>
      </Box>
    );
  }

  return <OrgChartContainer data={data} />;
};

export default App;
