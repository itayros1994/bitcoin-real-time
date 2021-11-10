import React, { useEffect, useState } from "react";
import { bitcoinService } from "../services/bitcoinServices";
import { BitcoinTable } from "../cmps/BitcoinTable";

export function History() {
  return <div>
  <BitcoinTable></BitcoinTable>
  </div>;
}
