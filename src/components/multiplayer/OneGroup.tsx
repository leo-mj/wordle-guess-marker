import { arrangeEmojis } from "../../utils/arrangeEmojis";
import { StateVariables } from "../../utils/menu-interfaces";
import { Group } from "../../utils/multiplayer-interfaces";

interface PropsAllGroups {
  states: StateVariables;
  group: Group;
}

export function OneGroup({ group }: PropsAllGroups): JSX.Element {
  return (
    <div className="one-group">
      <h2>{group.groupName}</h2>
      <div className="all-group-entries">
        {group.groupEntries.map((entry, i) => (
          <div className="group-entry" key={i}>
            <div className="group-entry-description">
              <h3>{entry.username}</h3>
              <p>{entry.solved}</p>
              <p>{entry.guesses}/6 attempts</p>
            </div>
            <div className="group-entry-emojis">
              {arrangeEmojis(entry.emojis).map((emojiRow, i) => (
                <div key={i}>{emojiRow}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
