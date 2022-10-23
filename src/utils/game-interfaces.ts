export interface MarkedGuess {
  [index: number]: { letter: string; colour: string };
}

export interface LettersWithIndices {
  [letter: string]: number[];
}

export interface LetterWithColour {
  letter: string;
  colour: string;
}

export const green = "#6a994e";
export const yellow = "#ffbe0b";
export const grey = "grey";

export interface SharedResult {
  guesses: number;
  solvedStatus: string;
  emojis: string[][];
}
