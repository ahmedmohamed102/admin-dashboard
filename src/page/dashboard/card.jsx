import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

const Card = ({ icon, titel, subTitel, data, incres, scheme }) => {
    const Theme = useTheme();
  return (
    <Paper
      sx={{
        minWidth: "333px",
        padding: 1.5,
        display: "flex",
        justifyContent: "space-between",
        flexGrow: 1,
      }}
    >
      <Stack direction={"column"} spacing={1} justifyContent={"center"}>
        {icon}
        <Typography variant="body1" sx={{ fontSize: "13px" }}>
          {titel}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "13px" }}>
          {subTitel}
        </Typography>
      </Stack>
      <Stack direction={"column"} alignItems={"center"}>
        <Box sx={{ height: "70px", width: "80px" }}>
          <ResponsivePie
            data={data}
            margin={{ top: 10, bottom: 10 }}
            innerRadius={0.6}
            padAngle={0.7}
            enableArcLabels={false}
            enableArcLinkLabels={false}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            colors={{ scheme: scheme }}
            borderWidth={1}
            theme={{
              text: {
                fontSize: 11,
                // @ts-ignore
                fill: Theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
              axis: {
                domain: {
                  line: {
                    stroke: "#777777",
                    strokeWidth: 1,
                  },
                },
                legend: {
                  text: {
                    fontSize: 12,
                    // @ts-ignore
                    fill: Theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                },
                ticks: {
                  line: {
                    // @ts-ignore
                    stroke: Theme.palette.divider,
                    strokeWidth: 1,
                  },
                  text: {
                    fontSize: 11,
                    // @ts-ignore
                    fill: Theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                },
              },
              grid: {
                line: {
                  // @ts-ignore
                  stroke: Theme.palette.divider,
                  strokeWidth: 1,
                },
              },
              legends: {
                title: {
                  text: {
                    fontSize: 11,
                    // @ts-ignore
                    fill: Theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                },
                text: {
                  fontSize: 11,
                  // @ts-ignore
                  fill: Theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
                ticks: {
                  line: {},
                  text: {
                    fontSize: 10,
                    // @ts-ignore
                    fill: Theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                },
              },
              annotations: {
                text: {
                  fontSize: 13,
                  // @ts-ignore
                  fill: Theme.palette.text.primary,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                link: {
                  stroke: "#000000",
                  strokeWidth: 1,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                outline: {
                  stroke: "#000000",
                  strokeWidth: 2,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                symbol: {
                  fill: "#000000",
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
              },
              tooltip: {
                wrapper: {},
                container: {
                  // @ts-ignore
                  background: Theme.palette.background.default,
                  // @ts-ignore
                  fill: Theme.palette.text.primary,
                  fontSize: 12,
                },
                basic: {},
                chip: {},
                table: {},
                tableCell: {},
                tableCellValue: {},
              },
            }}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
          />
        </Box>
        <Typography variant="body1" sx={{ fontSize: "13px" }}>
          {incres}
        </Typography>
      </Stack>
    </Paper>
  );
};
export default Card;
