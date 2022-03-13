import React, { useState } from "react";
import classes from "./Login.module.css";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = ()=>{
    let data = {
        email,
        password
    }

    console.log(data)
}

  return (
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
            value="Login"
            style={{ backgroundColor: "rgb(60, 187, 56)" }}
          />
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
