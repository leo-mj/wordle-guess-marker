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

export interface GroupStats {
  username: string;
  avg_guesses: number;
  total_games: number;
  games_solved: number;
  solved_percentage: number;
  points: number;
}
