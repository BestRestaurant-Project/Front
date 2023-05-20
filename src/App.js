import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import RestaurantList from "./routes/Restaurant";
import RestaurantDetail from "./routes/RestaurantDetail";
import UserSignIn from "./routes/UserSignIn";
import UserSignUp from "./routes/UserSignUp";
import Cafe from "./routes/Cafe";

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
        <Route path="/join">
          <UserSignUp />
        </Route>
        <Route path="/login">
          <UserSignIn />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
