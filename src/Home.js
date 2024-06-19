import { Col, Container, Row, Card } from "react-bootstrap";
import Slider from "./Components/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Популярные категории
      </h1>
      <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Row>
          <Col style={{ border: "none" }}>
            <Card style={{ width: "18rem", border: "none" }}>
              <Card.Img
                style={{ width: "18rem", height: "18rem" }}
                variant="top"
                src={
                  "https://pinskdrev.kz/web/files/imagick_cache/w460h460t2/web/catalogfiles/catalog/categories/stulya.jpg"
                }
              ></Card.Img>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>Стулья</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col style={{ border: "none" }}>
            <Card style={{ width: "18rem", border: "none" }}>
              <Card.Img
                style={{ width: "18rem", height: "18rem" }}
                variant="top"
                src={
                  "https://pinskdrev.kz/web/files/imagick_cache/w460h460t2/web/catalogfiles/catalog/categories/nabor-gostin.jpg"
                }
              ></Card.Img>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Мебель для гостиной
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col style={{ border: "none" }}>
            <Card style={{ width: "18rem", border: "none" }}>
              <Card.Img
                style={{ width: "18rem", height: "18rem" }}
                variant="top"
                src={
                  "https://pinskdrev.kz/web/files/imagick_cache/w460h460t2/web/catalogfiles/catalog/categories/nabor-spalen.jpg"
                }
              ></Card.Img>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Мебель для спальни
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col style={{ border: "none" }}>
            <Card style={{ width: "18rem", border: "none" }}>
              <Card.Img
                style={{ width: "18rem", height: "18rem" }}
                variant="top"
                src={
                  "https://pinskdrev.kz/web/files/imagick_cache/w460h460t2/web/catalogfiles/catalog/categories/nabor-detskih.jpg"
                }
              ></Card.Img>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Мебель для детской
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Home;
