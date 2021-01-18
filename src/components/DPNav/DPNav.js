import React from 'react';
import Styles from './DPNav.module.css';
import dp from '../../assets/images/dp.svg';
import dollar from '../../assets/images/dollar.svg';
import networkSVG from '../../assets/images/network.svg';

function DPNav() {
    return (
        <div className={Styles.nav}>
            <div className={Styles.dpNavLeft}>
                <img src={dp} className="" alt="dp" />
                <img src={dollar} className="" alt="dollar" />
                <p>Agent Playstix</p>
            </div>
            <div className={Styles.dpNavRight}>
                <img src={networkSVG} className="" alt="networkSVG" />
            </div>
        </div>
    )
}

export default DPNav
