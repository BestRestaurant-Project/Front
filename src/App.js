import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import RestaurantList from "./routes/Restaurant";
import Cafe from "./routes/Cafe";
import RestaurantDetail from "./routes/RestaurantDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cafe">
          <Cafe />
        </Route>
        <Route path="/restaurant/:storeId">
          <RestaurantDetail />
        </Route>
        <Route path="/restaurant">
          <RestaurantList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
