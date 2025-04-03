import { Box, Typography, useTheme } from "@mui/material";

const Titel = ({ titel, brg }) => {
  const Theme = useTheme();
  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        variant="h5"
        sx={{ color: Theme.palette.info.light, fontWeight: "bold" }}
      >
        {titel}
      </Typography>
      <Typography variant="body1">{brg}</Typography>
    </Box>
  );
};

export default Titel;
