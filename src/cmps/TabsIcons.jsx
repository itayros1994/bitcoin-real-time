import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export function TabsIcons() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabs-container">
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          variant="scrollable"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Link className="page-link" to="/">
            <Tab value="one" label="Overview" />
          </Link>
          <Link className="page-link" to="/history">
            <Tab value="one" label="History" />
          </Link>
        </Tabs>
      </Box>
    </div>
  );
}
