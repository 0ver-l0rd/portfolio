import React from "react";
import logo from "./logo.svg";
import "./App.css";
import pepe from "./bigpepe.png";
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

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  width: 100%;
  height: 100%;
`;

const Sidebar = styled.div`
  border-right: 1px solid #fafaf9;
  padding: 20px;
  height: 100%;
`;

const Content = styled.div`
  padding: 40px;
`;

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <AppGrid>
          <Sidebar>
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
          </Sidebar>
          <Content>
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
          </Content>
        </AppGrid>
      </HashRouter>
    </div>
  );
}

export default App;
