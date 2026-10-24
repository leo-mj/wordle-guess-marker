import axios from "axios";
import { useState } from "react";
import { authHeader, baseURL } from "../utils/databaseURL";
import { PropsMainPages } from "../utils/menu-interfaces";
import { PlayerStats } from "./PlayerStats";

export function ManageAccount({ states }: PropsMainPages): JSX.Element {
  const { setUser, token, setToken, setLoggedIn } = states;
  const [deleteConfirmation, setDeleteConfirmation] = useState<boolean>(false);
  const [showStats, setShowStats] = useState<boolean>(false);

  const handleDeleteButton = async () => {
    try {
      await axios.delete(baseURL + "account", authHeader(token));
      alert("You have deleted your account");
      setLoggedIn(false);
      setUser("");
      setToken("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Try again");
    }
  };
  return (
    <>
      {!showStats && (
        <div className="login-interface">
          <button onClick={() => setShowStats(true)}>Stats</button>
        </div>
      )}
      {showStats && (
        <div className="one-group">
          <PlayerStats token={token} setShowStats={setShowStats} />
        </div>
      )}

      <div className="login-interface">
        {!deleteConfirmation && (
          <button onClick={() => setDeleteConfirmation(true)}>
            Delete Account
          </button>
        )}
        {deleteConfirmation && (
          <div>
            <h1>Are you sure you want to delete your account?</h1>
            <button onClick={handleDeleteButton}>Yes</button>
            <button onClick={() => setDeleteConfirmation(false)}>No</button>
          </div>
        )}
      </div>
    </>
  );
}
