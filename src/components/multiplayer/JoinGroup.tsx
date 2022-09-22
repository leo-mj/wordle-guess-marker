import axios from "axios";
import { useState } from "react";
import { baseURL } from "../../utils/databaseURL";
import { PropsMultiplayerPages } from "../../utils/multiplayer-interfaces";

export function JoinGroup({
  states,
  setMultiplayerPage,
}: PropsMultiplayerPages): JSX.Element {
  const { user, password } = states;
  const [groupName, setGroupName] = useState<string | null>(null);
  const [groupPasscode, setGroupPasscode] = useState<string | null>(null);
  const handleJoinButton = async () => {
    try {
      axios.post(baseURL + "groups/join/" + groupName, {
        user: user,
        userPassword: password,
        groupPasscode: groupPasscode,
      });
      setMultiplayerPage("all groups");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="inputFields">
      <input
        className="textInput"
        type="text"
        onChange={(e) => setGroupName(e.target.value)}
        placeholder="group name"
      />
      <input
        className="textInput"
        type="text"
        onChange={(e) => setGroupPasscode(e.target.value)}
        placeholder="group passcode"
      />
      <button className="submitButton" onClick={() => handleJoinButton()}>
        Create
      </button>
    </div>
  );
}
