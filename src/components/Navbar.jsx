import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          epic
        </Link>
        <div className="menu-icon">
          <div onClick={() => handleClick()}>
            <i className="fa-light fa-bars"></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
