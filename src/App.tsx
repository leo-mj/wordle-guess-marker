import { useState } from "react";
import { Multiplayer } from "./components/Multiplayer";
import { PlayWordle } from "./components/PlayWordle";
import { Login } from "./components/register-or-login/Login";
import { Register } from "./components/register-or-login/Register";
import { StateVariables } from "./utils/menu-interfaces";
import "./scss/mystyles.scss";

function App(): JSX.Element {
  const [selectedPage, setSelectedPage] = useState<string>("main menu");
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const states: StateVariables = {
    selectedPage: selectedPage,
    setSelectedPage: setSelectedPage,
    user: user,
    setUser: setUser,
    password: password,
    setPassword: setPassword,
    loggedIn: loggedIn,
    setLoggedIn: setLoggedIn,
  };
  return (
    <>
      <div className="menu-buttons">
        {selectedPage !== "play" && (
          <button
            className="menu-button"
            onClick={() => setSelectedPage("play")}
          >
            Play
          </button>
        )}
        {selectedPage !== ("login" || "register") && !loggedIn && (
          <button
            className="menu-button"
            onClick={() => setSelectedPage("login")}
          >
            Log In
          </button>
        )}
        {selectedPage === "main menu" && !loggedIn && (
          <button
            className="menu-button"
            onClick={() => setSelectedPage("register")}
          >
            Register
          </button>
        )}
        {selectedPage !== ("register" || "login") && loggedIn && (
          <button
            className="menu-button"
            onClick={() => {
              setLoggedIn(false);
              setSelectedPage("main menu");
            }}
          >
            Log Out
          </button>
        )}
        {selectedPage !== "main menu" && !loggedIn && (
          <button
            className="menu-button"
            onClick={() => setSelectedPage("main menu")}
          >
            Main Menu
          </button>
        )}
        {selectedPage !== "multiplayer" && loggedIn && (
          <button
            className="menu-button"
            onClick={() => setSelectedPage("multiplayer")}
          >
            Multiplayer
          </button>
        )}
      </div>
      {selectedPage === "play" && <PlayWordle states={states} />}
      {selectedPage === "login" && <Login states={states} />}
      {selectedPage === "register" && <Register states={states} />}
      {selectedPage === "multiplayer" && <Multiplayer states={states} />}
      {selectedPage === "main menu" && !loggedIn && (
        <div className="about">
          <i>Play:</i>
          <p> Play a game of Wordle without saving your results anywhere</p>
          <i>Login:</i>
          <p>
            {" "}
            Once you are logged in, you can join groups and share your results
            with others!
          </p>
          <i>Register:</i>
          <p> Create an account so you can use the multiplayer features!</p>
        </div>
      )}
    </>
  );
}

export default App;
