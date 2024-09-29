export function generateRandomString() {
  const characters =
    "ABCDEFGHI43212JKLM456NOPQRSTUVWX346Y34536Zabcdefgh765i234j5klm345nopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}
