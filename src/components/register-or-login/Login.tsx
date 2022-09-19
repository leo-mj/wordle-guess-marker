import axios from "axios";
import { baseURL } from "../../utils/databaseURL";
import { PropsMainPages } from "../../utils/menu-interfaces";

export function Login({ states }: PropsMainPages): JSX.Element {
  const {
    selectedPage,
    setSelectedPage,
    user,
    setUser,
    password,
    setPassword,
    loggedIn,
    setLoggedIn,
  } = states;
  const handleLoginButton = async () => {
    const res = await axios.get(`${baseURL}login/${user}/${password}`);
    if (res.data.status === "success") {
      setSelectedPage("play");
      setLoggedIn(true);
    } else {
      alert("Wrong password or username");
      setPassword(null);
      setUser(null);
    }
  };
  return (
    <div className="login-interface">
      <input
        type="text"
        onChange={(e) => setUser(e.target.value)}
        placeholder="username"
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
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
