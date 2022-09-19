import { green, grey, yellow } from "../game-interfaces";
import markWordle from "./mark-wordle";

test("markWordle returns correct green mark", () => {
  expect(markWordle("gloat", "blues")).toStrictEqual({
    0: { letter: "G", colour: grey },
    1: { letter: "L", colour: green },
    2: { letter: "O", colour: grey },
    3: { letter: "A", colour: grey },
    4: { letter: "T", colour: grey },
  });
  expect(markWordle("blues", "blues")).toStrictEqual({
    0: { letter: "B", colour: green },
    1: { letter: "L", colour: green },
    2: { letter: "U", colour: green },
    3: { letter: "E", colour: green },
    4: { letter: "S", colour: green },
  });
});

test("markWordle returns correct yellow mark for guess and hiddenTarget without repetitions", () => {
  expect(markWordle("great", "blues")).toStrictEqual({
    0: { letter: "G", colour: grey },
    1: { letter: "R", colour: grey },
    2: { letter: "E", colour: yellow },
    3: { letter: "A", colour: grey },
    4: { letter: "T", colour: grey },
  });
});

test("markWordle returns correct yellow mark for guess and hiddenTarget with repetition", () => {
  expect(markWordle("fleet", "eerie")).toStrictEqual({
    0: { letter: "F", colour: grey },
    1: { letter: "L", colour: grey },
    2: { letter: "E", colour: yellow },
    3: { letter: "E", colour: yellow },
    4: { letter: "T", colour: grey },
  });
});

test("markWordle returns correct yellow and green mark for guess and hiddenTarget with repetition", () => {
  expect(markWordle("eeeee", "eerie")).toStrictEqual({
    0: { letter: "E", colour: green },
    1: { letter: "E", colour: green },
    2: { letter: "E", colour: grey },
    3: { letter: "E", colour: grey },
    4: { letter: "E", colour: green },
  });
  expect(markWordle("eeesh", "eerie")).toStrictEqual({
    0: { letter: "E", colour: green },
    1: { letter: "E", colour: green },
    2: { letter: "E", colour: yellow },
    3: { letter: "S", colour: grey },
    4: { letter: "H", colour: grey },
  });
});
