import { Box, Button, MenuItem, TextField } from "@mui/material";
import Titel from "../../components/Titel";
import { useState } from "react";

const data = [
  { value: "admin", label: "Admin" },
  { value: "manager", label: "Manager" },
  { value: "user", label: "User" },
];

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    address1: "",
    address2: "",
    role: "user",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      console.log("Form Data:", formData);
    }
  };

  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <Titel titel={"Profile"} brg={"Update your profile"} />
      <Box sx={{ display: "flex", gap: 2, flexDirection: "row" }}>
        <TextField
          name="firstName"
          label="First Name"
          variant="filled"
          required
          value={formData.firstName}
          onChange={handleChange}
          // @ts-ignore
          error={!!errors.firstName}
          // @ts-ignore
          helperText={errors.firstName}
          sx={{ flex: 1 }}
        />
        <TextField
          name="lastName"
          label="Last Name"
          variant="filled"
          required
          value={formData.lastName}
          onChange={handleChange}
          // @ts-ignore
          error={!!errors.lastName}
          // @ts-ignore
          helperText={errors.lastName}
          sx={{ flex: 1 }}
        />
      </Box>
      <TextField
        name="email"
        label="Email"
        variant="filled"
        required
        value={formData.email}
        onChange={handleChange}
          // @ts-ignore
        error={!!errors.email}
          // @ts-ignore
        helperText={errors.email}
        type="email"
      />
      <TextField
        name="contactNumber"
        label="Contact Number"
        variant="filled"
        value={formData.contactNumber}
        onChange={handleChange}
      />
      <TextField
        name="address1"
        label="Address 1"
        variant="filled"
        value={formData.address1}
        onChange={handleChange}
      />
      <TextField
        name="address2"
        label="Address 2"
        variant="filled"
        value={formData.address2}
        onChange={handleChange}
      />
      <TextField
        name="role"
        select
        label="Role"
        variant="filled"
        value={formData.role}
        onChange={handleChange}
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create New User
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
