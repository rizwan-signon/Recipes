import { PiUserFill } from "react-icons/pi";
import { HiOutlineArrowRight } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="nav_div">
      <nav className="navbar">
        <ul className="list">
          <li className="listitems">
            <a href="#">cummunity</a>
          </li>
          <li className="listitems">
            <a href="#">Books</a>
          </li>
          <li className="listitems">
            <a href="#">recipes</a>
          </li>
          <li className="listitems">
            <a href="#">pupolar</a>
          </li>
        </ul>
        <div className="auth-div">
          <div className="auth">
            <HiOutlineArrowRight className="icons" />
            <p>Register</p>
          </div>
          <div className="auth">
            <PiUserFill className="icons" />
            <p>Login</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
