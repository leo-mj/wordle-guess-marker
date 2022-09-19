export interface stateVariables {
  selectedPage: string;
  setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
  password: string | null;
  setPassword: React.Dispatch<React.SetStateAction<string | null>>;
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PropsMainPages {
  states: stateVariables;
}
