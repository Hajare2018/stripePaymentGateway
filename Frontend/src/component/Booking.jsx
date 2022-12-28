import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

// country state city integrate //
import { Country, State, City } from "country-state-city";
import { TextField, MenuItem } from "@mui/material";

// calander using react calander //
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// strip payment //

import { loadStripe } from "@stripe/stripe-js";

// card Element //

function Booking() {
  const [room_type, setRoom_type] = useState("");
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [countrydata, setCountry] = useState("");
  const [statedata, setState] = useState("");
  const [citydata, setCity] = useState("");
  const [pin, setPin] = useState("");

  const [btnstatus, setBtnStatus] = useState(0);
  const [btnstatusb, setBtnStatusb] = useState(0);

  const [date1, setdate] = useState(new Date());
  const onChange = (date) => {
    setdate(date);
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  async function postData() {
    const udata = {
      room_type: product.name,
      amount:product.price,
      booking_date: date1,
      email,
      address,
      country:countrydata,
      state:statedata,
      city:citydata,
      pin,
    };

    let reqData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(udata),
    };

    await fetch("http://localhost:4000/api/hotel-post", reqData).then(
      (response) => console.log(`Data Submitted ${response.status}`)
    );
  }

  // stripe api  //

  const [product, setProduct] = useState({
    name: "Delux Room",
    price: 1000,
    productOwner: "Ritesh",
    description: "Hotel room booking",
    quantity: 1,
  });

  const [productone, setProductone] = useState({
    name: "Luxary Room",
    price: 2000,
    productOwner: "Ritesh",
    description: "Hotel room booking",
    quantity: 1,
  });

  // (async () => {
  //   const response = await fetch('http://localhost:4000/api/secret');
  //   const {client_secret: clientSecret} = await response.json();
  //   // Call stripe.confirmCardPayment() with the client secret.
  // })();

  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51MHgsxSH9BVqRXMDBCmtg9qQuhcUQk4Z8CpU7AZUwOUUxLvCxeiE8VWsLW9cIYVU6gYHx6sZ4oST52MqTf5soBCO00GjroLQk0"
    );
    const body = {
      productName: product.name,
      amount: product.price,
      quantity: product.quantity,
      description:product.description,
      productOwner:product.productOwner
    };
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(
      "http://localhost:4000/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();
    console.log("session", session);

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (session.status === 200) {
      window.location.href = `${session.paymentUrl}`;
    } else {
      console.log("no");
    }
    if (result.error) {
      console.log(result.error);
    }
  };

  // const resData = async (req, res) => {
  //   console.log(" Request recieved");

  //   const response = await fetch("https://api.stripe.com/checkout").then(
  //     (res) => res.statusText
  //   );

  //   console.log(response);
  //   res.send({ status: response });
  // };

  return (
    <div className="container">
      <div className="container">
        <Navbar bg="light">
          <Container className="text-center">
            <Navbar.Brand href="#home">
              <h1> Hotel Booking </h1>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>

      <h4>Room Type</h4>

      <div className="container px-4 ">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3 ">
              <Card
                style={{ width: "18rem" }}
                className="shadow-lg p-3 mb-5 bg-body rounded"
              >
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>

                  <Card.Link href="#">
                    {btnstatus === 0 ? (
                      <Button
                        onClick={() => setBtnStatus(1)}
                        variant="outline-primary"
                        value={room_type}
                      >
                        Select
                      </Button>
                    ) : (
                      <div
                        value={room_type}
                        onClick={(e) => setRoom_type(e.target.value)}
                      >
                        <Button
                          onClick={() => setBtnStatus(0)}
                          variant="outline-primary"
                        >
                          Selected
                        </Button>
                      </div>
                    )}{" "}
                  </Card.Link>
                  <div
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                  ></div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col">
            <div className="p-3 ">
              <Card
                style={{ width: "18rem" }}
                className="shadow-lg p-3 mb-5 bg-body rounded"
              >
                <Card.Body>
                  <Card.Title>{productone.name}</Card.Title>
                  <Card.Text>$ {productone.price}</Card.Text>
                  <Card.Link href="#">
                    {" "}
                    {btnstatusb === 0 ? (
                      <Button
                        onClick={() => setBtnStatusb(1)}
                        variant="outline-primary"
                      >
                        Select
                      </Button>
                    ) : (
                      <div
                        value={room_type}
                        onClick={(e) => setRoom_type(e.target.value)}
                      >
                        <Button
                          onClick={() => setBtnStatusb(0)}
                          variant="outline-primary"
                        >
                          Selected
                        </Button>
                      </div>
                    )}{" "}
                  </Card.Link>
                  <div
                    value={productone}
                    onChange={(e) => setProductone(e.target.value)}
                  ></div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <br />
        <hr />
        <br />
        <h4>Booking Date</h4>
        <br />
        <div>
          <Calendar onChange={onChange} value={date1} />
          {/* {console.log(date)} */}
        </div>
        <br />
        <hr />
        <br />
        <h4>Billing Address</h4>
        <br />
        <div className="form" bg="light">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <TextField
                required
                fullWidth
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <TextField
                required
                fullWidth
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                label="Address"
                name="address"
                autoComplete="address"
              />
            </Form.Group>

            <div className="row">
              <div className="col-6">
                <Form.Group className="mb-3" controlId="formBasicCountry">
                  <TextField
                    required
                    fullWidth
                    id="dropdown"
                    select
                    label="Country"
                    value={countrydata}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    {Country.getAllCountries().map((option, key) => (
                      <MenuItem key={option.countryCode} value={option.isoCode}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Group className="mb-3" controlId="formBasicState">
                  <TextField
                    required
                    fullWidth
                    id="dropdown"
                    select
                    label="State"
                    value={statedata}
                    onChange={(e) => setState(e.target.value)}
                  >
                    {State.getStatesOfCountry(countrydata).map(
                      (option, key) => (
                        <MenuItem key={option.value} value={option.isoCode}>
                          {option.name}
                        </MenuItem>
                      )
                    )}
                  </TextField>
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <Form.Group className="mb-3" controlId="formBasicCity">
                  <TextField
                    required
                    fullWidth
                    id="dropdown"
                    select
                    label="City"
                    value={citydata}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    {City.getCitiesOfState(countrydata, statedata).map(
                      (option, key) => (
                        <MenuItem key={option.value} value={option.name}>
                          {option.name}
                        </MenuItem>
                      )
                    )}
                  </TextField>
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Group className="mb-3" controlId="formBasicZip">
                  <TextField
                    required
                    fullWidth
                    type="text"
                    id="pin"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    label="Pin"
                    name="pin"
                    autoComplete="pin"
                  />
                </Form.Group>
              </div>
            </div>
          </Form>
        </div>
      </div>
      <div>
        <Button
          variant="primary"
          onClick={() => {
            postData();   
            makePayment();
          }}
          style={{ float: "right" }}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}

export default Booking;
