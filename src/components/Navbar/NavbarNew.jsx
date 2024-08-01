import { useEffect, useState } from "react";
import { getToken } from "../../services/localStorage";
import { Link, useNavigate } from "react-router-dom";

function NavbarNew() {
  const [tokens, setTokens] = useState(getToken);
  const navigate = useNavigate();
  useEffect(() => {
    const newToken = getToken();
    if (newToken) {
      setTokens(newToken);
    }
  }, [tokens]);

  const token = getToken();
  const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element)
      element.scrollIntoView({
        behavior: "smooth",
      });
  };
  return (
    <div className="container my-3">
      <ul class="nav justify-content-around">
        {!tokens ? (
          <li class="nav-item">
            <Link
              class="nav-link text-success fw-medium"
              aria-current="page"
              to="/"
            >
              Home
            </Link>
          </li>
        ) : (
          <li class="nav-item">
            <Link
              class="nav-link text-success fw-medium"
              aria-current="page"
              to="/dashboard"
            >
              Home
            </Link>
          </li>
        )}
        {!token && (
          <li class="nav-item">
            <Link
              class="nav-link text-success fw-medium"
              aria-current="page"
              onClick={() => scrollTo("services")}
            >
              Services
            </Link>
          </li>
        )}

        {!token && (
          <li class="nav-item">
            <Link
              class="nav-link text-success fw-medium"
              aria-current="page"
              onClick={() => scrollTo("about")}
            >
              About Us
            </Link>
          </li>
        )}

        <li class="nav-item">
          <Link
            class="nav-link text-success fw-medium"
            aria-current="page"
            to="/contact"
          >
            Contact Us
          </Link>
        </li>
        {token && (
          <li class="nav-item">
            <Link
              class="nav-link text-success fw-medium"
              aria-current="page"
              onClick={handleSignOut}
            >
              Sign Out
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default NavbarNew;
