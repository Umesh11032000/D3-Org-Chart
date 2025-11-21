import { Box, Typography, Avatar } from "@mui/material";

interface OrgNodeCardProps {
  width: number;
  height: number;
  id: number;
  name: string;
  avatar: string;
  position: string;
}

export const OrgNodeCard = ({
  width,
  height,
  id,
  name,
  avatar,
  position,
}: OrgNodeCardProps) => {
  const color = "#FFFFFF";
  const imageDiffVert = 25 + 2;

  return (
    <Box
      sx={{
        width: `${width}px`,
        height: `${height}px`,
        paddingTop: `${imageDiffVert - 2}px`,
        paddingLeft: "1px",
        paddingRight: "1px",
      }}
    >
      <Box
        sx={{
          fontFamily: "'Inter', sans-serif",
          backgroundColor: color,
          marginLeft: "-1px",
          width: `${width - 2}px`,
          height: `${height - imageDiffVert}px`,
          borderRadius: "10px",
          border: "1px solid #E4E2E9",
        }}
      >
        {/* ID Badge */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "5px",
            marginRight: "8px",
          }}
        >
          <Typography variant="body2" component="span">
            #{id}
          </Typography>
        </Box>

        {/* Avatar Background Circle */}
        <Box
          sx={{
            backgroundColor: color,
            marginTop: `${-imageDiffVert - 20}px`,
            marginLeft: "15px",
            borderRadius: "100px",
            width: "50px",
            height: "50px",
            position: "relative",
          }}
        />

        {/* Avatar Image */}
        <Box
          sx={{
            marginTop: `${-imageDiffVert - 20}px`,
            position: "relative",
          }}
        >
          <Avatar
            src={avatar}
            alt={name}
            sx={{
              marginLeft: "20px",
              borderRadius: "100px",
              width: "40px",
              height: "40px",
            }}
          />
        </Box>

        {/* Name */}
        <Typography
          sx={{
            fontSize: "15px",
            color: "#08011E",
            marginLeft: "20px",
            marginTop: "10px",
          }}
        >
          {name}
        </Typography>

        {/* Position */}
        <Typography
          sx={{
            color: "#716E7B",
            marginLeft: "20px",
            marginTop: "3px",
            fontSize: "10px",
          }}
        >
          {position}
        </Typography>
      </Box>
    </Box>
  );
};

