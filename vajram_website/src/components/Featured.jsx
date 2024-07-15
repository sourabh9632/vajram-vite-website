import React from "react";
import { useState, useRef } from "react";

import "../App.css";

import pic1 from "../assets/pictures/pic1.webp";
import pic2 from "../assets/pictures/pic2.webp";
import pic3 from "../assets/pictures/pic3.webp";
import icon1 from "../assets/icons/icon-1.jpeg";
import icon2 from "../assets/icons/icon-2.jpeg";
import icon3 from "../assets/icons/icon-3.jpeg";
import icon4 from "../assets/icons/icon-4.jpeg";

import icon_1 from "../assets/icons/icon1.svg";
import icon_2 from "../assets/icons/icon2.svg";
import icon_3 from "../assets/icons/icon3.svg";
import icon_4 from "../assets/icons/icon4.svg";

import icon5 from "../assets/icons/icon5.svg";
import icon6 from "../assets/icons/icon6.svg";
import icon7 from "../assets/icons/icon7.svg";
import icon8 from "../assets/icons/icon8.svg";
import master1 from "../assets/pictures/Master-Plan.webp";
import master2 from "../assets/pictures/Master-Unit-Plan.webp";
import typica2 from "../assets/pictures/typical-plan-2.webp";
import typica1 from "../assets/pictures/typical-plan-1.webp";
import gal1 from "../assets/gallery/gal1.webp";
import gal2 from "../assets/gallery/gal2.webp";
import gal3 from "../assets/gallery/gal3.webp";
import gal4 from "../assets/gallery/gal4.webp";
import gal5 from "../assets/gallery/gal5.webp";
import gal6 from "../assets/gallery/gal6.webp";
import nt2 from "../assets/icons/nt-2 logo-01.png";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useEffect } from "react";
const Featured = () => {
  useEffect(() => {
    NativeFancybox.bind("[data-fancybox]", {});
    return () => {
      NativeFancybox.destroy();
    };
  }, []);

  const sectionStyle = {
    height: "auto",
  };

  const barStyle = {
    backgroundColor: "black",
    height: "30px",
  };

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const tabBarRef = useRef(null);

  const tabs = [
    { name: "About", href: "#about", className: "text-white" },
    { name: "Plans", href: "#plan" },
    { name: "Amenities", href: "#aminities" },
    { name: "Specifications", href: "#specification" },
    { name: "Location", href: "#location" },
    { name: "Gallery", href: "#gallery" },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - tabBarRef.current.offsetLeft);
    setScrollLeft(tabBarRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - tabBarRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    tabBarRef.current.scrollLeft = scrollLeft - walk;
  };

  const [activeTab, setActiveTab] = useState("pills-home");

  const tabss = [
    { id: "pills-home", label: "All" },
    { id: "pills-profile", label: "Master Plan" },
    { id: "pills-contact", label: "2 BHK" },
    // { id: 'pills-disabled', label: '3 BHK' }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const icons = [
    { src: icon_1, text: "MULTISPORT COURT" },
    { src: icon_2, text: " DOUTDOOR CHESS" },
    { src: icon_3, text: "GYM & AEROBICS" },
    { src: icon_4, text: "IINDOOR GAMES " },
    { src: icon5, text: "SKATING RINK " },
    { src: icon6, text: "CRICKET NET " },
    { src: icon7, text: "BASKETBALL HOOP " },
    { src: icon8, text: "BBQ AREA" },
    { src: icon8, text: "BBQ AREA" },
    { src: icon8, text: "BBQ AREA" },
    { src: icon8, text: "BBQ AREA" },
    { src: icon8, text: "BBQ AREA" },
    { src: icon8, text: "BBQ AREA" },
    { src: icon8, text: "BBQ AREA" },
    { src: icon8, text: "BBQ AREA" },
    { src: icon8, text: "BBQ AREA" },
  ];

  const images = [
    { src: gal1, alt: "Image 1" },
    { src: gal2, alt: "Image 2" },
    { src: gal3, alt: "Image 3" },
    { src: gal4, alt: "Image 4" },
    { src: gal5, alt: "Image 5" },
    { src: gal6, alt: "Image 6" },
    { src: gal6, alt: "Image 6" },
    { src: gal6, alt: "Image 6" },
    { src: gal6, alt: "Image 6" },
    { src: gal6, alt: "Image 6" },
  ];
  return (
    <>
      <div className="container">
        <section id="section1">
          <div class="fixed-top">
            <div class="" style={barStyle}></div>

            <div class="fixed_block">
              {/* <div class="button_block">
                <button class="btn">Upcoming Projects</button>
              </div> */}
              <div class="icon_block">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <div class="">
                <i class="fa-solid fa-bars"></i>
              </div>
            </div>
          </div>
        </section>

        <section id="section2">
          <div className="row">
            <div className="col-lg-8 order-lg-2 order-2">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={pic2} class="img-fluid" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={pic1} class="img-fluid" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={pic3} class="img-fluid" alt="..." />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 order-lg-1 order-1">
              <div className="form-container flex-grow-1 flex-shrink-0 flex-basis-50 ">
                <div className="property-card">
                  <h2 className="property-title"><img src={nt2} className="img-fluid" /></h2>
                  <hr />
                  <p className="property-address">
                    Vajram Newtown Phase II, Thanisandra Main Road, Bengaluru.
                  </p>
                  <hr />
                  <p className="property-rera">
                    <strong>RERA No:</strong>{" "}
                    PRM/KA/RERA/1251/309/PR/060324/006684
                  </p>
                  <hr />
                  <div className="property-price">
                    <h3 className="text-center">₹1.06 CR* Onwards</h3>
                  </div>

                  <div className="property-details">
                    <div className="detail-item">
                      <img
                        src={icon1}
                        alt="Project Type"
                        className="detail-icon"
                      />
                      <div className="detail-text">
                        <span className="detail-label">PROJECT TYPE</span>
                        <span className="detail-value">Apartments</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <img src={icon2} alt="Bedrooms" className="detail-icon" />
                      <div className="detail-text">
                        <span className="detail-label">BEDROOMS</span>
                        <span className="detail-value">2,3BHK</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <img
                        src={icon3}
                        alt="Development Size"
                        className="detail-icon"
                      />
                      <div className="detail-text">
                        <span className="detail-label">DEVELOPMENT SIZE</span>
                        <span className="detail-value">2.42 Acres</span>
                      </div>
                    </div>
                    <div className="detail-item">
                      <img
                        src={icon4}
                        alt="Total Units"
                        className="detail-icon"
                      />
                      <div className="detail-text">
                        <span className="detail-label">TOTAL UNITS</span>
                        <span className="detail-value">250 Units</span>
                      </div>
                    </div>
                  </div>
               
                  {/* <button className="download-btn">Download Brochure</button> */}

                                {/* <div className="action-buttons">
                        <button className="action-btn phone-btn">
                        <i className="fas fa-phone"></i>
                        </button>
                        <button className="action-btn location-btn">
                        <i className="fas fa-map-marker-alt"></i>
                        </button>
                    </div> */}

                  <div className="d-flex align-items-center">
                        <button type="button" className="btn btn-custom">Enquire Now</button>
                        <a href="tel:+9199999999" className="icon-btn">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: '#8b3828' }}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                          </svg>
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer" className="icon-btn">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: '#8b3828' }}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M10 14l11 -11"></path>
                            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                          </svg>
                        </a>
                      </div>

















                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="fixed-below">
          <div
            className="btn_grp"
            ref={tabBarRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            {tabs.map((tab, index) => (
              <button key={index} className="btn">
                <a href={tab.href} className={tab.className}>
                  {tab.name}
                </a>
              </button>
            ))}
          </div>
        </div>

        <section id="about" style={sectionStyle} className=" mt-5">
          <p class="plan_text">VAJRAM NEWTOWN - II</p>
          <hr class="underline"/>

          <p className="text_p mt-4">
            Vajram Newtown, designed for the Millennial homebuyers in spirit, is
            in the heart of Bengaluru and just 4km away from Manyata Tech Park
            on Thanisandra Main Road, North Bangalore. Spread across 3 acres,
            the project comprises of 272 units consisting of 2 towers with 18
            floors each and 3 levels of parking.
          </p>
          <p className="text_p">
            The triple height podium landscape and amenities provide grandeur to
            the building at the entrance level. The units have great spatial
            quality and are designed in a manner that opens on 3 sides providing
            excellent ventilation.{" "}
          </p>
          <p className="text_p">
            The triple height podium landscape and amenities provide grandeur to
            the building at the entrance level. The units have great spatial
            quality and are designed in a manner that opens on 3 sides providing
            excellent ventilation.{" "}
          </p>
        </section>

        <section id="plan" style={sectionStyle} className="mt-5">
          <p class="plan_text">Plans</p>
          <hr class="underline"/>
          {/* <div class="btn_grp">
            <button class="btn">
              <a href="#about" className="text-white">
                All
              </a>
            </button>
            <button class="btn">
              <a href="">Master Plan</a>
            </button>
            <button class="btn">
              <a href="">4 BHK</a>
            </button>
            <button class="btn">
              <a href=""> 5 BHK</a>
            </button>
          </div> */}

          <div className="plan-buttons mt-4">
            <ul className="nav nav-pills" role="tablist">
              {tabss.map((tab) => (
                <li key={tab.id} className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === tab.id ? "active" : ""
                    }`}
                    id={`${tab.id}-tab`}
                    data-bs-toggle="pill"
                    data-bs-target={`#${tab.id}`}
                    type="button"
                    role="tab"
                    aria-controls={tab.id}
                    aria-selected={activeTab === tab.id}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabIndex="0"
            >
              <a href={master1} data-fancybox="gallery">
                <img src={master1} alt="Random 1" className="img-fluid" />
              </a>
              {/* <a href={master2} data-fancybox="gallery">
                <img src={master2} alt="Random 1" className="img-fluid" />
              </a> */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabIndex="0"
            >
              <a href={typica1} data-fancybox="gallery">
                <img src={typica1} alt="Random 2" className="w-50" />
              </a>
              <a href={typica2} data-fancybox="gallery">
                <img src={typica2} alt="Random 2" className="w-50" />
              </a>
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
              tabIndex="0"
            >
              <a href={typica2} data-fancybox="gallery" className="w-50">
                <img src={typica2} alt="Random 3" className="w-50" />
              </a>
            </div>
            <div
              className="tab-pane fade"
              id="pills-disabled"
              role="tabpanel"
              aria-labelledby="pills-disabled-tab"
              tabIndex="0"
            >
              <a href={typica2} data-fancybox="gallery" className="w-50">
                <img src={typica2} alt="Random 4" className="w-50" />
              </a>
            </div>
          </div>
        </section>
        <section id="aminities" style={sectionStyle} className="mt-5">
          <p class="plan_text">Amenities</p>
          <hr class="underline"/>

          <div className="mt-4">
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
              {icons.map((icon, index) => (
                <div className="col-lg-3" key={index}>
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <div className="icon-container">
                      <img
                        src={icon.src}
                        alt={`icon-${index + 1}`}
                        className="img-fluid icon-image"
                      />
                    </div>
                    <p className="mt-2 amine-fonts">{icon.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="specification" style={sectionStyle} className=" mt-5">
          <p class="plan_text">SPECIFICATION</p>
          <hr class="underline"/>

          <div class="accordion accordion-flush mt-4" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                 <p class="text_p" >Structure</p>
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                <p class="text_p" >Two Basements + Ground Floor + 17 Upper Floors Plans,
                  complance to
                  seismic zone II.

                  Walls – RCC / Blockwork
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  <p class="text_p" > Foyer / Living / 
                    Dining / Bedrooms
                    </p>
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                <p class="text_p" > Superior quality 600 X 600 double charge vitrified tiles by leading brands.
                  Premium Emulsion paint finish for walls.</p>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  <p class="text_p" > Balcony & 
                      Utility Area
                      </p>
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body"> <p class="text_p" >Superior quality 300 X 300 anti-skid ceramic tiles for balcony & utility areas.

                  MS handrail with paint finish as per design in all
                  balconies.

                  Utility with parapet wall and uPVC window as per design.</p>
                  </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  <p class="text_p" > Toilets
                      </p>
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body"> <p class="text_p" >Superior quality 300 X 450 / 300 X 600 ceramic tile wall dadoing up to false ceiling. 

                    Superior quality 300 X 300 anti-skid ceramic flooring.

                    False ceiling with grid panels.

                    Granite counter for master bedroom wash basin. 
                    </p>
                  </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  <p class="text_p" >Common Area

                      </p>
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body"> <p class="text_p" >Flooring – Granite / Vitrified
 
                  Premium emusion
                  paint finish.
                  
                  MS Handrail as per design.
  
                    </p>
                  </div>
              </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                >
                  <p class="text_p" >Doors & Windows

                      </p>
                </button>
              </h2>
              <div
                id="flush-collapseSix"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body"> <p class="text_p" >Main Door – Engineered wood frame with veneer finish shutter with
                architrave.

                Internal Door – Engineered wood frame with laminate finish shutter with
                architrave.

                Windows – 2.5 track UPVC sliding windows. Provision is for Mosquito mesh shutter.

                Superior quality door hardware accessories. 

                Balcony – 2.5 track UPVC sliding windows. Provision is for Mosquito mesh shutter. 

                    </p>
                  </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSeven"
                  aria-expanded="false"
                  aria-controls="flush-collapseSeven"
                >
                  <p class="text_p" >Kitchen

                      </p>
                </button>
              </h2>
              <div
                id="flush-collapseSeven"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body"> <p class="text_p" >Superior quality 600 X 600 double charge vitrified tiles Flooring by leading brands.

                  Provision for chimney exhaust in kitchen

                  Reticulated Gas provision
                    </p>
                  </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseEight"
                  aria-expanded="false"
                  aria-controls="flush-collapseEight"
                >
                  <p class="text_p" >Plumbing & Sanitary

                      </p>
                </button>
              </h2>
              <div
                id="flush-collapseEight"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body"> <p class="text_p" >
                    CP Fittings and sanitary wares from reputed brands.

                    Water supply & drainage pipes from reputed brands.

                    </p>
                  </div>
              </div>
            </div>

              
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseNine"
                  aria-expanded="false"
                  aria-controls="flush-collapseNine"
                >
                  <p class="text_p" >Electricals

                      </p>
                </button>
              </h2>
              <div
                id="flush-collapseNine"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body"> <p class="text_p" >
                BESCOM power supply – 2 BHK 4 KW & 3 BHK 5 KW

                Generator power backup – 1 KW for each apartment. 

                100 % Power backup for common facilities.

                Superior quality modular switches from reputed brands.

                Television points in living and bedrooms.

                Telephone points in living and master bedroom.

                Intercom facility from security cabin to individual apartment.

                Provision for Split AC in living and bedrooms.


                    </p>
                  </div>
              </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTen"
                  aria-expanded="false"
                  aria-controls="flush-collapseTen"
                >
                  <p class="text_p" >Lifts

                      </p>
                </button>
              </h2>
              <div
                id="flush-collapseTen"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body"> <p class="text_p" >
               
                  2 – Passenger lifts for each tower.

                  1 – Service lift for each tower.



                    </p>
                  </div>
              </div>
            </div>










          </div>
        </section>

        <section id="location" style={sectionStyle} className="mt-5">
          <p class="plan_text">LOCATION</p>
          <hr class="underline"/>
          <div className="row">
            <div className="col-lg-4 mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15545.257604688664!2d77.6351274!3d13.0792499!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19d617574083%3A0x3139341211a01144!2sMillennial%20Homes%202.0!5e0!3m2!1sen!2sin!4v1710216602026!5m2!1sen!2sin"
                width="100%"
                height="120%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
              />
            </div>
          </div>
        </section>

        <section id="gallery" style={sectionStyle} className="mt-5">
          <p class="plan_text">Gallery</p>
          <hr class="underline"/>
          <div className="image-grid mt-4">
            {images.map((image, index) => (
              <a
                key={index}
                href={image.src}
                data-fancybox="gallery"
                className={`image-item ${index === images.length - 1 ? "last-image" : ""}`}
              >
                <img src={image.src} alt={image.alt} />
                {index === images.length - 1 && (
                  <div className="overlay">4+</div>
                )}
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Featured;
