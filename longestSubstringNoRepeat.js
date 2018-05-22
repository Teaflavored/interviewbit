function longestSubstringNoRepeat(str) {
  const map = {};
  let longest = 0;
  let currentSubstringStart = 0;
  let i = 0;
  let char;

  while (i < str.length) {
    char = str[i];
    const previouslySeenIndex = map[char];

    if (typeof previouslySeenIndex !== 'undefined') {
      // Repeated
      currentSubstringStart = Math.max(previouslySeenIndex + 1, currentSubstringStart);
    }

    longest = Math.max(longest, i - currentSubstringStart + 1);

    map[char] = i;

    i++;
  }

  return longest;
}

console.log(longestSubstringNoRepeat("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"));
