import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../redux/auth/authOperations";
import "./RegistrationForm.css";
import authSelectors from "../../redux/authSelector";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const error = useSelector(authSelectors.authError);

  const dispatch = useDispatch();

  const onRegisterClick = (e) => {
    e.preventDefault();

    dispatch(register({ name, email, password }));

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="registrationForm">
      <div className="containerRegistrationForm">
        <div className="wrapLoginTitle">
          <div className="loginTitleImg">
            <span className="loginTitle">Register</span>
          </div>
        </div>
        <form className="loginForm">
          <div
            className="wrapInput validate-input "
            data-validate="Username is required"
          >
            <span className="labelInput">Email</span>
            <input
              className="inputLogin"
              type="email"
              name="username"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <span className="focusInput"></span>
          </div>

          <div
            className="wrapInput validate-input "
            data-validate="Username is required"
          >
            <span className="labelInput">Username</span>
            <input
              className="inputLogin"
              type="text"
              name="username"
              placeholder="Enter username"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <span className="focusInput"></span>
          </div>

          <div
            className="wrapInput validateInput m-b-18"
            data-validate="Password is required"
          >
            <span className="labelInput">Password</span>
            <input
              className="inputLogin"
              type="password"
              name="pass"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <span className="focusInput"></span>
          </div>

          <button className="loginBtn" onClick={onRegisterClick}>
            Register
          </button>
        </form>
        {error && <div> Error : {error} </div>}
      </div>
    </div>
  );
}

export default RegistrationForm;
