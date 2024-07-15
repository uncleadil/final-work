import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Container } from "react-bootstrap";

export const MailComponent = () => {
  const [state, handleSubmit] = useForm("xvgpgqee");
  if (state.succeeded) {
    return <p>Текст отправлен!</p>;
  }
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <label
          style={{ textAlign: "center", fontSize: "20px" }}
          htmlFor="email"
        >
          Ваш email адрес
        </label>
        <input
          className="mail-input"
          placeholder="пример@gmail.com"
          id="email"
          type="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          style={{ height: "300px", width: "100%", resize: "none" }}
          placeholder="текст..."
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          style={{
            border: "none",
            padding: "15px",
            backgroundColor: "green",
            color: "white",
          }}
          type="submit"
          disabled={state.submitting}
        >
          Отправить
        </button>
      </form>
    </Container>
  );
};
