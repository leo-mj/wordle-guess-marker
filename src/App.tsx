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
  useEffect(() => {
    axios.get(baseURL);
    console.log("Connecting to server");
  }, []);
  return (
    <>
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
