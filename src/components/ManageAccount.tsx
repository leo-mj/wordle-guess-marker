import axios from "axios";
import { useState } from "react";
import { baseURL } from "../utils/databaseURL";
import { PropsMainPages } from "../utils/menu-interfaces";

export function ManageAccount({ states }: PropsMainPages): JSX.Element {
  const { user, password, setLoggedIn } = states;
  const [deleteConfirmation, setDeleteConfirmation] = useState<boolean>(false);

  const handleDeleteButton = async () => {
    try {
      await axios.delete(baseURL + `delete/${user}/${password}`);
      alert("You have deleted your account");
      setLoggedIn(false);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Try again");
    }
  };
  return (
    <>
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
