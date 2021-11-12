import * as React from "react";
import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  setCoinType,
  setCoinImg,
  setCoinName,
} from "../store/action/bitcoin.action";
import { useDispatch } from "react-redux";
import coins from "../data/coin.json";

export function DropDown() {
  const dispatch = useDispatch();
  const [coin, setCoin] = React.useState("");
  const [coinTypeName, setcoinTypeName] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setCoin(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const setCurrCoin = (coinType, imgUrl, coinName) => {
    setcoinTypeName(coinType);
    dispatch(setCoinType(coinType));
    dispatch(setCoinImg(imgUrl));
    dispatch(setCoinName(coinName));
    setOpen(!open);
  };

  return (
    <div className="drop-down">
      <FormControl variant="outlined" sx={{ m: 2, minWidth: 300 }}>
        <div className="coin-choosing-text">
          Choose Your Coin{" "}
          <img
            className="coin-symbol"
            src="https://www.iconpacks.net/icons/2/free-cryptocurrency-coin-icon-2457-thumb.png"
            alt=""
          />{" "}
        </div>
        <InputLabel id="demo-simple-select-standard-label">
          {coinTypeName.toUpperCase()}
        </InputLabel>
        <Select
          className="select-container"
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label={coinTypeName}
          value={coinTypeName}
          onChange={handleChange}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {coins.map((coin) => {
            return (
              <div className="coins-container">
                <MenuItem
                  onClick={() =>
                    setCurrCoin(coin.nameCode, coin.imgUrl, coin.coinName)
                  }
                  value={coin.nameCode}
                >
                  {coin.coinName}{" "}
                  <span>
                    <img className="coin-logo" src={coin.imgUrl} alt="" />
                  </span>
                </MenuItem>
              </div>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
