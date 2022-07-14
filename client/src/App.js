
import './App.css';
import Login from './Components/Login/Login';
import {Routes, Route} from "react-router-dom"
import Lectures from './Components/Lectures/Lectures';
import Navbar from './Components/Navbar/Navbar';
import Assignment from './Components/Assignments/Assignment';
import Admin from './Components/Admin/Admin';
import Register from "./Components/Register/Register";
import { PrivateRoute } from "./Components/PrivateRoute";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/lectures"
          element={
            <PrivateRoute>
              <Lectures />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/assignments"
          element={
            <PrivateRoute>
              <Assignment />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
