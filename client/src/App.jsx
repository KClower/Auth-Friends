import { BrowserRouter as Router, Link as RRLink, Route, Routes } from "react-router-dom";
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

import LoginForm from "./Components/LoginForm";
import ProtectedRoute from "./Components/ProtectedRoute";
import Friends from "./Components/Friends";

function App() {


  return (
    <Router>
      <Nav
      >
        <NavItem>
          <NavLink
            tag={RRLink} to="/"
          >
            Login
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={RRLink} to="protected"
          >
            Friends
          </NavLink>
        </NavItem>
      </Nav>

      <div>
        <Routes>
          <Route exact path="/" element={<LoginForm />} />

          <Route path="/protected" element={
            <ProtectedRoute>
              <Friends />
            </ProtectedRoute>
          } />

        </Routes>
      </div>
    </Router>

  )
}

export default App
