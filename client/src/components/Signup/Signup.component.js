import React, { useState } from "react";
import classes from "./Signup.module.css";

function SignupComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = ()=>{
      let data = {
          email,
          password,
          userName
      }

      console.log(data)
  }


  return (
    <div>
      <div className={classes.majorContainer}>
        <div className={classes.formStyle}>
          <h5>Todo List</h5>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <input
              type="text"
              placeholder="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="submit"
              value="Signup"
              style={{ backgroundColor: "rgb(60, 187, 56)" }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupComponent;
