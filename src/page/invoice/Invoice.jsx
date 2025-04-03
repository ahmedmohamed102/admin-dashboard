import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { rows, columns } from "./data";
import Titel from "../../components/Titel";

const Invoice = () => {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Titel titel={"Invoice"} brg={"List of Invoice"} />
      <DataGrid
      checkboxSelection
        rows={rows}
        columns={columns}
      />
    </Box>
  );
};

export default Invoice;
