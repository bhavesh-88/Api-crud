import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Login from "./Login";
import Register from "./Register";
import Admin from "./Admin";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="admin" element={<Admin />} />
          </Route >
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
