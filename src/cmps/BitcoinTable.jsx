import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { bitcoinService } from "../services/bitcoinServices";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";


export function BitcoinTable() {
  const [coinRows, setcoinRows] = useState([]);
  const {coinType} = useSelector(
    (state) => state.bitcoinModule
  );

  useEffect(() => {
    getBitcoinData("histoday", 7);
  }, [coinType]);

  const getBitcoinData = (timeType, aggregate) => {
    bitcoinService.getPriceBy(timeType, aggregate, coinType).then((prices) => {
      let rows = prices.data.map((price) => {
        if (timeType === "histoday") {
          return createData(
            price.Date.substring(0, 10),
            price.High,
            price.Low,
            price.Open,
            price.Close
          );
        } else {
          return createData(
            price.Date.substring(10, 16),
            price.High,
            price.Low,
            price.Open,
            price.Close
          );
        }
      });
      setcoinRows(rows);
    });
  };

  function createData(date, high, low, open, close) {
    return { date, high, low, open, close };
  }

  const buttons = [
    <Button onClick={() => getBitcoinData("histominute", 1)} key="one">
      1 Min
    </Button>,
    <Button onClick={() => getBitcoinData("histominute", 5)} key="two">
      5 Min{" "}
    </Button>,
    <Button onClick={() => getBitcoinData("histohour", 1)} key="two">
      1 Hour{" "}
    </Button>,
    <Button onClick={() => getBitcoinData("histoday", 7)} key="two">
      1 Week{" "}
    </Button>,
  ];

  if (!coinRows.length)
    return (
      <div className="loader">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          top={50}
          margin-top={-50}
          margin-left={0}
          margin-right={0}
          timeout={4000} //3 secs
        />
      </div>
    );

  return (
    <div className="history-container">
      <ButtonGroup
        className="buttons-group"
        variant="outlined"
        size="large"
        aria-label="large button group"
      >
        {buttons}
      </ButtonGroup>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell align="right">High</TableCell>
              <TableCell align="right">Low</TableCell>
              <TableCell align="right">Open</TableCell>
              <TableCell align="right">Close</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coinRows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.date.split('/').reverse().join('/')}
                </TableCell>
                <TableCell align="right">{row.high.toLocaleString()}</TableCell>
                <TableCell align="right">{row.low.toLocaleString()}</TableCell>
                <TableCell align="right">{row.open.toLocaleString()}</TableCell>
                <TableCell align="right">{row.close.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
