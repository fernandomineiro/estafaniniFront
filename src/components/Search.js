import React, { useState } from "react";
import getAllPhotos from "../services/getPhotos";
const SearchPhotos = () => {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);

  const searchPhotos = async (e) => {
    let result = getAllPhotos(e.value)
    setPics(result)
  };
  return (
    
    <>
     <form className="form" onSubmit={searchPhotos}>
        <label className="label" htmlFor="query"> 
          {" "}
          📷
        </label>
        <input
    type="text"
    name="query"
    className="input"
    placeholder={`Sigite o que queres"`}
    value={query}
    onChange={(e) => setQuery(e.target.value)}
/>
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
        {pics.map((pic) =>
          <div className="card" key={pic.id}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="50%"
              height="50%"
            ></img>
          </div>)};
      </div>

    </>
  );
}

export default SearchPhotos;