import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import ProductModal from "./Components/Modal";

const Orders = () => {
  return (
    <Container className="order__main">
      <input
        className="orderInput"
        placeholder="Поиск..."
        style={{ width: "100%" }}
      ></input>
      <Row style={{ marginTop: "10px" }}>
        <Col style={{ border: "none" }}>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img
              style={{ width: "18rem", height: "14rem" }}
              variant="top"
              src={
                "https://frankfurt.apollo.olxcdn.com/v1/files/9jg6g6g554o82-KZ/image;s=1200x800"
              }
            ></Card.Img>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Стул МДК 341, Массив дерева/Орех, 18С 630-1, Ролан, Ельская МФ
                (Беларусь){" "}
                <ProductModal
                  imageUrl={
                    "https://frankfurt.apollo.olxcdn.com/v1/files/9jg6g6g554o82-KZ/image;s=1200x800"
                  }
                  description={
                    "Страна	Беларусь Высота	910 Ширина	460 Глубина	400 Вес (кг)	2.7"
                  }
                  price={"27 000тг"}
                />
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ border: "none" }}>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img
              style={{ width: "18rem", height: "14rem" }}
              variant="top"
              src={"https://euromebel.kz/upload/iblock/c46/00038589_2.jpg"}
            ></Card.Img>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Диван угловой раскладной Капелла 2, Luma 05, АльфаМебель
                (Россия)
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ border: "none" }}>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img
              style={{ width: "18rem", height: "14rem" }}
              variant="top"
              src={"https://cdn3.jysk.com/getimage/wd2.large/99015"}
            ></Card.Img>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Кровать двуспальная Гармония, Крафт белый/серый, Стендмебель
                (Россия)
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col style={{ border: "none" }}>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img
              style={{ width: "18rem", height: "14rem" }}
              variant="top"
              src={
                "https://vov.furniture/3952-large_default/krovat-gorka-disnej-mebel-servis.jpg"
              }
            ></Card.Img>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Кровать-горка, коллекции Дисней, Дуб Светлый, MEBEL SERVICE
                (Украина)
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ border: "none" }}>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img
              style={{ width: "18rem", height: "14rem" }}
              variant="top"
              src={
                "https://www.alesyamebel.ru/upload/iblock/f87/f87ba050f0355e9f51681479cd55fb64.jpg"
              }
            ></Card.Img>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Кровать-горка, модульной системы Скаут, Дуб Сонома, БТС (Россия)
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ border: "none" }}>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img
              style={{ width: "18rem", height: "14rem" }}
              variant="top"
              src={
                "https://gesta.by/image/cache/catalog/1_543.960x580-640x480.jpg"
              }
            ></Card.Img>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Стул МДК-93, Массив дерева/Береза/Эмаль, 0, Ельская МФ
                (Беларусь)
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ border: "none" }}>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img
              style={{ width: "18rem", height: "14rem" }}
              variant="top"
              src={"https://euromebel.kz/upload/iblock/56c/00024762_00_02.jpg"}
            ></Card.Img>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Диван прямой раскладной Мальта 1, DominoDG 27, Мебельный Формат
                (Россия)
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ border: "none" }}>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img
              style={{ width: "18rem", height: "14rem" }}
              variant="top"
              src={"https://euromebel.kz/upload/iblock/8e2/00032918.jpg"}
            ></Card.Img>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Кровать односпальная Лайт, Крафт золотой, Горизонт (Россия)
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ border: "none" }}>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img
              style={{ width: "18rem", height: "14rem" }}
              variant="top"
              src={"https://images.satu.kz/222629754_w600_h600_222629754.jpg"}
            ></Card.Img>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Диван прямой раскладной Спиннер, GROUND 06/ GROUND 05/ GROUND
                05, АСМ Элегант (Россия)
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ border: "none" }}>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img
              style={{ width: "18rem", height: "14rem" }}
              variant="top"
              src={
                "https://mebel44.by/image/cache/catalog/anrex/scandy/dizel-800x800.jpg"
              }
            ></Card.Img>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Кровать двухъярусная, коллекции Оскар, Дуб Санремо, Анрэкс
                (Беларусь)
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ border: "none" }}>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img
              style={{ width: "18rem", height: "14rem" }}
              variant="top"
              src={"https://euromebel.kz/upload/iblock/d02/00035616_1.jpg"}
            ></Card.Img>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Стул Б-2230.1, Массив дерева/Венге, 230, Ельская МФ (Беларусь)
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ border: "none" }}>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img
              style={{ width: "18rem", height: "14rem" }}
              variant="top"
              src={"https://armada.kz/storage/images/Aug2022/BHkdFwXbSM.webp"}
            ></Card.Img>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Комплект мебели для спальни Марсель, Ясень снежный/Дуб сонома
                темный, БРВ Брест(Беларусь)
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Orders;
