import { ChangeEvent } from "react";
import { BiSearch } from "react-icons/bi";

interface SearchProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const Search = ({ value, onChange }: SearchProps) => {
  return (
    <div className="search">
      <button className="catagories">All catagories</button>
      <input
        className="input"
        type="text"
        placeholder="search"
        onChange={onChange}
        value={value}
      />
      <div className="search_icon">
        <BiSearch className="" />
      </div>
    </div>
  );
};

export default Search;
