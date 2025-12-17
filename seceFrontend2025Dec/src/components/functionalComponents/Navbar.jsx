import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../css/Navbar.css";

function Navbar() {
  const [hooksDropdown, setHooksDropdown] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLogin(localStorage.getItem("isLogin") === "true");
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isLogin", "false");
    setIsLogin(false);
    alert("Logout Successful");
    navigate("/login");
  };

  return (
    <nav>
      <Link to="/" className="link">
        <li>Home</li>
      </Link>
      <Link to="/about" className="link">
        <li>About</li>
      </Link>
      <Link to="/learning-react" className="link">
        <li>Learning React</li>
      </Link>
      <div
        className="dropdown"
        onMouseEnter={() => setHooksDropdown(true)}
        onMouseLeave={() => setHooksDropdown(false)}
      >
        <span className="link">Hooks</span>
        {hooksDropdown && (
          <ol className="dropdown-list">
            <li>
              <Link to="/use-state" className="dropdown-link">
                useState
              </Link>
            </li>
            <li>
              <Link to="/use-effect" className="dropdown-link">
                useEffect
              </Link>
            </li>
            <li>
              <Link to="/use-ref" className="dropdown-link">
                useRef
              </Link>
            </li>
            <li>
              <Link to="/use-memo" className="dropdown-link">
                useMemo
              </Link>
            </li>
            <li>
              <Link to="/use-callback" className="dropdown-link">
                useCallback
              </Link>
            </li>
          </ol>
        )}
      </div>
      <Link to="/contact" className="link">

        <li>Contact</li>
      </Link>
      {isLogin ? (
        <span className="link" onClick={handleLogout}>
          Logout
        </span>
      ) : (
        <Link to="/login" className="link">
          <li>Login</li>
        </Link>
      )}
    </nav>
  );
}

export default Navbar;