export function arrangeEmojis(emojis: string): string[] {
  const emojisArr = emojis.split(",");
  const allEmojiRows: string[] = [];
  for (let i = 0; i < emojisArr.length / 5; i++) {
    const oneEmojiRow = [];
    for (let j = 0; j < 5; j++) {
      oneEmojiRow.push(emojisArr.shift());
    }
    const emojisStr = oneEmojiRow.join("");
    console.log(emojisStr);
    allEmojiRows.push(emojisStr);
  }
  return allEmojiRows;
}
