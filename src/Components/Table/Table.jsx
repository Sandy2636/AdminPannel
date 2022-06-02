import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./table.scss";
import { Avatar } from "@mui/material";

function createData(assigned, Task, Priority, Budget) {
  return { assigned, Task, Priority, Budget };
}

const rows = [
  createData("Sunil Joshi", "Elite Admin", "Low", "$3.k"),
  createData("Andrew McDownland", "Real Homes WP Theme", "Medium", "$24k"),
  createData("Christopher Jamil", "MedicalPro WP Theme", "High", "$12.8k"),
  createData("Nirav Joshi", "Hosting Press HTML", "Critical", "$2.4k"),
  createData("Micheal Doe", "Helping Hands Theme", "Moderate", "$9.3k"),
];

export default function BasicTable() {
  const RenderLogic = (value) => {
    let color;
    switch (value) {
      case "Low":
        color = "#03c9d7";
        break;
      case "Medium":
        color = "#fb9678";
        break;
      case "High":
        color = "#fec90f";
        break;
      case "Critical":
        color = "#e46a76";
        break;
      case "Moderate":
        color = "#00c292";
        break;

      default:
        color = "Gray";
        break;
    }
    return color;
  };

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="TableRow">
            <TableCell className="TableHeading  " align="left">
              Assigned
            </TableCell>
            <TableCell className="TableHeading" align="left">
              Task
            </TableCell>
            <TableCell className="TableHeading" align="left">
              Priority
            </TableCell>
            <TableCell className="TableHeading" align="left">
              Budget
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow className="TableRow" key={row.assigned}>
              <TableCell className="TableAssign" align="left">
                <div className="cell">
                  <Avatar className="Avatar" />
                  <p>{row.assigned}</p>
                </div>
              </TableCell>
              <TableCell className="TableTask" align="left">
                {row.Task}
              </TableCell>
              <TableCell className="TablePriority" align="left">
                <p style={{ backgroundColor: RenderLogic(row.Priority) }}>
                  {row.Priority}
                </p>
              </TableCell>
              <TableCell className="TableBudget" align="right">
                {row.Budget}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
