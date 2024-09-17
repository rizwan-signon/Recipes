import { ChangeEvent } from "react";
import logo from "../assets/images/CP-Logo.png";
import Search from "./Search";
import { useLocation, useParams } from "react-router-dom";

interface HeaderProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Header = ({ value, onChange }: HeaderProps) => {
  const { pathname } = useLocation();
  const { id } = useParams();
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} className="image" />
      </div>
      {pathname === `/recipes/${id}` ? (
        ""
      ) : (
        <Search value={value} onChange={onChange} />
      )}
    </div>
  );
};

export default Header;
