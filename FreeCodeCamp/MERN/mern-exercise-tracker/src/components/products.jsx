import React from "react";
import products from "./productsData";
import { Container, Row, Col } from "reactstrap";

export default function Products() {
  let ProductList = products.map(product => (
    <div key={product.id}>
      <h4>{product.name}</h4>
      <Container>
        <Row>
          <Col>
            <h5>{product.description}</h5>
          </Col>
          <Col>
            <h6 style={{ fontWeight: "bold", color: "Red" }}>
              ${product.price}
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  ));

  return <div>{ProductList}</div>;
}
