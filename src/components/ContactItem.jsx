import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = () => {
  return (
    <Row>
      <Col lg={2}>
        <img
          width={50}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/960px-Unknown_person.jpg"
          alt=""
        />
      </Col>

      <Col lg={10}>
        <div>홍길동</div>
        <div>010123456787</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
