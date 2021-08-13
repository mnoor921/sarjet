import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { FaLongArrowAltLeft, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { BsArrowRepeat } from "react-icons/bs";
import { RiMapPinAddFill } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";

const RoutesSarjet = () => {
  return (
    <div>
      <div className="main-div">
        <div className="overlay">
          <Container className="main-page">
            <div className="main-section text-center p-4">
              <div className="main-map-1 p-4 rounded">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27180.622306856763!2d72.75977280000001!3d31.618026999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39223480bf818819%3A0x94a6f0a0dc106e52!2sRamzan%20Sugar%20Mills!5e0!3m2!1sen!2suk!4v1628451484075!5m2!1sen!2suk"
                  style={{ border: 0 }}
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="map-button">
                <Link to="/main-map" className="btn">
                  <FaLongArrowAltLeft />
                  <br />
                  <span>Back</span>
                </Link>
                <button className="btn btn-2">
                  <IoIosSend />
                </button>
                <button className="btn ">
                  <FaMapMarkerAlt /> <br />
                  <span>Both</span>
                </button>
                <button className="btn">
                  <FaSearch /> <br />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default RoutesSarjet;
