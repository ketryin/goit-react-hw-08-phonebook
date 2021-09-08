import { PublicRoute, PrivateRoute } from "./components/Routes";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contacts from "./pages/Contacts";
import UserMenu from "./components/UserMenu/UserMenu";

function App() {
  return (
    <div className="App">
      <UserMenu />

      <PublicRoute path="/" exact>
        <HomePage />
      </PublicRoute>
      <PublicRoute path="/register" exact restricted>
        <Register />
      </PublicRoute>
      <PublicRoute path="/login" exact restricted>
        <Login />
      </PublicRoute>
      <PrivateRoute path="/contacts" exact>
        <Contacts />
      </PrivateRoute>
    </div>
  );
}

export default App;
