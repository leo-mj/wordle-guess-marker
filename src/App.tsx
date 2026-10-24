import { useEffect, useState } from "react";
import { Multiplayer } from "./components/Multiplayer";
import { PlayWordle } from "./components/PlayWordle";
import { Login } from "./components/register-or-login/Login";
import { Register } from "./components/register-or-login/Register";
import { StateVariables } from "./utils/menu-interfaces";
import "./scss/mystyles.scss";
import { ManageAccount } from "./components/ManageAccount";
import { About } from "./components/About";
import { MenuButtons } from "./components/MenuButtons";
import axios from "axios";
import { baseURL } from "./utils/databaseURL";

function App(): JSX.Element {
  const [selectedPage, setSelectedPage] = useState<string>("main menu");
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [serverReady, setServerReady] = useState<boolean>(false);
  const states: StateVariables = {
    selectedPage: selectedPage,
    setSelectedPage: setSelectedPage,
    user: user,
    setUser: setUser,
    password: password,
    setPassword: setPassword,
    token: token,
    setToken: setToken,
    loggedIn: loggedIn,
    setLoggedIn: setLoggedIn,
  };
  useEffect(() => {
    // the backend sleeps when idle: keep asking until it and its database answer,
    // so it is awake by the time the user logs in
    let cancelled = false;
    const wakeServer = async () => {
      while (!cancelled) {
        try {
          await axios.get(baseURL + "health");
          setServerReady(true);
          return;
        } catch (error) {
          await new Promise((resolve) => setTimeout(resolve, 3000));
        }
      }
    };
    wakeServer();
    return () => {
      cancelled = true;
    };
  }, []);
  return (
    <>
      {!serverReady && (
        <div className="server-status">
          Waking up the server, this can take up to a minute...
        </div>
      )}
      <MenuButtons states={states} />
      {selectedPage === "play" && <PlayWordle states={states} />}
      {selectedPage === "login" && <Login states={states} />}
      {selectedPage === "register" && <Register states={states} />}
      {selectedPage === "multiplayer" && <Multiplayer states={states} />}
      {selectedPage === "manage account" && loggedIn && (
        <ManageAccount states={states} />
      )}
      {selectedPage === "main menu" && !loggedIn && (
        <About setSelectedPage={setSelectedPage} />
      )}
    </>
  );
}

export default App;
