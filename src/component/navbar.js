//import { Link} from "react-router-dom";
export default function Navbar(props) {
  // var colormode = "dark";
  return (
    <nav className={`navbar navbar-expand-lg  bg-${props.mode} `}>
      <div className="container-fluid">
        <a
          className={`navbar-brand text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          href="/"
        >
          Utills
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-light"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link active text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                className={`nav-link text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
                href="/about"
              >
                About
              </a>
            </li> */}
          </ul>
          <form
            className={`d-flex text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
            role="search"
          ></form>
          <div
            class={`form-check form-switch text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
          >
            <input
              class="form-check-input "
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.togglemode}
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              enable dark mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
