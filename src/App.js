import React from "react";
import logo from "./logo.svg";
import "./App.css";
import pepe from "./bigpepe.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Jobs from "./Endpoints/Jobs";

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
      <Router>
        <AppGrid>
          <Sidebar>
            <Link className="nav-link" to="/jobs">
              Jobs
            </Link>
            <Link className="nav-link" to="/rooms">
              Rooms
            </Link>
            <Link className="nav-link" to="/fixtures">
              Fixtures
            </Link>
            <Link className="nav-link" to="/loads">
              Loads
            </Link>
            <Link className="nav-link" to="/keypads">
              Keypads
            </Link>
            <Link className="nav-link" to="/equipment">
              Equipment
            </Link>
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </Sidebar>
          <Content>
            <Switch>
              <Route path="/jobs">
                <Jobs />
              </Route>
            </Switch>
          </Content>
        </AppGrid>
      </Router>

      {/* <header className="App-header">
        <img src={pepe} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Damn grl u fine
        </a>
      </header> */}
    </div>
  );
}

export default App;
