const spaceJam = string => {
  return string.trim().split("").filter(char => char !== " ").join("  ").toUpperCase();
}
