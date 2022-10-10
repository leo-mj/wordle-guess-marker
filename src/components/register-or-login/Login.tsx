import axios from "axios";
import { baseURL } from "../../utils/databaseURL";
import { PropsMainPages } from "../../utils/menu-interfaces";

export function Login({ states }: PropsMainPages): JSX.Element {
  const { setSelectedPage, user, setUser, password, setPassword, setLoggedIn } =
    states;
  const handleLoginButton = async () => {
    alert(
      "Sorry to make you wait, the server might take a few seconds to wake up."
    );
    try {
      const response = await axios.get(`${baseURL}login/${user}/${password}`);
      if (response.data.status === "success") {
        alert("Success!");
        setSelectedPage("play");
        setLoggedIn(true);
      } else {
        alert("Wrong password or username");
        setPassword("");
        setUser("");
      }
    } catch (err) {
      console.error(err);
      alert("Wrong password or username");
      setPassword("");
      setUser("");
    }
  };
  return (
    <div className="login-interface">
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        onKeyDown={async (event) => {
          if (event.key === "Enter") {
            await handleLoginButton();
          }
        }}
      />
      {user && password && (
        <button
          className="menu-button"
          onClick={async () => await handleLoginButton()}
        >
          Enter
        </button>
      )}
    </div>
  );
}
