import { PropsMainPages } from "../utils/menu-interfaces";

export function MenuButtons({ states }: PropsMainPages): JSX.Element {
  const {
    selectedPage,
    setSelectedPage,
    loggedIn,
    setLoggedIn,
    setUser,
    setPassword,
  } = states;

  const handlePlayButton = () => {
    setSelectedPage("play");
    if (!loggedIn) {
      alert("Please give the server a short moment to wake up");
    }
  };
  return (
    <div className="menu-buttons">
      {selectedPage !== "play" && (
        <button className="menu-button" onClick={handlePlayButton}>
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
            setUser("");
            setPassword("");
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
