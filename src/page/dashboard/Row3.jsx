import { Box, Paper, Typography, useTheme } from "@mui/material";
import Pie from "../../page/pieChart/pie";
import Bar from "../../page/barChart/bar";
import Geography from "../../page/geographyChart/Geography";

const Row3 = () => {
  const Theme = useTheme();
  return (
    <Box sx={{ display: "flex", gap: 1, mt: 2, flexWrap: "wrap" }}>
      <Paper sx={{ minWidth: "300px", width: "28%", flexGrow: 1 }}>
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ padding: "30px 30px 0 30px" }}
          color={Theme.palette.secondary.main}
        >
          Campaign
        </Typography>
        <Pie isDashboard={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>

        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>

      <Paper sx={{ minWidth: "300px", width: "33%", flexGrow: 1 }}>
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ padding: "30px 30px 0 30px" }}
          color={Theme.palette.secondary.main}
        >
          Sales Quantity
        </Typography>
        <Bar isDashboard={true} />
      </Paper>

      <Paper sx={{ minWidth: "300px", width: "33%", flexGrow: 1 }}>
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ padding: "30px 30px 30px 30px" }}
          color={Theme.palette.secondary.main}
        >
          Geography Based Traffic
        </Typography>
        <Geography isDashboard={true} />
      </Paper>
    </Box>
  );
};

export default Row3;
