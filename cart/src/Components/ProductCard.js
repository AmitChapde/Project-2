import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import { useSelector ,useDispatch } from "react-redux";
import { addToCart } from "../Features/cartSlice";


export default function App() {
  const items = useSelector((state) => state.allCart.items);


  const dispatch=useDispatch();

  return (
    <div className="m-2">
      <MDBContainer>
        <MDBRow className="mb-3">
          {items.map((item) => (
            <MDBCol size="md" key={item.id}>
              <MDBCard>
                <MDBCardImage src={item.img} position="top" alt="..." />
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>
                   {item.price}
                  </MDBCardText>
                  <MDBBtn onClick={()=>dispatch(addToCart(item))}>Add to Cart</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
