import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import Counter from "./components/Counter";
import Hello from "./components/Hello";
import ListProducts from "./components/ListProducts";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Training(React)
            </a>

            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/counter">
                  Counter
                </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/products">
                    Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main>
          <Routes>
              <Route path="/home" element={<Hello message="React" color="blue"/>}/>
              <Route path="/counter" element={<Counter initCount={5}/>}/>
              <Route path="/products" element={<ListProducts/>} />
              <Route path="/addProduct" element={<AddProduct/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
