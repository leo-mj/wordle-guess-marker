export function arrangeEmojis(inputEmojis: string): string[] {
  const emojis = inputEmojis;
  const emojisArr = emojis.split(",");
  const allEmojiRows: string[] = [];
  while (emojisArr.length > 0) {
    const oneEmojiRow = [];
    for (let j = 0; j < 5; j++) {
      oneEmojiRow.push(emojisArr.shift());
    }
    const emojisStr = oneEmojiRow.join("");
    allEmojiRows.push(emojisStr);
  }
  return allEmojiRows;
}
