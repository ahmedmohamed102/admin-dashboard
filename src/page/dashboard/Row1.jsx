import { Paper, Stack, Typography, useTheme } from "@mui/material";
import Card from "./card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from "./data";
const Row1 = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
      sx={{ mt: 2}}
    >
      <Card
        icon={
          <EmailIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        titel={"12,361"}
        subTitel={"Emails Sent"}
        incres={"+14%"}
        data={data1}
        scheme={"category10"}
      />
      <Card
        icon={
          <PointOfSaleIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        titel={"431,225"}
        subTitel={"Sales Obtained"}
        incres={"+21%"}
        data={data2}
        scheme={"nivo"}
      />
      <Card
        icon={
          <PersonAddIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        titel={"32,441"}
        subTitel={"New Users"}
        incres={"+30%"}
        data={data3}
        scheme={"dark2"}
      />
      <Card
        icon={
          <TrafficIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        titel={"1,421,145"}
        subTitel={"Traffic Received"}
        incres={"+43%"}
        data={data4}
        scheme={"set1"}
      />
    </Stack>
  );
};

export default Row1;
