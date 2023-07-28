import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Header />
        <div className="app-content">
          <Sidebar />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
