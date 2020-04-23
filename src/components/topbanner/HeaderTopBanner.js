import React from "react";
import "./HeaderTopBanner.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/fontawesome-free-solid';

const contents = {
  text: 'Call Mo. - Fr. 8:00 - 18:00',
  phoneNo: '+00 1234 - 5678910', 
};

const HeaderTopBanner = () => {

    return (
      <div className="svk-banner-top hidden-xs">
          <div className="container">
              <div className="row">
                  <div className="col-xl-12">
                      <div className="text-wrapper">
                        <p>
                        {contents.text} <FontAwesomeIcon icon={faPhone} size="lg"/> {contents.phoneNo} 
                        </p>
                       </div>
                  </div>
              </div>
          </div>
      </div>
    );
  };

export default HeaderTopBanner;
