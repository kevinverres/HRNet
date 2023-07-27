import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import logo from "./assets/img/logo.jpg";
import "./assets/css/style.css";
import logoAdd from "./assets/img/addemployee.png";
import logoList from "./assets/img/listemployee.png";
import List from "./pages/Employee/List";
import Create from "./pages/Employee/create";
const alt = "logo de la compagnie Wealth Health";
const alt2 = "logo ilustration";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                logo={logo}
                alt={alt}
                logoAdd={logoAdd}
                logoList={logoList}
                alt2={alt2}
              />
            }
          />
          <Route path="/create" element={<Create logo={logo} alt={alt} />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
