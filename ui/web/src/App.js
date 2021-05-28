import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    Navbar,
    NavLink
} from "react-bootstrap";
import {
    BrowserRouter as Router ,
    Link,
    Switch,
    Route
} from "react-router-dom";
import Login from "./component/Login/Login";
import User_List from "./component/User/User_List";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  return (
    <div>
        <Router>
            <Navbar bg={"primary"}>
                <NavLink>
                    <Link to={"/"} className={"text-white"} tag={NavLink}>Omobio-Test</Link>
                </NavLink>
            </Navbar>
            <Container fluid={true}>
                <Switch>
                    <Route exact path={"/"} component={Login} />
                    <Route exact path={"/users"}>
                        <ProtectedRoute component={User_List} />
                    </Route>
                </Switch>
            </Container>
        </Router>
    </div>
  );
}

export default App;
