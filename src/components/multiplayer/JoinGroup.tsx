import axios from "axios";
import { useState } from "react";
import { baseURL } from "../../utils/databaseURL";
import { PropsMultiplayerPages } from "../../utils/multiplayer-interfaces";

export function JoinGroup({
  states,
  setMultiplayerPage,
}: PropsMultiplayerPages): JSX.Element {
  const { user, password } = states;
  const [groupName, setGroupName] = useState<string>("");
  const [groupPasscode, setGroupPasscode] = useState<string>("");
  const handleJoinButton = async () => {
    try {
      await axios.post(baseURL + "groups/join/" + groupName, {
        user: user,
        userPassword: password,
        groupPasscode: groupPasscode,
      });
      alert(`You have successfully joined ${groupName}`);
      setMultiplayerPage("all groups");
    } catch (err) {
      console.error(err);
      alert("Something went wrong! Try again");
    }
    setGroupName("");
    setGroupPasscode("");
  };
  return (
    <div className="login-interface">
      <input
        type="text"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
        placeholder="group name"
      />
      <input
        type="text"
        value={groupPasscode}
        onChange={(e) => setGroupPasscode(e.target.value)}
        placeholder="group passcode"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleJoinButton();
          }
        }}
      />
      <button onClick={() => handleJoinButton()}>Join</button>
    </div>
  );
}
