import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { rows, columns } from "./data";
import Titel from "../../components/Titel";

const Contacts = () => {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Titel titel={"Contacts"} brg={"List of Contacts"} />
      <DataGrid
        slots={{ toolbar: GridToolbar }}
        rows={rows}
        columns={columns}
      />
    </Box>
  );
};

export default Contacts;
