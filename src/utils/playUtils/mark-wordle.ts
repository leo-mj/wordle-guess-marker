/*Write a function, `markWordleGuess(guess: string, hiddenTarget: string):MarkedGuess` 
which calculates the correctness hints for each letter of a given single guess in Wordle based on the given hidden target.
Assume that the strings guess and hiddenTarget are always formed of exactly 5 upper-case alphabet characters (often with repeats).*/
import { green, grey, MarkedGuess, yellow } from "../interfaces";

/**
 * returns a marked wordle guess
 * @param {string} inputGuess - the 5-letter guess to mark
 * @param {string} inputHiddenTarget - the 5-letter solution to check the guess against
 * @returns the marked guess
 */
function markWordle(
  inputGuess: string,
  inputHiddenTarget: string
): MarkedGuess {
  const guess: string = inputGuess.toUpperCase();
  const hiddenTarget = inputHiddenTarget.toUpperCase();
  let result: MarkedGuess = markIgnoringRepetition(guess, hiddenTarget);

  result = removeExtraYellows(result, guess, hiddenTarget);

  return result;
}

function markIgnoringRepetition(
  guess: string,
  hiddenTarget: string
): MarkedGuess {
  const result: MarkedGuess = { 0: { letter: guess[0], colour: grey } };
  for (let i = 0; i < 5; i++) {
    const guessLetter: string = guess[i];
    const targetLetter: string = hiddenTarget[i];
    if (guessLetter === targetLetter)
      result[i] = { letter: guessLetter, colour: green };
    else if (hiddenTarget.includes(guessLetter)) {
      result[i] = { letter: guessLetter, colour: yellow };
    } else {
      result[i] = { letter: guessLetter, colour: grey };
    }
  }
  return result;
}

function removeExtraYellows(
  resultSoFar: MarkedGuess,
  guess: string,
  hiddenTarget: string
): MarkedGuess {
  const modifiedResult: MarkedGuess = resultSoFar;
  // remove excess yellows of the duplicate letter from markedResult, starting from the back, replace with grey
  for (let i = 4; i >= 0; i--) {
    if (isDuplicateYellow(modifiedResult, guess, hiddenTarget, i)) {
      modifiedResult[i].colour = grey;
    }
  }
  return modifiedResult;
}

function isDuplicateYellow(
  resultSoFar: MarkedGuess,
  guess: string,
  hiddenTarget: string,
  i: number
): boolean {
  const guessLetter = guess[i];
  if (!(resultSoFar[i].colour === yellow)) {
    return false;
  }
  const letterInGuess = countLetter(guessLetter, guess);
  const letterInTarget = countLetter(guessLetter, hiddenTarget);
  const excessYellows = letterInGuess - letterInTarget;
  if (excessYellows > 0) {
    return true;
  }
  return false;
}

function countLetter(letter: string, searchWord: string): number {
  const regexp = new RegExp(letter, "g");
  let letterCount = 0;
  const letterArray: string[] | null = searchWord.match(regexp);
  if (letterArray !== null) {
    // this line is to avoid a TS error regarding length of null
    letterCount = letterArray.length;
  }
  return letterCount;
}

export default markWordle;
