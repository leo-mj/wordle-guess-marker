import { StateVariables } from "./menu-interfaces";

export interface GroupEntry {
  username: string;
  guesses: number;
  solved_status: string;
  emojis: string;
}

export interface Group {
  groupName: string;
  groupEntries: GroupEntry[];
}

export interface PropsMultiplayerPages {
  states: StateVariables;
  setMultiplayerPage: React.Dispatch<React.SetStateAction<string>>;
}
