import React, {
  useState
} from "react";
import { useHistory } from "react-router-dom";

function Signin() {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({ value: "" });
  const history = useHistory();

  const handleInputChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //if username or password field is empty, return error message
    if (userData.username === "" || userData.password === "") {
      setErrorMessage("Empty username/password field");
    } else if (userData.username == "admin" && userData.password == "123456") {

      //Signin Success
      localStorage.setItem("isAuthenticated", "true");
      history.push("/");

    } else {
      //If credentials entered is invalid
      setErrorMessage("Invalid username/password");
    }
  };

  return (
    <div className="text-center">
      <h1>Signin User</h1>
      <marquee
        direction="right"
        scrollamount="10"
      >
        <code>
          username == "admin" password == "123456"
        </code>
      </marquee>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="form-group">
          <label>Username</label>
          <input
            className="form-control"
            type="text"
            name="username"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>

        {errorMessage.value && (
          <p className="text-danger"> {errorMessage.value} </p>
        )}
      </form>
    </div>
  );
}

export default Signin;
