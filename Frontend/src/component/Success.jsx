import React from "react";

import Swal from "sweetalert2";
function Success() {

  const successAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Thank You !",
      text: "Your booking has been confirmed successfully",
      showCancelButton: true,
      confirmButtonColor: '<a href="/view">Order Details</a>',
      cancelButtonColor: "yellow",
      confirmButtonColor: "#3085d6",
      confirmButtonText: '<a href="/order">Track Order</a>',
      cancelButtonText: '<a href="/">Go to Home</a>',
    });
  };
  successAlert()
  
  return (
    <>
    </>
  );
}

export default Success;
