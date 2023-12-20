import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

const OrderPlacedPage = () => {
  return (
    <>
      <MDBContainer
        className="d-flex align-items-center justify-content-center text-center"
        style={{ height: "100vh" }}
      >
        <h1 className="font-weight-bold text-black">Order is placed</h1>
      </MDBContainer>
    </>
  );
};

export default OrderPlacedPage;
