import { useSelector } from "react-redux";
import authSelectors from "../redux/authSelector";

function HomePage() {
  const currentUser = useSelector(authSelectors.currentUser);

  return (
    <div>
      {currentUser ? (
        <h1>Hello, {currentUser.name}</h1>
      ) : (
        <h1>Authenticate in app in order to work with contacts</h1>
      )}
    </div>
  );
}

export default HomePage;
