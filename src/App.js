import React, { useState, useEffect } from "react";

import "./App.css";

import Grid from "@material-ui/core/Grid";
import PplCard from "./components/PplCard";

// https://dev.to/silvestricodes/asynchronous-flows-with-react-hooks-1g0m
// https://medium.com/better-programming/the-true-beauty-of-material-ui-d76fa3dc0dd4

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let didCancel = false;
    async function fetchData() {
      !didCancel && setIsLoading(true);
      try {
        const fetcher = await fetch("https://reqres.in/api/users");
        const response = await fetcher.json();
        !didCancel && setUsers(response.data);
        // setUsers(
        // await fetch('https://reqres.in/api/users')
        // .then(res => res.json())
        // .then(res => res.data))};
      } catch (error) {
        // do something with error
      } finally {
        !didCancel && setIsLoading(false);
      }
    }

    fetchData();
    return () => {
      didCancel = true;
    };
  }, []);

  return (
    <div className="App">
      <h3>MUI PLAY</h3>

      {/* {users.map(user => user.email)} */}

      <Grid container spacing={10} style={{ padding: "24px" }}>
        {users.map((users) => (
          <Grid key={users.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
            <PplCard
              key={users.id}
              email={users.email}
              firstname={users.first_name}
              lastname={users.last_name}
              avatar={users.avatar}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
