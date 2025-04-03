import Titel from "../../components/Titel";
import Bar from "./bar";

const BarChart = () => {
  return (
    <div>
      <Titel titel={"Bar Chart"} brg={"Simple Bar Chart"} />
      <Bar isDashboard={undefined} />
    </div>
  );
};

export default BarChart;
