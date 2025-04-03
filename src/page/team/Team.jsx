import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Typography, useTheme } from "@mui/material";
import LockOutlineIcon from "@mui/icons-material/LockOutline";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SecurityIcon from "@mui/icons-material/Security";
import Titel from "../../components/Titel";

const Team = () => {
  const theme = useTheme();

  const columns = [
    { field: "ID", headerName: "ID", width: 35 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "age", headerName: "Age", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              padding: "5px",
              width: "99px",
              borderRadius: "3px",
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "10px",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsIcon fontSize="small" sx={{ color: "#fff" }} />
            )}
            {access === "Manager" && (
              <SecurityIcon fontSize="small" sx={{ color: "#fff" }} />
            )}
            {access === "User" && (
              <LockOutlineIcon fontSize="small" sx={{ color: "#fff" }} />
            )}
            <Typography
              sx={{ fontSize: "13px", color: "#fff" }}
              variant="body1"
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <Titel titel={"Team"} brg={"List of Team Members"} />
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
};

export default Team;
