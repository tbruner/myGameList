import "./TitleBar.css";
import { handleUserRequest } from "../../Handles/Handles";
import { useState, useEffect } from "react";

function TitleBar({ signIn, signOut, userId }) {
  const [userName, setUserName] = useState(false);

  useEffect(() => {
    if (userId) getUserName(userId);
  }, [userId]);

  async function getUserName(user) {
    const userObj = await handleUserRequest(user);
    if (userObj) setUserName(userObj);
  }
  return (
    <header>
      <nav>
        <div className="nav-brand-search">
          <div className="logo">Logo</div>
          <div className="nav-search">
            <input type="text" placeholder="Search Video Games" />
            <button>Search</button>
          </div>
        </div>
        <div className="login">
          {userId ? (
            <>
              <div>Hi, {userName}</div>
              <button onClick={signOut}>Sign Out</button>
            </>
          ) : (
            <>
              <button onClick={signIn}>Login</button>
              <button>Sign Up</button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default TitleBar;
