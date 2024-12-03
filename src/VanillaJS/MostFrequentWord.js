//from a given paragraph return the most frequent word.


const text = "Bob hit a ball, the hit ball flew far after it was hit.";

const bannedWords = ["hit"];

function mostUsedWord(text, bannedWords) {
  // write your code below
  let words = text.split(" ");
  let res = {};
  words.forEach((element) => {
    element = element.replace(/[^\w\s]/g, "").toLowerCase();
    if (!(element in res)) {
      res[element] = 1;
    } else {
      res[element] += 1;
    }
  });
  bannedWords.forEach((word) => {
    if (word in res) {
      delete res[word];
    }
  });
  let maxKey = null;
  let maxCount = 0;

  Object.keys(res).forEach((word) => {
    if (res[word] > maxCount) {
      maxCount = res[word];
      maxKey = word;
    }
  });
  return maxKey;
}
const temp = mostUsedWord(text, bannedWords);
console.log(temp);
