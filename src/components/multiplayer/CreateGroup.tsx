import axios from "axios";
import { useState } from "react";
import { baseURL } from "../../utils/databaseURL";
import { PropsMultiplayerPages } from "../../utils/multiplayer-interfaces";

export function CreateGroup({
  states,
  setMultiplayerPage,
}: PropsMultiplayerPages): JSX.Element {
  const { user, password } = states;
  const [groupName, setGroupName] = useState<string | null>(null);
  const [groupPasscode, setGroupPasscode] = useState<string | null>(null);
  const handleCreateButton = async () => {
    try {
      axios.post(baseURL + "groups/create/" + user, {
        userPassword: password,
        group: groupName,
        groupPasscode: groupPasscode,
      });
      setMultiplayerPage("all groups");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="login-interface">
      <input
        type="text"
        onChange={(e) => setGroupName(e.target.value)}
        placeholder="group name"
      />
      <input
        type="text"
        onChange={(e) => setGroupPasscode(e.target.value)}
        placeholder="group passcode"
      />
      <button onClick={() => handleCreateButton()}>Create</button>
    </div>
  );
}
