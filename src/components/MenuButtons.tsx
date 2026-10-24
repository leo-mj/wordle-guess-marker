import axios from "axios";
import { authHeader, baseURL } from "../utils/databaseURL";
import { PropsMainPages } from "../utils/menu-interfaces";

export function MenuButtons({ states }: PropsMainPages): JSX.Element {
  const {
    selectedPage,
    setSelectedPage,
    loggedIn,
    setLoggedIn,
    setUser,
    setPassword,
    token,
    setToken,
  } = states;

  const handleLogOutButton = () => {
    // ends the session on the server; the user is logged out locally even if this fails
    axios
      .post(baseURL + "logout", {}, authHeader(token))
      .catch((error) => console.error(error));
    setLoggedIn(false);
    setUser("");
    setPassword("");
    setToken("");
    setSelectedPage("main menu");
  };
  return (
    <div className="menu-buttons">
      {selectedPage !== "play" && (
        <button className="menu-button" onClick={() => setSelectedPage("play")}>
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
        <button className="menu-button" onClick={handleLogOutButton}>
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
      {loggedIn && selectedPage !== "manage account" && (
        <button
          className="menu-button"
          onClick={() => setSelectedPage("manage account")}
        >
          Account
        </button>
      )}
    </div>
  );
}
