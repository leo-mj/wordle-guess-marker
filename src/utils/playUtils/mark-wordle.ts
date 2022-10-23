/*Write a function, `markWordleGuess(guess: string, hiddenTarget: string):MarkedGuess` 
which calculates the correctness hints for each letter of a given single guess in Wordle based on the given hidden target.
Assume that the strings guess and hiddenTarget are always formed of exactly 5 upper-case alphabet characters (often with repeats).*/
import {
  green,
  grey,
  LettersWithIndices,
  MarkedGuess,
  yellow,
} from "../game-interfaces";

/**
 * returns a marked wordle guess
 * @param {string} inputGuess - the 5-letter guess to mark
 * @param {string} inputHiddenTarget - the 5-letter solution to check the guess against
 * @returns the marked guess
 */
export default function markWordle(
  inputGuess: string,
  inputHiddenTarget: string
): MarkedGuess {
  const guess = inputGuess.toUpperCase();
  const target = inputHiddenTarget.toUpperCase();
  const guessLettersWithIndices = assignIndicesToLetters(guess);
  const targetLettersWithIndices = assignIndicesToLetters(target);
  const result: MarkedGuess = compareGuessAndTarget(
    guessLettersWithIndices,
    targetLettersWithIndices
  );

  return result;
}

function assignIndicesToLetters(inputStr: string): LettersWithIndices {
  const obj: LettersWithIndices = {};
  for (let i = 0; i < 5; i++) {
    const letter: string = inputStr[i];
    if (obj[letter]) {
      obj[letter].push(i);
    } else {
      obj[letter] = [i];
    }
  }
  return obj;
}

function compareGuessAndTarget(
  guess: LettersWithIndices,
  target: LettersWithIndices
): MarkedGuess {
  const result: MarkedGuess = {};

  for (const letter in guess) {
    markGreens(letter, guess, target, result);
    markYellows(letter, guess, target, result);
    markGreys(letter, guess, target, result);
  }

  return result;
}

function markGreens(
  letter: string,
  guess: LettersWithIndices,
  target: LettersWithIndices,
  result: MarkedGuess
): void {
  const originalTargetIndices = target[letter];
  const originalGuessIndices = guess[letter];

  for (const index of originalGuessIndices) {
    if (originalTargetIndices && originalTargetIndices.includes(index)) {
      result[index] = { letter: letter, colour: green };
    }
  }

  // remove all matching indices from both LettersWithIndices objects
  guess[letter] = originalGuessIndices?.filter(
    (guessIndex) => !originalTargetIndices?.includes(guessIndex)
  );
  target[letter] = target[letter]?.filter(
    (targetIndex) => !originalGuessIndices?.includes(targetIndex)
  );
}

function markYellows(
  letter: string,
  guess: LettersWithIndices,
  target: LettersWithIndices,
  result: MarkedGuess
): void {
  // treat the arrays of indices as queues here
  const guessIndices = guess[letter];
  const targetIndices = target[letter];

  while (
    guessIndices &&
    guessIndices.length > 0 &&
    targetIndices &&
    targetIndices.length > 0
  ) {
    const index = guessIndices[0];
    result[index] = { letter: letter, colour: yellow };

    // remove front of queue
    guessIndices.shift();
    targetIndices.shift();
  }
}

function markGreys(
  letter: string,
  guess: LettersWithIndices,
  target: LettersWithIndices,
  result: MarkedGuess
): void {
  const guessIndices = guess[letter];
  if (!guessIndices) {
    return;
  }
  for (const index of guessIndices) {
    result[index] = { letter: letter, colour: grey };
  }
}
