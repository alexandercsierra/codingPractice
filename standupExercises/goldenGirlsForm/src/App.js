import React, { useState, useEffect } from "react";
// import "./styles.css";
import axios from "axios";

export default function App() {
  const [episodeList, setEpisodeList] = useState([]);

  useEffect(() => {
    axios
      .get("https://goldengirlsquotes.herokuapp.com/episodes")
      .then(res => console.log(res))
      .catch(err => console.log(err.message));
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
