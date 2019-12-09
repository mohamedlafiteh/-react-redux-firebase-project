import React from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
