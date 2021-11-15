import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [greet, setGreet] = useState("");

  useEffect(() => {
    fetch(
      "https://heroku:${{secret.HEROKU_API_KEY}}@git.heroku.com/${{secret.HEROKU_APP_NAME}}"
    ).then((res) => {
      setGreet(res.data);
    });
  }, []);

  return <h1>{greet}</h1>;
}
export default App;
