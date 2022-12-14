import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../utils/databaseURL";
import { PropsMainPages } from "../utils/menu-interfaces";
import { Group } from "../utils/multiplayer-interfaces";
import { getTodaysDate } from "../utils/playUtils/getTodaysDate";
import { OneGroup } from "./multiplayer/OneGroup";
import { CreateGroup } from "./multiplayer/CreateGroup";
import { JoinGroup } from "./multiplayer/JoinGroup";

export function Multiplayer({ states }: PropsMainPages): JSX.Element {
  const { user, password, loggedIn } = states;
  const [multiplayerPage, setMultiplayerPage] = useState<string>("all groups");

  const todaysDate = getTodaysDate();
  const [myGroups, setMyGroups] = useState<Group[] | null>(null);
  const [leaveGroup, setLeaveGroup] = useState<string>("none");

  useEffect(() => {
    const getGroups = async () => {
      try {
        const allMyGroups = await axios.get(
          baseURL + "groups/results/" + user + "/" + todaysDate
        );
        setMyGroups([...allMyGroups.data]);
      } catch (err) {
        console.error(err);
      }
    };
    getGroups();
  }, [password, todaysDate, user, multiplayerPage, leaveGroup]);

  return (
    <>
      {loggedIn && (
        <div>
          <div className="group-buttons">
            {multiplayerPage !== "join" && (
              <button
                className="group-button"
                onClick={() => setMultiplayerPage("join")}
              >
                Join Group
              </button>
            )}
            {multiplayerPage !== "create" && (
              <button
                className="group-button"
                onClick={() => setMultiplayerPage("create")}
              >
                Create Group
              </button>
            )}
            {multiplayerPage !== "all groups" && (
              <button
                className="group-button"
                onClick={() => setMultiplayerPage("all groups")}
              >
                All My Groups
              </button>
            )}
          </div>
          {multiplayerPage === "join" && (
            <JoinGroup
              states={states}
              setMultiplayerPage={setMultiplayerPage}
            />
          )}
          {multiplayerPage === "create" && (
            <CreateGroup
              states={states}
              setMultiplayerPage={setMultiplayerPage}
            />
          )}
          {multiplayerPage === "all groups" &&
            myGroups &&
            myGroups.map((group, i) => (
              <div key={i}>
                <OneGroup
                  states={states}
                  group={group}
                  setLeaveGroup={setLeaveGroup}
                />
              </div>
            ))}
          {myGroups === null && (
            <div className="about">
              <i>Join Group:</i>
              <p>
                Join a group in order to share your daily results with group
                members
              </p>
              <i>Create Group:</i>
              <p>Create a new group</p>
            </div>
          )}
        </div>
      )}
      {!loggedIn && (
        <div className="about">
          <h1>You need to log in for Multiplayer mode</h1>
        </div>
      )}
    </>
  );
}
