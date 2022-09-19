import axios from "axios";
import { baseURL } from "../../utils/databaseURL";
import { PropsMainPages } from "../../utils/menu-interfaces";

export function Register({ states }: PropsMainPages): JSX.Element {
  const { setSelectedPage, user, setUser, password, setPassword, setLoggedIn } =
    states;

  const handleRegisterButton = async () => {
    const res = await axios.post(`${baseURL}register`, {
      user: user,
      password: password,
    });
    console.log(res.data.message);
    if (res.data.status === "success") {
      setLoggedIn(true);
      setSelectedPage("play");
    } else if (res.data.message.includes("already exists")) {
      alert("Username already exists!");
      setUser(null);
      setPassword(null);
    } else {
      alert("Something went wrong");
      setUser(null);
      setPassword(null);
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
          onClick={async () => await handleRegisterButton()}
        >
          Enter
        </button>
      )}
    </div>
  );
}
