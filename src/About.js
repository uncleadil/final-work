import { Container } from "react-bootstrap";
import { MailComponent } from "./Components/MailComponent";
import video from "./video.mp4";

const About = () => {
  return (
    <div>
      <div style={{ backgroundColor: "green", width: "100%" }}>
        <h1 style={{ color: "white", marginLeft: "15%" }}>
          Доставка по всему Казахстану!
        </h1>
        <h3 style={{ color: "white", marginLeft: "15%" }}>
          По поводу мебели обращаться на почту
        </h3>
      </div>
      <Container style={{ height: "100vh" }}>
        <video
          style={{
            objectFit: "cover",
            position: "fixed",
            top: "0",
            left: "0",
            height: "100vh",
            width: "100vw",
            zIndex: "-1",
          }}
          autoPlay
          muted
          loop
        >
          <source src={video} type="video/mp4"></source>
        </video>
        <div className="mail-component-wrapper">
          <MailComponent />
        </div>
      </Container>
    </div>
  );
};
export default About;
