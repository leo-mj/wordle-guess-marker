import { useState } from "react";
import { PlayWordle } from "./components/PlayWordle";
import { Login } from "./components/register-or-login/Login";
import { Register } from "./components/register-or-login/Register";
import { stateVariables } from "./utils/menu-interfaces";

function App(): JSX.Element {
  const [selectedPage, setSelectedPage] = useState<string>("main menu");
  const [user, setUser] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const states: stateVariables = {
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
        {selectedPage === "main menu" && (
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
        {selectedPage !== "main menu" && (
          <button
            className="menu-button"
            onClick={() => setSelectedPage("main menu")}
          >
            Main Menu
          </button>
        )}
      </div>
      {selectedPage === "play" && <PlayWordle states={states} />}
      {selectedPage === "login" && <Login states={states} />}
      {selectedPage === "register" && <Register states={states} />}
    </>
  );
}

export default App;
