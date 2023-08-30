import {
    Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

type T = any;

interface tableProps {
  header: Array<string>;
  rows: Array<T>;
  stableSize?:"small"|"medium"|"large" |"undefined";
}

const LactoSafeTable: React.FC<tableProps> = ({ header, rows,stableSize, ...props }) => {
  return (
    <TableContainer  component={Paper} >
      <Table >
        <TableHead>
          <TableRow>
            {header.map((head) => (
              <TableCell>{head}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {Object.keys(row).map((value) => (
                <TableCell component="th" scope="row">
                  {row[value]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LactoSafeTable;
