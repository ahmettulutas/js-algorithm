
function findLongestWordWithMostVowels(sentence) {

  if(!sentence || sentence.length === 0)
  throw new Error("Please provide a valid sentence.")

  const words = sentence.split(/\s+/);
  let longestWord = "";
  let longestWordLength = 0;
  let topVowelsCount = 0;

  for (const word of words) {
    const cleanedWord = word.replace(/[^a-zA-Z]/g, "");
    const vowelsCount = (cleanedWord.match(/[aeiouAEIOU]/g) || []).length; 

    if (cleanedWord.length > longestWordLength) {
      longestWord = cleanedWord;
      longestWordLength = cleanedWord.length;
      topVowelsCount = vowelsCount;
    } else if (cleanedWord.length === longestWordLength && vowelsCount > topVowelsCount) {
      longestWord = cleanedWord;
      topVowelsCount = vowelsCount;
    }
  }
  return longestWord;
}

const inputSentence = "Let's try with anothere sentence."
const testScenario = findLongestWordWithMostVowels(inputSentence);
console.log(testScenario)
