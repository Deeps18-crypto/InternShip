import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import Map from "../../assests/map-pin 1.png";

function Search(props) {
  return (
    <div className="search">
      <div className="search__icons">
        <SearchIcon className="search__searchicon" />
        <input
          className="search__input"
          placeholder="Try searching for hospital name, job speciality..."
          onChange={props.onChanged}
          value={props.value}
        />
        <IconButton>
          <CloseIcon
            className="search__cancelicon"
            onClick={props.handlerChange}
          />
        </IconButton>
      </div>
      <div className="search__maps">
        <div className="search__map">
          <img src={Map} />
          <input
            className="search__input"
            placeholder="GLENVIEW ILLINOIS, USA"
          />
          <CloseIcon className="search__mapCancel" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}
export default Search;
