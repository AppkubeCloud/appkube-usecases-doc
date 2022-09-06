import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineFullscreen,
  AiFillCloseCircle,
} from 'react-icons/ai';
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import { CustomGallery, Item, DefaultLayout } from 'react-photoswipe-gallery';
import { Scrollbars } from 'react-custom-scrollbars';

const ScenarioSlider = ({ slider, showMoreDetailsButton }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const layoutRef = useRef();

  function gotoNextSlide() {
    if (currentSlide + 1 < slider.length) {
      setCurrentSlide(currentSlide + 1);
    }
  }

  function goToPreviousSlide() {
    if (currentSlide - 1 >= 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }

  function onClickMoreDetails() {
    setShowMoreDetails(true);
  }

  function onClickMoreDetailsclose() {
    setShowMoreDetails(false);
  }

  return (
    <>
      <CustomGallery layoutRef={layoutRef} ui={PhotoswipeUIDefault}>
        {slider.map((sliderContent, index) => (
          <article
            key={v4()}
            className={`slider-content ${currentSlide === index ? 'active' : ''
              }`}>
            {/* <Scrollbars> */}
            <div className='item-image'>
              <Item
                original={sliderContent.img}
                thumbnail={sliderContent.img}
                width='1920'
                height='1280'>
                {({ ref, open }) => (
                  <div ref={ref} onClick={open} className='item-image-wrapper'>
                    <button className='fullscreen'>
                      <AiOutlineFullscreen />
                    </button>
                    <div className='item-image-div'>
                      <img
                        src={sliderContent.img}
                        alt={sliderContent.name}
                        title={sliderContent.name}
                      />
                    </div>
                  </div>
                )}
              </Item>
            </div>
            {showDetails ? (
              <div className='item-content'>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-md-10 col-12'>
                      <div className='scenario-div-btn'>
                        <button
                          className='close-more'
                          onClick={() => setShowDetails(false)}>
                          <AiFillCloseCircle />
                        </button>
                        <h3 className='has-text-weight-semibold'>
                          {sliderContent.name}
                        </h3>
                      </div>
                    </div>
                    {showMoreDetailsButton && (
                      <div className='col-md-2 col-12'>
                        <button
                          style={{ marginTop: '7px' }}
                          className='button is-link float-right more-details-btn'
                          onClick={onClickMoreDetails}>
                          More details
                        </button>
                        {showMoreDetails && (
                          <div
                            className='more-details-content'
                            style={{
                              backgroundImage: `url(${sliderContent.img})`,
                            }}>
                            <Scrollbars>
                              <div className='details-content-inner'>
                                <button
                                  className='close-btn'
                                  onClick={onClickMoreDetailsclose}>
                                  <AiFillCloseCircle />
                                </button>
                                <div className='container'>
                                  <div className='row'>
                                    <div className='col-md-8 col-12'>
                                      <h3 className='has-text-weight-semibold is-size-2'>
                                        {
                                          sliderContent.moreDetails
                                            .moreDetailsName
                                        }
                                      </h3>
                                      <p>
                                        {
                                          sliderContent.moreDetails
                                            .moreDetailsText
                                        }
                                      </p>
                                    </div>
                                    <div className='col-md-4 col-12'>
                                      {sliderContent.moreDetails
                                        .moreDetailsImg &&
                                        sliderContent.moreDetails.moreDetailsImg.map(
                                          (img, index) => (
                                            <div key={v4()} className='image'>
                                              <img
                                                src={img.img}
                                                alt={
                                                  sliderContent.moreDetails
                                                    .moreDetailsName
                                                }
                                                title={
                                                  sliderContent.moreDetails
                                                    .moreDetailsName
                                                }
                                                width='300'
                                                height='200'
                                              />
                                            </div>
                                          )
                                        )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Scrollbars>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-12'>
                      <p>{sliderContent.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {/* </Scrollbars> */}
          </article>
        ))}
        <div>
          <ul className='pager'>
            {slider.map((sliderContent, index) => (
              <li
                key={v4()}
                onClick={() => setCurrentSlide(index)}
                className={`pager-item ${currentSlide === index ? 'active' : ''
                  }`}></li>
            ))}
          </ul>
          {/* <button className='learn-more' onClick={() => setShowDetails(true)}>
            Learn More
          </button> */}
        </div>
        <button className='nabtn-left' onClick={goToPreviousSlide}>
          <AiOutlineLeft />
        </button>
        <button className='nabtn-right' onClick={gotoNextSlide}>
          <AiOutlineRight />
        </button>
      </CustomGallery>
      <DefaultLayout
        shareButton={false}
        fullscreenButton={true}
        zoomButton={true}
        ref={layoutRef}
      />
    </>
  );
};

ScenarioSlider.propTypes = {
  slider: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      name: PropTypes.string,
      text: PropTypes.string,
      moreDetails: PropTypes.arrayOf(
        PropTypes.shape({
          moreDetailsName: PropTypes.string,
          moreDetailsText: PropTypes.string,
          moreDetailsImg: PropTypes.arrayOf(
            PropTypes.shape({
              img: PropTypes.string,
            })
          ),
        })
      ),
    })
  ),
};

export default ScenarioSlider;
