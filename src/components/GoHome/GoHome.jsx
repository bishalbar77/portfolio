import React, { Component } from 'react';
import { withRouter } from 'react-router';
import HomeIconWhite from './../../assets/home_white.png';
import HomeIconBlack from './../../assets/home_black.png';
import './GoHome.css';

class GoHome extends Component {
    navigateToHome = () => {
        const { history } = this.props;
        history.push("/");
    }

    render() {
        const {location} = this.props;
        const ButtonState = location.pathname === "/" ? HomeIconBlack : HomeIconWhite;
        const ButtonStyle = location.pathname === "/" ? 'white-bkg' : 'gradient-bkg';
        return(
            <button className={`go-home-btn ${ButtonStyle}`} onClick={this.navigateToHome}>
                <img className="home-icon" src={ButtonState} alt="Home button" />
            </button>
        );
    }
}

export default withRouter(GoHome);