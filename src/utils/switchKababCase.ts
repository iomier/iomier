export function kababToSentence(snakeCaseStr?: string) {
  if (typeof snakeCaseStr === "string") {
    // Replace underscores with spaces
    const spacedStr = snakeCaseStr.replace(/-/g, " ");

    // Capitalize the first letter of each word
    return spacedStr
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  return snakeCaseStr
}
