import "./App.css";
import { useState, useEffect } from "react";

function url(path) {
  return process.env.NODE_ENV === "development"
    ? `http://localhost:1234${path}`
    : path;
}

function App() {
  const [data, setData] = useState("Hey");
  useEffect(() => {
    fetch(url("/api/"))
      .then((res) => {
        return res.json();
      })
      .then((apiData) => {
        setData(apiData.data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">Hello {data}</header>
      <p>Heroku Build test</p>
    </div>
  );
}

export default App;
