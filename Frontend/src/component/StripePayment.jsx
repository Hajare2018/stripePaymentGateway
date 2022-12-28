import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { loadStripe } from "@stripe/stripe-js";
// import { useNavigate } from "react-router-dom";

function StripePayment() {

  // const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "Delux Room",
    price: 1000,
    productOwner: "Ritesh",
    description:
      "Hotel room booking",
    quantity: 1,
  });

  const makePayment = async () => {
    const stripe = await loadStripe("pk_test_51MHgsxSH9BVqRXMDBCmtg9qQuhcUQk4Z8CpU7AZUwOUUxLvCxeiE8VWsLW9cIYVU6gYHx6sZ4oST52MqTf5soBCO00GjroLQk0");
    const body = {
      productName: product.name,
      amount: product.price,
      quantity: product.quantity,
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
      
    }
    else{
      console.log("no")
    }
    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src="https://images.pexels.com/photos/12428359/pexels-photo-12428359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <div value={product} onChange={(e) => setProduct(e.target.value)}>
          <Button variant="primary" onClick={makePayment}>
            Book Now
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default StripePayment;
