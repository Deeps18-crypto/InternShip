import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function Search() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState([]);
  console.log(input);
  const handlerChange = () => {
    setInput("");
  };
  return (
    <div className="search">
      <div className="search__icons">
        <SearchIcon className="search__searchicon" />
        <input
          className="search__input"
          placeholder="Try searching for hospital name, job speciality..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <CloseIcon className="search__cancelicon" onClick={handlerChange} />
      </div>
      <div className="search__maps">
        <div className="search__map">
          <CloseIcon className="search__cancelicon1" />
          <div className="search__buttons">
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
