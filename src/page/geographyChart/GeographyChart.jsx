import Titel from "../../components/Titel";
import Geography from "./Geography";


const GeographyChart = () => {
  return (
    <div>
      <Titel titel={"Geography Chart"} brg={"Simple Geography Chart"} />
      <Geography isDashboard={undefined} />
    </div>
  );
};

export default GeographyChart;
