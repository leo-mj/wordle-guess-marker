import axios from "axios";
import { baseURL } from "../../utils/databaseURL";
import { PropsMainPages } from "../../utils/menu-interfaces";

export function Login({ states }: PropsMainPages): JSX.Element {
  const {
    setSelectedPage,
    user,
    setUser,
    password,
    setPassword,
    setToken,
    setLoggedIn,
  } = states;
  const handleLoginButton = async () => {
    try {
      const response = await axios.post(baseURL + "login", {
        user: user,
        password: password,
      });
      if (response.data.status === "success") {
        alert("Success!");
        setToken(response.data.token);
        setPassword("");
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
