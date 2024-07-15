import React, { useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import ProductModal from "./Components/Modal";
import { data } from "./Components/data";

const Orders = () => {
  const [order, setOrder] = useState(data);
  const [orderSearchTerm, setOrderSearchTerm] = useState("");

  const handleSearch = (e) => {
    setOrderSearchTerm(e.target.value);
  };
  const filterItems = () => {
    const filterItem = data.filter((item) =>
      item.searchTerm
        .toLowerCase()
        .includes(orderSearchTerm.toLocaleLowerCase())
    );
    setOrder(filterItem);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    filterItems();
  };

  const handleClick = () => {
    filterItems();
  };

  return (
    <Container className="order__main">
      <form onSubmit={onSubmit}>
        <input
          onChange={handleSearch}
          className="orderInput"
          placeholder="Поиск..."
          style={{ width: "90%" }}
          value={orderSearchTerm}
        ></input>
        <button
          style={{
            border: "none",
            backgroundColor: "green",
            color: "white",
            borderRadius: "5%",
            padding: "2.5px 5px",
          }}
          onClick={handleClick}
        >
          Искать
        </button>
      </form>
      <Row style={{ marginTop: "10px" }}>
        {order.map((item) => (
          <Col key={item.id} style={{ border: "none" }}>
            <Card style={{ width: "18rem", border: "none" }}>
              <Card.Img
                style={{ width: "18rem", height: "14rem" }}
                variant="top"
                src={item.img}
              ></Card.Img>
              {item.text}
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <ProductModal
                    imageUrl={item.img}
                    description={item.modalText}
                    price={item.itemPrice}
                  />
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Orders;
