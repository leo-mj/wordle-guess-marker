import axios from "axios";
import { baseURL } from "../../utils/databaseURL";
import { PropsMainPages } from "../../utils/menu-interfaces";

export function Register({ states }: PropsMainPages): JSX.Element {
  const { setSelectedPage, user, setUser, password, setPassword, setLoggedIn } =
    states;
  const handleRegisterButton = async () => {
    try {
      await axios.post(baseURL + "register", {
        user: user,
        password: password,
      });
      alert("Success!");
      setLoggedIn(true);
      setSelectedPage("play");
    } catch (err) {
      console.error(err);
      alert("Username might already exist. Try again");
      setUser("");
      setPassword("");
    }
  };
  return (
    <div className="login-interface">
      <h1>Do not re-use passwords!!!</h1>
      <input
        type="text"
        onChange={(e) => setUser(e.target.value)}
        placeholder="username"
      />
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      {user && password && (
        <button
          className="menu-button"
          onClick={async () => await handleRegisterButton()}
        >
          Enter
        </button>
      )}
    </div>
  );
}
