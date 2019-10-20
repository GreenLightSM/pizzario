import React from "react";
import c from "./search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className={c.search_wrap}>
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
};

export default Search;
