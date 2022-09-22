export interface GroupEntry {
  username: string;
  guesses: number;
  solved: string;
  emojis: string;
}

export interface Group {
  groupName: string;
  groupEntries: GroupEntry[];
}
