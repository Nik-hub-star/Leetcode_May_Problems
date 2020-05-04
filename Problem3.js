/* Given an arbitrary ransom note string and another string containing letters from all the magazines,
write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters. 

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;
  let originalMagazine = magazine.length;
  [...ransomNote].forEach(
    char => (magazine = magazine.replace(new RegExp(char), ""))
  );

  if (ransomNote.length + magazine.length == originalMagazine) {
    return true;
  } else return false;
};

/* 
Description

we will replace the matched element with "" so that it gets deleted from string , now next time 
new word will check te other matching character. Dont relace with global attribute set in regex.
/

*/
