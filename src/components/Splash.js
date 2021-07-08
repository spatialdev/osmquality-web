import React from 'react';

import Button from '@material-ui/core/Button/Button';

import logo_COSMT from '../images/logo_COSMT.min.svg';
import logo_critigen from '../images/logo_critigen.min.svg';
import landing_page_image from '../images/LandingPage.svg';
import arrow from '../images/arrow.svg';
import anchorage from'../images/thumbnails_cities/AK_Anchorage_AK.jpg';
import mapBackground from '../images/Map-Background.svg';


import '../App.css';

const Splash = props => {

  return (
      <div className="splashPage">
          <div className="splashPageFirstHalf">
              <div className="splashPageThumbnailPart">
                  <div className="splashPageIntro">
                      <h1 className="which-city-has-the-b">Which city has the best OSM quality</h1>
                      <h2 className="critigen-created-thi">Critigen created this site to….Here we tell our audience why they should look at this website and what they can learn. This website has a purpose and that purpose goes here.</h2>
                  </div>
                  <div className="splashPageIntroPic">
                       <img className="landing_page_image" src={landing_page_image} alt="Landing page thumbnail"/>
                  </div>
              </div>
              <div className="splashPageExplorePart">
                  <div className="splashPageCoastalCitiesExplore">
                      <div className="splashPageCoastalCitiesExploreButtonPart">
                          <div className="coastal-cities">Coastal Cities</div>
                          <div className="button" onClick={() => props.history.push('/coastal-cities-ranking')}>
                              <div className="explore-rankings">EXPLORE RANKINGS</div>
                               <img className="arrow" src={arrow} alt="Arrow"/>
                          </div>

                      </div>
                       <div className="splashPageCoastalCitiesExploreCitiesPart">
                          <div className="cityThumbnail1">
                              <img className="cityThumbnailImage" src={anchorage} alt="anchorage"/>
                              <div className="numberCircle">1</div>
                          </div>
                           <div className="cityThumbnail1">
                              <img className="cityThumbnailImage" src={anchorage} alt="anchorage"/>
                              <div className="numberCircle">2</div>
                          </div>
                           <div className="cityThumbnail1">
                              <img className="cityThumbnailImage" src={anchorage} alt="anchorage"/>
                              <div className="numberCircle">3</div>
                          </div>

                      </div>
                  </div>
                  <div className="splashPageUSCitiesExplore">
                      <div className="splashPageCoastalCitiesExploreButtonPart">
                          <div className="coastal-cities">US Cities</div>
                          <div className="button" onClick={() => props.history.push('/us-cities-ranking')}>
                              <div className="explore-rankings">EXPLORE RANKINGS</div>
                               <img className="arrow" src={arrow} alt="Arrow"/>
                          </div>

                      </div>
                      <div className="splashPageCoastalCitiesExploreCitiesPart">
                          <div className="cityThumbnail1">
                              <img className="cityThumbnailImage" src={anchorage} alt="anchorage"/>
                              <div className="numberCircle">1</div>
                          </div>
                           <div className="cityThumbnail1">
                              <img className="cityThumbnailImage" src={anchorage} alt="anchorage"/>
                              <div className="numberCircle">2</div>
                          </div>
                           <div className="cityThumbnail1">
                              <img className="cityThumbnailImage" src={anchorage} alt="anchorage"/>
                              <div className="numberCircle">3</div>
                          </div>

                      </div>
                  </div>
              </div>

          </div>
          <div className="splashPageSecondHalf">
                   <img  className="splashPageSecondHalfImage" src={mapBackground} alt="mapBackground"/>
                  <div className="splashPageSecondHalfContainer">
                      <div className="about-critigen-rectangle">
                      <h1 className="about-critigen"> About Critigen</h1>
                      <p className="critigen-is-a-global">Critigen is a global team providing consulting, design, integration, and support services - mostly involving geospatial technologies. Critigen works with clients to “spatially-enable” their systems, products and services. Critigen harnesses the power of spatial technology by leveraging 30 + years of knowledge and innovation from our team of experts. Our results are sustainable spatial information solutions and decision support tools aimed at improving operational effectiveness and efficiencies.</p>
                  </div>
                  <div className="osm-community-rectangle">
                        <h3 className="about-critigen">Part of the OpenStreetMap Community</h3>
                      <p className="critigen-is-a-global">We’ve been working with OpenStreetMap for a decade - making contributions, creating maps, performing analyses and building tools. We love being part of the community building a free and open map of the world for everyone.</p>
                  </div>
                  </div>


                  <div>

                  </div>

              </div>

      </div>
    // <div className="splashPage">
    //   <div className="splashContent">
    //     <div className="flexItem">
    //       <img className="landing_page_image" src={landing_page_image} alt="Landing page thumbnail"/>
    //     </div>
    //     <div className="flexItem">
    //       <h4>Which city has the best OSM quality?</h4>
    //       <Button onClick={() => props.history.push('/rankings')}>Explore OSM Quality Ranking</Button>
    //     </div>
    //   </div>
    //   <div className="critigenLogo">
    //     <a href="http://www.critigen.com" target="_blank" rel="noopener noreferrer">
    //       <img src={logo_critigen} alt="Critigen OSM Team"/>
    //     </a>
    //   </div>
    // </div>
  );
};

export default Splash;