import { Box, Avatar, Typography, Paper } from "@mui/material";

export const NodeCard = ({
  name,
  avatar,
  position,
}: {
  name: string;
  avatar: string;
  position: string;
}) => {
  return (
    <Paper
      elevation={1}
      sx={(theme) => ({
        width: 240,
        minHeight: 170,
        borderRadius: 3,
        border: `1px solid ${theme.palette.grey[300]}`,
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.4,
        backgroundColor: theme.palette.background.paper,
        textAlign: "center",
        fontFamily: theme.typography.fontFamily,
        position: "relative",
      })}
    >
      {/* Avatar */}
      <Avatar
        src={avatar}
        sx={{
          width: 62,
          height: 62,
          boxShadow: 3,
        }}
      />

      {/* Name */}
      <Typography
        variant="subtitle1"
        fontWeight={700}
        noWrap
        sx={{
          width: "90%",
        }}
      >
        {name}
      </Typography>

      {/* Position */}
      <Typography
        variant="body2"
        color="text.secondary"
        noWrap
        sx={{
          width: "90%",
        }}
      >
        {position}
      </Typography>

      {/* Extra bottom spacing (for D3 child bubble) */}
      <Box sx={{ height: 14 }} />
    </Paper>
  );
};
