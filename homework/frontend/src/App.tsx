import "./App.scss";
import { RoomManagement } from "./modules/room/components";
import { ReservationTable } from "./modules/room/components/ReservationTable";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/room" exact>
          <RoomManagement />
        </Route>
        <Route path="/room/:id">
          <ReservationTable />
        </Route>
        <Redirect to="/room" />
      </Switch>
    </Router>
  );
}

export default App;
