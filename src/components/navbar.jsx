import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
  return (
    <nav>
      {/* <ul>
        <li>
          <Link to="/">Login</Link>
          <button onClick={() => navigate ('/')}>login</button>
        </li>
        <li>
          <Link to="/register">register</Link>
          <button onClick={() => navigate ('/register')}>register</button>
        </li>
        <li>
          <Link to="/dashboard">dashboard</Link>
          <button onClick={() => navigate ('/dashboard')}>dashboard</button>
        </li>
      </ul> */}
    </nav>
  );
}

export default Navbar;
