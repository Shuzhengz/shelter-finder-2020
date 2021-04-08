import React from 'react'
import "./style-home.css"

const LandingPage = (props) => {
    const  buttonIds = ["topbutton", "informationbutton", "missionbutton", "featuresbutton", "partnersbutton", "contactbutton"]
    const  ids = ["top", "information", "mission", "features", "partners", "contact"]
    let slideIndex = 1;

    // Navigation
    function openNav() {
        if (window.screen.availWidth >= 450) {
            document.getElementById("side-navigation-bar").style.width = "400px";
            document.getElementById("navigation-active-background").style.visibility="visible";
            document.getElementById("navigation-active-background").style.opacity="0.25";
        } else {
            document.getElementById("side-navigation-bar").style.width = "100%";
            document.getElementById("navigation-active-background").style.visibility="visible";
            document.getElementById("navigation-active-background").style.opacity="0.25";
        }
    }

    function closeNav() {
        document.getElementById("side-navigation-bar").style.width = "0";
        document.getElementById("navigation-active-background").style.visibility="hidden";
        document.getElementById("navigation-active-background").style.opacity="0";
    }

    // Slideshow
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide-container");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        //slides[(slideIndex-1)].style.display = "block";
    }

    let nslideIndex = 1;
    nshowSlides(nslideIndex);

    function nplusSlides(n) {
        nshowSlides(nslideIndex += n);
    }

    function ncurrentSlide(n) {
        nshowSlides(nslideIndex = n);
    }

    function nshowSlides(n) {
        let i;
        let slides = document.getElementsByClassName("nslide-container");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) {nslideIndex = 1}
        if (n < 1) {nslideIndex = slides.length}

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        //slides[nslideIndex-1].style.display = "block";
        //dots[nslideIndex-1].className += " active";

        //let id = this.id
        //console.log(id)

        //(".down-button").click(function() {
        //    ('html,body').animate({
        //        scrollTop: (`#${ids[buttonIds.indexOf(id) + 1]}`).offset().top}, 1000)
        //});
    }

    return (
        <>
            <div id="navigation-active-background" className="navigation-active-background"/>

            <div id="side-navigation-bar" className="side-navigation">
                <div className="side-navigation-content">
                    <a href="javascript:void(0)" className="closebtn" onClick="closeNav()"/>

                    <div className="links-nonwrap">
                        <a href="/"><i className="nav-icon" data-feather="home"/>Home</a>
                        <a path="/settings"><i className="nav-icon" data-feather="settings"/>Settings</a>
                        <a path="/beds"><i className="nav-icon" data-feather="map"/>Find Beds</a>
                        <a path="/help"><i className="nav-icon" data-feather="help-circle"/>Help</a>
                    </div>
                </div>
            </div>

            <div className="top-div" id="top">
                <div className="title-div-flex">
                    <img src="./images/Landing/open-menu.png" className="flex-menu-icon" onClick="openNav()" alt = "flex menu icon"/>

                    <div className="logo-container">
                        <img src="images/Landing/logo.png" alt = "logo"/>
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
                        allowFullScreen/>
                    </div>
                </div>

                <button className="down-button light" type="button" id="topbutton"
                        style={{marginBottom: '32px'}}/>
            </div>

            <div className="section-features-div" id="information">
                <h1>WHO WE ARE</h1>

                <div className="center-div">
                    <img src="images/Landing/FullTeam.jpg"
                         style={{maxWidth: '1200px', width: '100%', borderRadius: '8px'}}/>
                </div>

                <p>We're a team of high school students from FRC Team 1678 Citrus Circuits. We're passionate about
                    creating positive change in our community using the software and communications skills we've learned
                    on the team. Shelter Finder began in 2018 when one of our students realized the difficulty first
                    responders had finding available beds for those in need of shelter, and we've been running the
                    project with a group of committed students ever since.</p>

                <button className="down-button" id="informationbutton" style={{marginTop: 'auto'}}/>
            </div>

            <div className="section-features-div" id="mission">
                <h1>OUR MISSION</h1>

                <div className="center-div">
                    <img src="images/Landing/OurMission.png"
                         style={{marginHeight: '500px', maxWidth: '100%', borderRadius: '8px'}}/>
                </div>

                <p>Our mission is to eliminate slow communication between first responders and homeless shelters in our
                    community by using the skills we've learned on Citrus Circuits. We’ve worked towards our mission by
                    creating a web application that facilitates communication between first responders and shelters.
                    We're very grateful for all the support we’ve received, and hope to continue the project and expand
                    it throughout the Sacramento and Yolo County regions.</p>

                <button className="down-button" id="missionbutton" style={{marginTop: 'auto'}}/>
            </div>

            <div className="section-features-div" id="features">
                <h1 style={{marginBottom: '32px'}}>FEATURES</h1>

                <div className="slides-flex-container">
                    <div className="slides-flex-item">
                        <h2>For Shelters</h2>

                        <div className="slideshow-container">
                            <div className="slide-container">
                                <img src="images/Landing/ShelterOne.png"/>
                            </div>

                            <div className="slide-container">
                                <img src="images/Landing/ShelterTwo.png"/>
                            </div>

                            <a className="prev" onClick="plusSlides(-1)"/>
                            <a className="next" onClick="plusSlides(1)"/>
                        </div>

                        <div className="feature-flex-row">
                            <img src="images/Landing/TimeIcon.jpg"/>

                            <p>Update your available bed counts in real-time for first responder to view on the map.</p>
                        </div>

                        <div className="feature-flex-row">
                            <img src="images/Landing/SettingsIcon.jpg"/>

                            <p>Effortlessly configure shelter settings (shelter, counter, and contact information).</p>
                        </div>
                    </div>

                    <div className="slides-flex-item">
                        <h2>For First Responders</h2>

                        <div className="slideshow-container">
                            <div className="nslide-container">
                                <img src="images/Landing/ResponderOne.png"/>
                            </div>

                            <div className="nslide-container">
                                <img src="images/Landing/ResponderTwo.png"/>
                            </div>

                            <div className="nslide-container">
                                <img src="images/Landing/ResponderThree.png"/>
                            </div>

                            <a className="prev" onClick="nplusSlides(-1)"/>
                            <a className="next" onClick="nplusSlides(1)"/>
                        </div>

                        <div className="feature-flex-row">
                            <img src="images/Landing/MapIcon.jpg"/>

                            <p>View all Shelters in the area, as well as their real-time bed counts and contact
                                information.</p>
                        </div>

                        <div className="feature-flex-row">
                            <img src="images/Landing/BedCountIcon.jpg"/>

                            <p>Quickly look for shelters in the area with a specific number of available of beds,
                                regardless of gender.</p>
                        </div>
                    </div>
                </div>

                <button className="down-button" id="featuresbutton" style={{marginTop: 'auto'}}/>
            </div>

            <div className="section-features-div" id="partners">
                <h1>OUR CURRENT PARTNERS</h1>

                <div className="partners-div">
                    <ul className="flex-container">
                        <li className="flex-item">
                            <img src="images/Landing/FourthAndHope.png " alt={"FourthAndHope"}/>
                        </li>
                        <li className="flex-item">
                            <img src="images/Landing/DavisPD.jpg "/>
                        </li>
                        <li className="flex-item">
                            <img src="images/Landing/SutterDavisHospital.jpg "/>
                        </li>
                    </ul>
                </div>

                <button className="down-button light" id="partnersbutton" style={{marginTop: `auto` }}/>
            </div>

            <div className="section-features-div" id="contact">
                <h1>CONTACT US</h1>

                <p>If you have any questions or comments, or you are interested in becoming a partner, please contact
                    us!</p>

                <a href="mailto: contact@shelterfinder.org" className="contact-button">
                    <span>contact@shelterfinder.org <div className="mail-icon"/></span>
                </a>
            </div>
        </>
            )
}

export default LandingPage
