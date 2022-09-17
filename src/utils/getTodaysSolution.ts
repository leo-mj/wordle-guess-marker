import axios from "axios";
import { baseURL } from "./databaseURL";

export async function getTodaysSolution(
  setTodaysSolution: React.Dispatch<React.SetStateAction<string>>,
  todaysDate: string
): Promise<void> {
  const res = await axios.get(baseURL + "solution/" + todaysDate);
  setTodaysSolution(res.data.solution);
}
