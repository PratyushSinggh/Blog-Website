import { Link } from "react-router-dom";
import "./Topbar.css";

export default function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/write"
            >
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImage"
            src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/login"
              >
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/register"
              >
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className=" topSearchIcon topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
