import React from "react";
import "../css/Category.css";
import { Row, Col, Container, Nav, Navbar, Button } from "react-bootstrap";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Plan1() {
  const handleReq = (e) => {
    e.preventDefault();
    toast.success("Plan Activated!");
  };
  return (
    <>
      <Container>
        <Row>
          <Col md={8}>
            <div className="background"></div>
            <div className="title container shadow-lg">
              <h5>50-30-20 Plan</h5>
            </div>

            <div className="content ">
              <section
                id="overview"
                className="overview shadow-lg"
                style={{
                  textAlign: "justify",
                  padding: "20px",
                  borderRadius: "8px",
                }}
              >
                <h5 style={{ color: "GrayText", marginTop: "5px" }}>
                  Overview
                </h5>
                <p>
                  50-20-30 Rule is Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Illum blanditiis delectus, fuga soluta
                  dignissimos quas perspiciatis facere vitae dolores, tempora
                  inventore amet qui repellat neque nihil rem? Ipsam blanditiis
                  itaque sapiente quis excepturi sequi dicta, molestias atque
                  accusantium non dolorem ut asperiores harum, voluptatem cum
                  recusandae! Esse ut, nulla repudiandae nemo dicta veniam earum
                  in a? Repellat dolores delectus, vero unde nobis corporis
                  nihil magni ea, qui dignissimos maxime, incidunt ut libero.
                  Quasi alias, doloremque quam vero ipsam eius sit accusamus
                  perferendis corrupti facere sint repellendus dicta delectus
                  necessitatibus labore itaque error, cupiditate possimus. Saepe
                  tempora iusto reprehenderit temporibus voluptatibus!
                </p>
              </section>
            </div>
          </Col>
          <Col>
            <div className="col-card shadow-lg">
              <h5>Activate</h5>
              <p
                style={{
                  color: "GrayText",
                  fontSize: "small",
                  textAlign: "justify",
                }}
              >
                Pay securely with major Credit and Debit cards, online Wallets
                and UPI
              </p>
              <Button variant="success" onClick={handleReq}>
                Activate this plan
              </Button>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
              />
              <p
                style={{
                  color: "GrayText",
                  fontSize: "small",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                By activating this plan, you agree to our T&C
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Plan1;
