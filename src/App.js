import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import UserSignIn from "./routes/UserSignIn";
import UserSignUp from "./routes/UserSignUp";
import Restaurant from "./routes/Restaurant";
import RestaurantDetail from "./routes/RestaurantDetail";
import Cafe from "./routes/Cafe";
import CafeDetail from "./routes/CafeDetail";
import "./styles/reset.css";
import "./styles/button.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cafe/:storeId" component={CafeDetail} />
        <Route path="/cafe" component={Cafe} />
        <Route path="/restaurant/:storeId" component={RestaurantDetail} />
        <Route path="/restaurant" component={Restaurant} />
        <Route path="/join" component={UserSignUp} />
        <Route path="/login" component={UserSignIn} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
