import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/login.page";
import Signup from "../pages/signup.page";
import Task from "../pages/task.page";

const Navigations = () => {
  const [isloggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {isloggedIn ? (
            <>
              <Route exact path="/" element={<Task />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          )}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navigations;
