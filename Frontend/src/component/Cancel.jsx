import React from "react"; 

import Swal from "sweetalert2";
 
function Cancel() { 

  
  const cancelAlert = () => {
    Swal.fire({
      icon: "cancel",
      title: "Opps........ !",
      text: "Your booking has been canceled",
      showCancelButton: true,
      cancelButtonColor: "yellow",
      cancelButtonText: '<a href="/">Go to Home</a>',
    });
  };
  cancelAlert()
  return ( 
    <> 
    </> 
  ); 
} 
 
export default Cancel; 