import React from "react";
import "./App.css";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Jobs from "./Endpoints/Jobs";
import RoomGroups from "./Endpoints/RoomGroups";
import Rooms from "./Endpoints/Rooms";
import Fixtures from "./Endpoints/Fixtures";
import Loads from "./Endpoints/Loads";
import Keypads from "./Endpoints/Keypads";
import Equipment from "./Endpoints/Equipment";
import Products from "./Endpoints/Products";
import Panels from "./Endpoints/Panels";
import { Nav, Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Container fluid>
          <Row>
            <Col sm={2}>
              <Nav className="flex-column">
                <Link className="nav-link" to="/jobs">
                  JOBS
                </Link>
                <Link className="nav-link" to="/roomgroups">
                  ROOM GROUPS
                </Link>
                <Link className="nav-link" to="/rooms">
                  ROOMS
                </Link>
                <Link className="nav-link" to="/fixtures">
                  FIXTURES
                </Link>
                <Link className="nav-link" to="/loads">
                  LOADS
                </Link>
                <Link className="nav-link" to="/keypads">
                  KEYPADS
                </Link>
                <Link className="nav-link" to="/equipment">
                  EQUIPMENT
                </Link>
                <Link className="nav-link" to="/panels">
                  PANELS
                </Link>
                <Link className="nav-link" to="/products">
                  PRODUCTS
                </Link>
              </Nav>
            </Col>
            <Col sm={10} style={{ borderLeft: "1px solid #dbd0d6" }}>
              <Switch>
                <Route path="/jobs">
                  <Jobs />
                </Route>
                <Route path="/roomgroups">
                  <RoomGroups />
                </Route>
                <Route path="/rooms">
                  <Rooms />
                </Route>
                <Route path="/Fixtures">
                  <Fixtures />
                </Route>
                <Route path="/Loads">
                  <Loads />
                </Route>
                <Route path="/Keypads">
                  <Keypads />
                </Route>
                <Route path="/Equipment">
                  <Equipment />
                </Route>
                <Route path="/panels">
                  <Panels />
                </Route>
                <Route path="/products">
                  <Products />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </HashRouter>
    </div>
  );
}

export default App;
