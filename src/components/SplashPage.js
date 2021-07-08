    import React, { Component } from 'react';
    import { withStyles } from '@material-ui/core/styles';
    import { connect } from 'react-redux';
    import {withRouter} from "react-router-dom";
    import landing_page_image from "../images/LandingPage.svg";
    import arrow from "../images/arrow.svg";
    import mapBackground from "../images/Map-Background.svg";

    const styles = {
        filterContainer: {
            backgroundColor: 'white',
            position: 'fixed',
            left: '5%',
            bottom: '5%',
            width: 250,
            zIndex: 1000,
            height: '60%',
            boxShadow: '2px 2px 2px'
        },
        buttonContainerMobile: {
            left: '87%',
            position: 'fixed',
            bottom: '25%'
        },
        buttonContainerDesktop: {
            right: '3%',
            position: 'fixed',
            bottom: '5vh'
        },

        legendMobileContainer: {
            top: '24vh',
            left: '87%',
            position: 'fixed',
            backgroundColor: '#FFFFFF'
        },
        legendDesktopContainer: {
            top: '24vh',
            right: '3%',
            position: 'fixed',
            backgroundColor: '#FFFFFF'
        },
        legendButtonMobile:{
            '& svg': {
                fontSize: 20,
            },
            width: 20,
            height: 20,
            backgroundColor: '#FFFFFF'
        },
        navigationButton: {
            '& svg': {
                fontSize: 20,
            },
            width: 20,
            height: 20,
            backgroundColor: '#FFFFFF'
        },
        navigationButtonContainer: {
            width: 35,
            height: 35,
            backgroundColor: '#FFFFFF',
            "&:hover": {
                backgroundColor: "#FFFFFF"
            }
        },
        listViewButton: {
            '& svg': {
                fontSize: 20,
            },
            width: 20,
            height: 20,
            backgroundColor: '#FFFFFF'
        },
        fab: {
            margin: 1,
            backgroundColor: '#FFFFFF'
        },
        extendedIcon: {
            marginRight: 1,
        },
        listViewMobileWrapper: {
            top: '15vh',
            left: '87%',
            position: 'fixed',
            backgroundColor: '#FFFFFF',
            '& svg': {
                fontSize: 20,
            },
        },
        listViewDesktopWrapper: {
            top: '15vh',
            right: '3%',
            position: 'fixed',

            '& svg': {
                fontSize: 30,
            },
        },
        reportLinkCloseButtonWrapper : {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
        },
        closeIcon : {
            height: '15px',
            width: '15px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'scroll',
            margin: 4
        },
        splashPageMobile: {
            backgroundColor: '#FFFFFF',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            textAlign: 'left'
        },
        splashPage: {
            backgroundColor: '#FFFFFF',
            height: '100vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            textAlign: 'left'
        },

        splashPageIntroMobileContainer: {
            padding: '20px',
            margin: '24px',
            backgroundColor: '#FFFFFF',
            // height: '100%',
            minHeight: '450px',
            maxWidth: '100%',
            overflowY: 'hidden',
            '& h1': {
                   height: '144px',
                   color: '#000000',
                   fontFamily: 'Mitr',
                   fontSize: '40px',
                   letterSpacing: '0',
                   lineHeight: '48px'
            },
            '& p': {
                  height: '200px',
                  width: '100%',
                  color: 'rgba(0,0,0,0.7)',
                  fontFamily: 'Open Sans',
                  fontSize: '16px',
                  letterSpacing: '0',
                  lineHeight: '24px',
                  position: 'relative',
                  top: '20px'
            }
        },
        splashPageIntroContainer: {
            height: '100%',
            minWidth: '464px',
            maxWidth: '40%',
            backgroundColor: '#FFFFFF',
            paddingLeft: '152px',
            paddingTop: '164px',
            '& h1': {
                   color: '#000000',
                   fontFamily: 'Mitr',
                   fontSize: '56px',
                   letterSpacing: '0',
                   lineHeight: '72px'
            },
            '& p': {
                  color: 'rgba(0,0,0,0.7)',
                  fontFamily: 'Open Sans',
                  fontSize: '20px',
                  letterSpacing: '0',
                  lineHeight: '32px'
            }
        },
        landingPageImageDesktop : {
            '& img': {
                minWidth: '613.65px',
                backgroundColor: '#FFFFFF',
                maxWidth: '100%'
            },
            paddingLeft: '15px',
            height: '100%',
            overflowX: 'hidden',
            minWidth: '613.65px',


        },
        landingPageImageMobile : {
            '& img': {
                minHeight: '232px',
                maxWidth: '100%',
                 backgroundColor: '#FFFFFF',
            },
            height: '232px',
            width: '100%',
            paddingLeft: '17px',
        },
        landingPageContainer: {
            backgroundColor: '#FFFFFF',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            textAlign: 'left',
        },
        exploreContainerDesktop: {
            backgroundColor: '#FFFFFF',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingLeft: '152px',
            paddingRight: '152px',
            paddingTop: '67px',
            maxWidth: '100%'
        },

        coastalCityContainerDesktop: {
            backgroundColor: '#F7F8F6',
            height: '445px',
            minWidth: '400px',
            maxWidth: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            borderRadius: '16px',
            margin: '5px'
        },

        usCityContainerDesktop: {
            minWidth: '400px',
            backgroundColor: '#F7F8F6',
            height: '445px',
            maxWidth: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            borderRadius: '16px',
            margin: '5px'
        },

        exploreContainerMobile: {
            backgroundColor: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            padding: '5px',
            maxWidth: '100%',
            position: 'relative',
            top: '150px'
        },
        coastalCityContainerMobile: {
            backgroundColor: '#F7F8F6',
            maxWidth: '100%',
            minHeight: '344px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            borderRadius: '16px',
            paddingLeft: '17px',
            margin: '24px'
        },

        usCityContainerMobile: {
            backgroundColor: '#F7F8F6',
            maxWidth: '100%',
            minHeight: '344px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            borderRadius: '16px',
            padding: '17px',
            margin: '24px'
        },

        secondHalfContainerMobile: {
            backgroundColor: '#FFFFFF',
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            padding: '5x',
            fontSize: '2.5vw',
            position: 'relative',
            top: '150px'
        },

        secondHalfContainerDesktop: {
            backgroundColor: '#FFFFFF',
            maxWidth: '100%',
            maxHeight: '294px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            padding: '5x',
            fontSize: '3vh'
        },

        aboutCritigenRectangleMobile: {
            margin: '24px',
            display: 'flex',
            maxWidth: '100%',
            minHeight: '400px',
            alignItems: 'flex-start',
            paddingLeft: '17px',
            borderRadius: '16px',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            backgroundColor: '#F7F8F6',
        },
        aboutCritigenRectangleDesktop: {
            margin: '24px',
            display: 'flex',
            maxWidth: '100%',
            maxHeight: '344px',
            minHeight: '344px',
            alignItems: 'flex-start',
            paddingLeft: '17px',
            borderRadius: '16px',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            backgroundColor: '#F7F8F6',

        },

        splashPageExploreButtonPartMobile: {
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100%',
            marginLeft: '24px'
        },

        splashPageExploreButtonPartDesktop: {
            display: 'flex',
            flexDirection: 'row',
            justifyItems: 'center',
            justifyContent: 'left',
            paddingLeft: '24px',
            paddingDown: '16px'
        },
        coastalCitiesMobile: {
            height: '38px',
            width: '167px',
            color: '#000000',
            fontFamily: 'Mitr',
            fontSize: '24px',
            letterSpacing: '0',
            lineHeight: '38px',
            marginTop: '24px'
        },
        coastalCitiesDesktop: {
            height: '38px',
            width: '167px',
            color: '#000000',
            fontFamily: 'Mitr',
            fontSize: '24px',
            letterSpacing: '0',
            lineHeight: '38px',
            marginTop: '24px'
        },
        buttonMobile: {
            height: '40px',
            borderRadius: '8px',
            backgroundColor: '#000000',
            display: 'flex',
            flexDirection: 'row',
            cursor: 'pointer',
        },
        buttonDesktop: {
            height: '40px',
            borderRadius: '8px',
            backgroundColor: '#000000',
            display: 'flex',
            flexDirection: 'row',
            cursor: 'pointer',
            marginTop: '24px',
            marginRight: '24px'

        },
        citiesDescriptionMobile:{
            height: '100%',
            color: 'rgba(0,0,0,0.7)',
            fontFamily: 'Open Sans',
            fontSize: '5vw',
            letterSpacing: '0',
            lineHeight: '24px',
            marginLeft: '24px',
            marginRight: '24px',
        },
        citiesDescriptionDesktop: {
            height: '100%',
            color: 'rgba(0,0,0,0.7)',
            fontFamily: 'Open Sans',
            fontSize: '16px',
            letterSpacing: '0',
            lineHeight: '24px',
            marginLeft: '24px',
            marginRight: '24px',
        },
        critigenIsAGlobalMobile: {
            color: 'rgba(0,0,0,0.7)',
            fontFamily: 'Open Sans',
            letterSpacing: '0',
            lineHeight: '24px',
            position: 'relative',
            top: '50px',
            marginLeft: '24px',
            marginRight: '24px',
            fontSize: '3vw',

        },
        critigenIsAGlobalDesktop: {
            color: 'rgba(0,0,0,0.7)',
            fontFamily: 'Open Sans',
            letterSpacing: '0',
            lineHeight: '30px',
            position: 'relative',
            top: '50px',
            marginLeft: '24px',
            marginRight: '24px',
            fontSize: '16px',
        },
        partOfOsmMobile: {
            color: 'rgba(0,0,0,0.7)',
            fontFamily: 'Open Sans',
            letterSpacing: '0',
            lineHeight: '24px',
            position: 'relative',
            top: '100px',
            marginLeft: '24px',
            marginRight: '24px',
            fontSize: '3vw',
        },
        partOfOsmDesktop: {
            color: 'rgba(0,0,0,0.7)',
            fontFamily: 'Open Sans',
            letterSpacing: '0',
            lineHeight: '30px',
            position: 'relative',
            top: '50px',
            marginLeft: '24px',
            marginRight: '24px',
            fontSize: '16px',
        }
    };
    class SplashPage extends Component {

        render() {
            const { classes, isMobile, history } = this.props;
            return (
                <div className={classes.landingPageContainer}>
                    <div className={isMobile ? classes.splashPageMobile : classes.splashPage}>
                        <div className={isMobile ? classes.splashPageIntroMobileContainer : classes.splashPageIntroContainer}>
                          <h1>Which city has the best OSM quality?</h1>
                          <p>Critigen’s OSM Team presents this website to convey our assessment of OSM data quality in a selection of cities based on a standard summary of map errors. For each city, we illustrate the quality trend between 2018 and 2019 based on the respective error rate for each time slice. </p>

                         </div>
                        <div className={isMobile ? classes.landingPageImageMobile : classes.landingPageImageDesktop}>
                           <img className={isMobile ? classes.landingPageImageMobile : classes.landingPageImageDesktop} src={landing_page_image} alt="Landing page thumbnail"/>
                        </div>
                    </div>
                    <div className={isMobile ? classes.exploreContainerMobile : classes.exploreContainerDesktop}>
                        <div className={isMobile ? classes.coastalCityContainerMobile : classes.coastalCityContainerDesktop}>
                            <div className={isMobile ? classes.splashPageExploreButtonPartMobile : classes.splashPageExploreButtonPartDesktop}>
                                     <p className={isMobile ? classes.coastalCitiesMobile : classes.coastalCitiesDesktop}>Coastal Cities</p>
                                     <div className={isMobile ? classes.buttonMobile : classes.buttonDesktop} onClick={() => history.push('/coastal-cities-ranking')}>
                                          <div className="explore-rankings">EXPLORE RANKINGS</div>
                                          <img className="arrow" src={arrow} alt="Arrow"/>
                                     </div>
                            </div>
                            <div className={isMobile ? classes.citiesDescriptionMobile : classes.citiesDescriptionDesktop}>
                                <p >Coastal Cities is a related quality ranking approach generated for 12 well known coastal cities around the world. We selected these coastal cities to evaluate data quality for the purpose of determining data readiness to support disaster preparation and response. </p>
                            </div>
                        </div>
                        <div className={isMobile ? classes.usCityContainerMobile : classes.usCityContainerDesktop}>
                            <div className={isMobile ? classes.splashPageExploreButtonPartMobile : classes.splashPageExploreButtonPartDesktop}>
                                     <p className={isMobile ? classes.coastalCitiesMobile : classes.coastalCitiesDesktop}>US Cities</p>
                                     <div className={isMobile ? classes.buttonMobile : classes.buttonDesktop} onClick={() => history.push('/us-cities-ranking')}>
                                          <div className="explore-rankings">EXPLORE RANKINGS</div>
                                          <img className="arrow" src={arrow} alt="Arrow"/>
                                     </div>
                            </div>
                            <div className={isMobile ? classes.citiesDescriptionMobile : classes.citiesDescriptionDesktop}>
                                <p>US Cities is a related quality ranking approach generated for 51 well known cities throughout the United States. We selected these cities to evaluate the trend of data quality.</p>
                            </div>
                        </div>
                     </div>
                     <div className={isMobile ? classes.secondHalfContainerMobile : classes.secondHalfContainerDesktop}>
                       <img  className="splashPageSecondHalfImage" src={mapBackground} alt="mapBackground"/>
                          <div className={isMobile ? classes.aboutCritigenRectangleMobile : classes.aboutCritigenRectangleDesktop}>
                          <h3 className="about-critigen"> About Critigen</h3>
                          <p className={isMobile ? classes.critigenIsAGlobalMobile : classes.critigenIsAGlobalDesktop}>Critigen is a global team providing consulting, design, integration, and support services - mostly involving geospatial technologies. Critigen works with clients to “spatially-enable” their systems, products and services. Critigen harnesses the power of spatial technology by leveraging 30 + years of knowledge and innovation from our team of experts. Our results are sustainable spatial information solutions and decision support tools aimed at improving operational effectiveness and efficiencies.</p>
                          </div>
                          <div className={isMobile ? classes.aboutCritigenRectangleMobile : classes.aboutCritigenRectangleDesktop}>
                            <h3 className="about-critigen">Part of the OpenStreetMap Community</h3>
                          <p className={isMobile ? classes.partOfOsmMobile : classes.partOfOsmDesktop}>We’ve been working with OpenStreetMap for a decade - making contributions, creating maps, performing analyses and building tools. We love being part of the community building a free and open map of the world for everyone.</p>
                      </div>

                  </div>
                </div>

            );
        }
    }

    const mapStateToProps = (state) => {
        return {
            isMobile: state.isMobile,
        };
    };
    export default withRouter(connect(mapStateToProps)(withStyles(styles)(SplashPage)));
