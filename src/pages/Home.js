import React from "react";

import SearchPhotos from "../components/Search";

const Home = () => {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">React Photo Search</h1>
        <SearchPhotos />

      </div>
    </div>
  );
}
export default Home;