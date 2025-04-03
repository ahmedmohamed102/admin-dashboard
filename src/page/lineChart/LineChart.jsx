import Titel from "../../components/Titel";
import Line from "./line";
const LineChart = () => {
  return (
    <div>
      <Titel titel={"Line Chart"} brg={"Simple Line Chart"} />
      <Line isDashboard={undefined} />
    </div>
  );
};

export default LineChart;
