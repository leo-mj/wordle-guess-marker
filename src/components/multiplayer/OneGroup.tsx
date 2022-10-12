import axios from "axios";
import { useState } from "react";
import { arrangeEmojis } from "../../utils/arrangeEmojis";
import { baseURL } from "../../utils/databaseURL";
import { StateVariables } from "../../utils/menu-interfaces";
import { Group, Stats } from "../../utils/multiplayer-interfaces";
import { OneGroupStats } from "./OneGroupStats";

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
  const [show, setShow] = useState<boolean>(false);
  const [groupStats, setGroupStats] = useState<Stats[] | null>(null);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    const groupStatsData = (
      await axios.get(
        baseURL + `groups/${group.groupName}/stats/${user}/${password}`
      )
    ).data;
    setGroupStats(groupStatsData);
    setShow(true);
  };

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
      {!show && (
        <div className="all-entries">
          {group.groupEntries.map((entry, i) => (
            <div className="group-entry" key={i}>
              <div className="group-entry-description">
                <b>{entry.username}</b>
                <p>{entry.solved_status}</p>
                <p>{entry.guesses}/6 attempts</p>
              </div>
              <div className="group-entry-emojis">
                {arrangeEmojis(entry.emojis).map((emojiRow, i) => (
                  <div key={i}>{emojiRow}</div>
                ))}
              </div>
            </div>
          ))}
          <button onClick={handleShow}>Leaderboard</button>
        </div>
      )}

      {show && groupStats && (
        <div className="all-entries">
          <OneGroupStats groupStats={groupStats} user={user} />
          <div className="group-stat-buttons">
            <button onClick={handleClose}>Close</button>
            <button onClick={handleLeaveGroup}>Leave Group</button>
          </div>
        </div>
      )}
    </div>
  );
}
