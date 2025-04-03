import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "france",
    color: "hsl(91, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 184,
      },
      {
        x: "helicopter",
        y: 143,
      },
      {
        x: "boat",
        y: 48,
      },
      {
        x: "train",
        y: 77,
      },
      {
        x: "subway",
        y: 237,
      },
      {
        x: "bus",
        y: 207,
      },
      {
        x: "car",
        y: 296,
      },
      {
        x: "moto",
        y: 252,
      },
      {
        x: "bicycle",
        y: 95,
      },
      {
        x: "horse",
        y: 219,
      },
      {
        x: "skateboard",
        y: 53,
      },
      {
        x: "others",
        y: 199,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(32, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 10,
      },
      {
        x: "helicopter",
        y: 296,
      },
      {
        x: "boat",
        y: 218,
      },
      {
        x: "train",
        y: 70,
      },
      {
        x: "subway",
        y: 235,
      },
      {
        x: "bus",
        y: 214,
      },
      {
        x: "car",
        y: 227,
      },
      {
        x: "moto",
        y: 21,
      },
      {
        x: "bicycle",
        y: 220,
      },
      {
        x: "horse",
        y: 299,
      },
      {
        x: "skateboard",
        y: 146,
      },
      {
        x: "others",
        y: 57,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(250, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 150,
      },
      {
        x: "helicopter",
        y: 195,
      },
      {
        x: "boat",
        y: 178,
      },
      {
        x: "train",
        y: 20,
      },
      {
        x: "subway",
        y: 175,
      },
      {
        x: "bus",
        y: 266,
      },
      {
        x: "car",
        y: 11,
      },
      {
        x: "moto",
        y: 177,
      },
      {
        x: "bicycle",
        y: 188,
      },
      {
        x: "horse",
        y: 3,
      },
      {
        x: "skateboard",
        y: 154,
      },
      {
        x: "others",
        y: 175,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(201, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 255,
      },
      {
        x: "helicopter",
        y: 167,
      },
      {
        x: "boat",
        y: 136,
      },
      {
        x: "train",
        y: 29,
      },
      {
        x: "subway",
        y: 106,
      },
      {
        x: "bus",
        y: 9,
      },
      {
        x: "car",
        y: 18,
      },
      {
        x: "moto",
        y: 156,
      },
      {
        x: "bicycle",
        y: 85,
      },
      {
        x: "horse",
        y: 261,
      },
      {
        x: "skateboard",
        y: 155,
      },
      {
        x: "others",
        y: 145,
      },
    ],
  },
];

const Line = ({isDashboard}) => {
  const Theme = useTheme();
  return (
    <Box sx={{ height: isDashboard ? "280px" : "75vh" }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
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
              strokeWidth: 0,
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
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        curve="catmullRom"
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? "" : "transportation",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? "" : "Count",
          legendOffset: -45,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        colors={{ scheme: "nivo" }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default Line;
