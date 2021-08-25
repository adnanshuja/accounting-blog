import React, { useState } from "react";
import axios from "axios";
import { setUserSession } from "../utils/common";

function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios
      .post("http://18.219.85.59:3001/api/user/login", {
        username: username.value,
        password: password.value,
      })
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.token, response.data.user);
        props.history.push("/admin");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401)
          setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      });
  };

  return (
    
    <div>
      <div className="login-wrapper">
      <div className="form">
        <div className="login-form">
          <h3>Login</h3>
        <input type="text" placeholder="Username" {...username} autoComplete="new-password" />
      <input type="password" placeholder="Password" {...password} autoComplete="new-password" />
      {error && (
        <>
          <small style={{ color: "red" }}>{error}</small>
          <br />
        </>
      )}
      <input
        type="button"
        value={loading ? "Loading..." : "Login"}
        onClick={handleLogin}
        className="button"
        disabled={loading}
      />
        </div>     

        </div>
      </div>
     
    </div>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default Login;
