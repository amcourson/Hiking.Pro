import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </Route>
        <Route exact path='/supersecretroutethisrouteissoooosecretthatyouwouldneverfinditbylookingelephantdidyouseehowelephantisinarandomplacethatmakesnosensethatmakesthisrouteevenhardertofind'>
          <h1>SECRET</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
