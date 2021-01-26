import React from 'react';
import { Button } from 'react-bootstrap';
import Style from './LandingTitle.module.css';

function LandingTitle() {
    return (
        <div>
            <div className={Style.contentTitle}>
            Unlimited movies,
            <br />
            games, and more.
            </div>
            <div className={Style.contentSubtitle}>
            Watch anywhare, Play anytime
            </div>

            <Button className={Style.submit}>
            Signup for free <i className="ml-2 fas fa-greater-than"></i>
            </Button>
        </div>
    )
}

export default LandingTitle
