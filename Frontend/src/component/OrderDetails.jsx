import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

function OrderDetails() {
  const [data, setData] = useState([]);

  async function getData() {
    const response = await fetch("http://localhost:4000/api/hotel-get");
    const udata = await response.json();
    console.log(udata, "mydata");
    setData(udata);
  }

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      name: " Room Type",
      selector: (row) => row.room_type,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
    },
    {
      name: " Booking Date",
      selector: (row) => row.booking_date,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Address",
      selector: (row) => row.address,
    },
    {
      name: "Country",
      selector: (row) => row.country,
    },
    {
      name: "State",
      selector: (row) => row.state,
    },
    {
      name: "City",
      selector: (row) => row.city,
    },
    {
      name: "Pin No.",
      selector: (row) => row.pin,
    },
  ];
  return (
    <div className="container">
      <DataTable
        columns={columns}
        data={data}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="450px"
        highlightOnHover
        selectableRowsHighlight
      />
    </div>
  );
}

export default OrderDetails;
