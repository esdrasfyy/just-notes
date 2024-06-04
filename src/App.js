import React, { useEffect, useState } from "react";
import "./global.css";
import "./app.css";
import "./main.css";
import Todo from "./Components/Todo";
import Login from "./Components/Login";

function App() {
  const [token, setToken] = useState(
    localStorage.getItem("tokenLogin") || null
  );
  useEffect(() => {
    const checkLocalStorage = setInterval(() => {
      const storedToken = localStorage.getItem("tokenLogin");
      if (storedToken !== token) {
        setToken(storedToken);
      }
    }, 1000);

    return () => {
      clearInterval(checkLocalStorage);
    };
  }, [token]);
  return <>{token ? <Todo /> : <Login />}</>;
}

export default App;
