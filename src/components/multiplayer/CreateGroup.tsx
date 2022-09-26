import axios from "axios";
import { useState } from "react";
import { baseURL } from "../../utils/databaseURL";
import { PropsMultiplayerPages } from "../../utils/multiplayer-interfaces";

export function CreateGroup({
  states,
  setMultiplayerPage,
}: PropsMultiplayerPages): JSX.Element {
  const { user, password } = states;
  const [groupName, setGroupName] = useState<string>("");
  const [groupPasscode, setGroupPasscode] = useState<string>("");
  const handleCreateButton = async () => {
    try {
      axios.post(baseURL + "groups/create/" + user, {
        userPassword: password,
        group: groupName,
        groupPasscode: groupPasscode,
      });
      navigator.clipboard.writeText(
        `Join my wordle clone multiplayer group! Groupname: ${groupName}, Passcode: ${groupPasscode}`
      );
      alert(
        `Group name and passcode copied to clipboard. Share with players you want to invite!`
      );
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
      />
      <button onClick={() => handleCreateButton()}>Create</button>
    </div>
  );
}
