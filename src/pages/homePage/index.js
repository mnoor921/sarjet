import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
const Homepage = () => {
  const [cartype, setCartype] = useState("");
  const [carmodel, setCarmodel] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    let carSelect = { cartype, carmodel };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("https://zteev.com/live/public/api/getAllCars", carSelect, config)
      .then((res) => {
        setErrors({});
        alert(res.data.success);
        setSuccess(res.data.success);
      })
      .catch((err) => {
        setSuccess(false);
        setErrors(err.response.data);
      });
  };

  return (
    <div className="main-div">
      <div className="overlay">
        <Container className="main-page">
          <div className="main-section text-center p-4">
            <h2>Sarjet</h2>
            <p>Expolore world with us, we make your journey easy</p>
            <br />
            <form className="text-left" onSubmit={submitHandler}>
              <label>Select Your Vehicles</label>
              <select
                id=""
                className="form-control"
                value={cartype}
                isInvalid={errors.cartype}
                className="text-line"
                onChange={(e) => setCartype(e.target.value)}
              >
                <option selected>Select Car</option>
                <option values="Audi">Audi</option>
                <option values="BMW">BMW</option>
              </select>
              <br />
              <div>
                <label>Select Your Vehicles Model</label>
                <select
                  id=""
                  className="form-control"
                  value={carmodel}
                  isInvalid={errors.carmodel}
                  className="text-line"
                  onChange={(e) => setCarmodel(e.target.value)}
                >
                  <option selected>Select Car Model</option>
                  <option value="">Audi</option>
                  <option value="">BMW</option>
                </select>
              </div>
              <br />
              <div className="text-center">
                <button className="btn btn-1 mx-auto" type="submit">
                  Start Your Journey
                </button>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Homepage;
