import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/auth/authOperations";
import authSelectors from "../../redux/authSelector";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const error = useSelector(authSelectors.authError);

  const dispatch = useDispatch();

  const onRegisterClick = (e) => {
    e.preventDefault();

    dispatch(login({ email, password }));

    setEmail("");
    setPassword("");
  };

  return (
    <div className="registrationForm">
      <div className="containerRegistrationForm">
        <div className="wrapLoginTitle">
          <div className="loginTitleImg">
            <span className="loginTitle">Login</span>
          </div>
        </div>
        <form className="loginForm">
          <div
            className="wrapInput validate-input "
            data-validate="Username is required"
          >
            <span className="labelInput">Email</span>
            <input
              className="input"
              type="email"
              name="username"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <span className="focusInput"></span>
          </div>
          <div
            className="wrapInput validateInput m-b-18"
            data-validate="Password is required"
          >
            <span className="labelInput">Password</span>
            <input
              className="input"
              type="password"
              name="pass"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <span className="focusInput"></span>
          </div>

          <button className="loginBtn" onClick={onRegisterClick}>
            Login
          </button>
        </form>
      </div>
      {error && <div> Error : {error} </div>}
    </div>
  );
}

export default LoginForm;
