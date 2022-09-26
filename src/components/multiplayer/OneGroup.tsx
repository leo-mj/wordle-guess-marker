import axios from "axios";
import { arrangeEmojis } from "../../utils/arrangeEmojis";
import { baseURL } from "../../utils/databaseURL";
import { StateVariables } from "../../utils/menu-interfaces";
import { Group } from "../../utils/multiplayer-interfaces";

interface PropsAllGroups {
  states: StateVariables;
  group: Group;
  setLeaveGroup: React.Dispatch<React.SetStateAction<string>>;
}

export function OneGroup({
  group,
  states,
  setLeaveGroup,
}: PropsAllGroups): JSX.Element {
  const { user, password } = states;

  const handleLeaveGroup = async () => {
    try {
      await axios.delete(
        baseURL + `groups/exit/${group.groupName}/${user}/${password}`
      );
      alert(`You have left ${group.groupName}`);
      setLeaveGroup(group.groupName);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Try again");
    }
  };
  return (
    <div className="one-group">
      <h2>{group.groupName}</h2>
      <div className="all-entries">
        {group.groupEntries.map((entry, i) => (
          <div className="group-entry" key={i}>
            <div className="group-entry-description">
              <b>{entry.username}</b>
              {entry.solved_status}
              {entry.guesses}/6 attempts
            </div>
            <div className="group-entry-emojis">
              {arrangeEmojis(entry.emojis).map((emojiRow, i) => (
                <div key={i}>{emojiRow}</div>
              ))}
            </div>
          </div>
        ))}
        <button className="group-button" onClick={handleLeaveGroup}>
          Leave
        </button>
      </div>
    </div>
  );
}
