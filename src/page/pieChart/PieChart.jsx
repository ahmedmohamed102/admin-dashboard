import Titel from "../../components/Titel";
import Pie from "./pie";

const PieChart = () => {
  return (
    <div>
      <Titel titel={"Pie Chart"} brg={"Simple Pie Chart"} />
      <Pie isDashboard={false} />
    </div>
  );
};

export default PieChart;
