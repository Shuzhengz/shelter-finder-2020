import React from 'react'

const LandingPage = (props) => {
    return (
        <ul className="flex-container">
            <li className="flex-item">
                <div id="navigation-active-background" className="navigation-active-background"></div>
            </li>
            <li className="flex-item">
                <div id="side-navigation-bar" className="side-navigation">
                    <div className="side-navigation-content">
                        <a href="javascript:void(0)" className="closebtn" onClick="closeNav()"></a>

                        <div className="links-nonwrap">
                            <a href="/"><i className="nav-icon" data-feather="home"></i>Home</a>
                            <a href="/settings"><i className="nav-icon" data-feather="settings"></i>Settings</a>
                            <a href="/beds"><i className="nav-icon" data-feather="map"></i>Find Beds</a>
                            <a href="/help"><i className="nav-icon" data-feather="help-circle"></i>Help</a>
                        </div>
                    </div>
                </div>
            </li>
            <il className="flex-container">
                <div className="top-div" id="top">
                    <div className="title-div-flex">
                        <img src="/static/images/Landing/open-menu.png " className="flex-menu-icon"
                             onClick="openNav()"/>

                        <div className="logo-container">
                            <img src="/static/images/Landing/logo.png "/>
                        </div>
                    </div>

                    <div className="header-flex-container">
                        <div className="header-flex-item title-container">
                            <h1>SHELTER FINDER</h1>
                            <h3>Helping homeless care providers online, for free.</h3>
                        </div>

                        <div className="header-flex-item image">
                            <iframe className="video-iframe" width="560" height="315"
                                    src="https://www.youtube.com/embed/7OSp9DdRU78" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </div>
                    </div>

                    <button className="down-button light" type="button" id="topbutton"
                            style="margin-bottom: 32px;"></button>
                </div>
            </il>
        </ul>
    )
}

export default LandingPage