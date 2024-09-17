import rectangle from "../assets/images/Rectangle.png";
import logo from "../assets/images/CP-Logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_image">
        <img src={rectangle} alt="footer" />
      </div>
      <div className="copy_right">
        <img src={logo} alt="logo" />
        <h3>all rights reserved</h3>
      </div>
    </div>
  );
};

export default Footer;
