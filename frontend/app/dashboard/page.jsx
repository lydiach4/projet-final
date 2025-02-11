"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "birthDate",
    headerName: "BirthDate",
    type: "date",
    width: 160,
    editable: true,
  },
  { field: "phoneNumber", headerName: "Phone-Number", width: 200 },
  {
    field: "appointment",
    headerName: "Appointment",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 200,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 50 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: "100%", margin: 20 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
