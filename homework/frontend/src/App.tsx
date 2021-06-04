import "./App.scss";
import { RoomManagement } from "./modules/room/components";
import { ReservationTable } from "./modules/room/components/ReservationTable";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <RoomManagement />
        </Route>
        <Route path="/room-reservation/:id">
          <ReservationTable />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
