import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { useState } from "react";

function App() {

  const [isMinimised, setIsMinimised] = useState(false)

  return (
    <div className="App">
      <div className="main-container">
        <Header setIsMinimised={setIsMinimised} />
        <div className="app-content">
          <Sidebar isMinimised={isMinimised} />
          <Main isMinimised={isMinimised}/>
        </div>
      </div>
    </div>
  );
}

export default App;
