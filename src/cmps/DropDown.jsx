import * as React from "react";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { setCoinType ,setCoinImg } from "../store/action/bitcoin.action";
import { useDispatch } from "react-redux";
import coins from "../data/coin.json";

export function DropDown() {
  const dispatch = useDispatch();
  const [coin, setCoin] = React.useState("");
  const [coinTypeName, setcoinTypeName] = useState('')

  const handleChange = (event) => {
    setCoin(event.target.value);
  };

  const setCurrCoin = (coinType, imgUrl) => {
    setcoinTypeName(coinType)
    dispatch(setCoinType(coinType));
    dispatch(setCoinImg(imgUrl))
  };

  return (
    <div className="drop-down">
      <FormControl variant="outlined" sx={{ m: 2, minWidth: 300 }}>
        <div className="coin-choosing-text">Choose Your Coin <img className="coin-symbol" src="https://www.iconpacks.net/icons/2/free-cryptocurrency-coin-icon-2457-thumb.png" alt="" /> </div>
        <InputLabel id="demo-simple-select-standard-label">
          {coinTypeName.toUpperCase()}
        </InputLabel>
        <Select
        className="select-container"
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label={coinTypeName}
          onChange={handleChange}
          value={coin.nameCode}
          >
          {coins.map((coin) => {
            return (
              <div className="coins-container">
                <MenuItem
                  onClick={() => setCurrCoin(coin.nameCode, coin.imgUrl)}
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
