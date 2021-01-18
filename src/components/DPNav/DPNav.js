import React from 'react';
import Styles from './DPNav.module.css';
import dp from '../../assets/images/dp.svg';
import dollar from '../../assets/images/dollar.svg';

function DPNav() {
    return (
        <div className={Styles.nav}>
            <div>
                <img src={dp} className="" alt="dp" />
                <img src={dollar} className="" alt="dollar" />
                <p>Agent Playstix</p>
            </div>
        </div>
    )
}

export default DPNav
