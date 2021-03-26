import React, { useState, useEffect, useContext, useCallback } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Context, ACTIONS } from "./stores/Store";
import "./App.scss";

import TransactionDetail from "./pages/TransactionDetail";
import TransactionList from "./pages/TransactionList";

const API_URL =
  "https://cors-anywhere.herokuapp.com/https://nextar.flip.id/frontend-test";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { dispatch } = useContext(Context);

  const _getData = useCallback(
    (url) => {
      fetch(url)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw res;
        })
        .then((result) => {
          const data = Object.entries(result).map(([, val]) => val);
          const total = data.map((item) => item.amount).reduce((a, c) => a + c);
          dispatch({
            type: ACTIONS.STORE_DATA,
            payload: { transactionsData: data, total },
          });
        })
        .catch((e) => console.log(e))
        .finally(() => {
          setIsLoaded(true);
        });
    },
    [dispatch]
  );

  useEffect(() => {
    _getData(API_URL);
  }, [_getData]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App bg-accent">
        <Router>
          <Switch>
            <Route path="/" exact component={TransactionList} />
            <Route
              path="/transaction-detail/:transactionId"
              exact
              component={TransactionDetail}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
