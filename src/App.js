import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const result = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );
    setJokes(result.data);
    setLoading(false);
    console.log(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <Card
          setup={jokes.setup}
          punchline={jokes.punchline}
          fetchData={fetchData}
          loading={loading}
        />
      </div>
    </>
  );
}

export default App;
