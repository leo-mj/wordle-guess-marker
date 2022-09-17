export interface MarkedGuess {
  [index: number]: { letter: string; colour: string };
}

export interface LetterWithColour {
  letter: string;
  colour: string;
}

export const green: string = "#6a994e";
export const yellow: string = "#ffbe0b";
export const grey: string = "grey";
