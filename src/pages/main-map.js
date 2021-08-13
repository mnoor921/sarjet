import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { FaLongArrowAltLeft, FaMapMarkerAlt } from "react-icons/fa";
import { BsArrowRepeat } from "react-icons/bs";
import { RiMapPinAddFill } from "react-icons/ri";

const MainMap = () => {
  return (
    <div>
      <div className="main-div">
        <div className="overlay">
          <Container className="main-page">
            <div className="main-section text-center p-4">
              <div className="main-map p-4 rounded">
                  
                <GooglePlacesAutocomplete
                  //   ref="textinput"
                  apiKey="******************8"
                  placeholder="Search"
                  minLength={2}
                  autoFocus={true}
                  //   returnKeyType={"search"}
                  //   listViewDisplayed="auto"
                  debounce={200}
                />
                <br />
                <GooglePlacesAutocomplete
                  //   ref="textinput"
                  apiKey="******************8"
                  placeholder="Search"
                  minLength={2}
                  autoFocus={true}
                  //   returnKeyType={"search"}
                  //   listViewDisplayed="auto"
                  debounce={200}
                />
              </div>
              <div className="map-button">
                <button className="btn">
                  <FaLongArrowAltLeft />
                  <br />
                  <span>Back</span>
                </button>
                <button className="btn">
                  <BsArrowRepeat /> <br /> <span>Refresh</span>
                </button>
                <button className="btn btn-2">
                  <FaMapMarkerAlt />
                </button>
                <button className="btn">
                  <RiMapPinAddFill /> <br />
                  <span>add</span>
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default MainMap;
