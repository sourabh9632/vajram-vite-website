import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "../App.css";
 
import "@fancyapps/ui/dist/fancybox/fancybox.css";
 
const New = () => {
    const [activeTab, setActiveTab] = useState('pills-home');
    const tabss = [
        { id: 'pills-home', label: 'Home' },
        { id: 'pills-profile', label: 'Profile' },
        { id: 'pills-contact', label: 'Contact' },
        { id: 'pills-disabled', label: 'Disabled' }
      ];
    
      const handleTabClick = (tabId) => {
        setActiveTab(tabId);
      };
    
      const owlOptions = {
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
      };
    
      // Assume these are imported or defined elsewhere
      const master1 = "../assets/pictures/Master-Plan.webp";
      const master2 = "../assets/pictures/Master-Unit-Plan.webp";
      const typica1 = "../assets/pictures/typical-plan-2.webp";
      const typica2 = "../assets/pictures/typical-plan-1.webp";
    
      const sectionStyle = {
        // Add your section styles here
      };
    




  return (
    <div>

<section id="plan" style={sectionStyle} className="mt-5">
      <p className="plan_text">Plans</p>
      <div className="plan-buttons">
        <ul className="nav nav-pills" role="tablist">
          {tabss.map((tab) => (
            <li key={tab.id} className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
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
          className={`tab-pane fade ${activeTab === 'pills-home' ? 'show active' : ''}`}
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabIndex="0"
        >
          <OwlCarousel className="owl-theme" {...owlOptions}>
            <div className="item">
              <img src={master1} alt="Random 1" className="img-fluid" />
            </div>
            <div className="item">
              <img src={master2} alt="Random 1" className="img-fluid" />
            </div>
          </OwlCarousel>
        </div>
        <div
          className={`tab-pane fade ${activeTab === 'pills-profile' ? 'show active' : ''}`}
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabIndex="0"
        >
          <OwlCarousel className="owl-theme" {...owlOptions}>
            <div className="item">
              <img src={typica1} alt="Random 2" className="w-50" />
            </div>
            <div className="item">
              <img src={typica2} alt="Random 2" className="w-50" />
            </div>
          </OwlCarousel>
        </div>
        <div
          className={`tab-pane fade ${activeTab === 'pills-contact' ? 'show active' : ''}`}
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
          tabIndex="0"
        >
          <OwlCarousel className="owl-theme" {...owlOptions}>
            <div className="item">
              <img src={typica2} alt="Random 3" className="w-50" />
            </div>
          </OwlCarousel>
        </div>
        <div
          className={`tab-pane fade ${activeTab === 'pills-disabled' ? 'show active' : ''}`}
          id="pills-disabled"
          role="tabpanel"
          aria-labelledby="pills-disabled-tab"
          tabIndex="0"
        >
          <OwlCarousel className="owl-theme" {...owlOptions}>
            <div className="item">
              <img src={typica2} alt="Random 4" className="w-50" />
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
 






    </div>
  )
}

export default New