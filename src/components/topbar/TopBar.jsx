import "./topbar.css";
import photo from "../images/photo.jpg";
import { Link } from "react-router-dom";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="TopIcon fa-brands fa-instagram"></i>
        <i className="TopIcon fa-brands fa-twitter"></i>
        <i className="TopIcon fa-brands fa-facebook"></i>
        <i className="TopIcon fa-brands fa-pinterest"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRİTE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImg" src={photo} alt="" />
        ) : (
          <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/login">              
              LOGIN
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/register">              
              REGISTER
            </Link>
          </li>
            
           
          </ul>
        )}
        <i class="topSearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
