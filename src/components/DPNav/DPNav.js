import React from "react";
import Styles from "./DPNav.module.css";
import dp from "../../assets/images/dp.svg";
import dollar from "../../assets/images/dollar.svg";
import networkSVG from "../../assets/images/network.svg";
import Moment from "moment";
// import { Switch } from "@chakra-ui/react";

function DPNav() {
  const time = Moment().format("hh:mm a");

  return (
    <div className={Styles.nav}>
      <div>
        <div className={Styles.dpNavLeft}>
          <img src={dp} className="" alt="dp" />
          <div className={Styles.walletbalance}>
            <div className={Styles.agentname}>Agent Playstix</div>
            <img src={dollar} className="" alt="dollar" /> <span>1,5000</span>
          </div>
        </div>
      </div>

      <div className={Styles.dpNavRight}>
        {/* <Stack align="center" direction="row">
          <Switch size="md" />
        </Stack> */}
        <img src={networkSVG} className="" alt="networkSVG" />
        <span className={Styles.walletbalance}>{time}</span>
      </div>
    </div>
  );
}

export default DPNav;
