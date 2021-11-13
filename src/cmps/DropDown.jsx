import * as React from "react";
import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import coins from "../data/coin.json";
import {
  setCoinType,
  setCoinImg,
  setCoinName,
} from "../store/action/bitcoin.action";

export function DropDown() {
  const dispatch = useDispatch();
  const [coinTypeName, setcoinTypeName] = useState("");
  const [open, setOpen] = useState(false);

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
        <InputLabel>
          {coinTypeName.toUpperCase()}
        </InputLabel>
        <Select
          className="select-container"
          label={coinTypeName}
          value={coinTypeName}
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
