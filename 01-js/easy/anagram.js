/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  var n1 = str1.length;
  var n2 = str2.length;
  str1 = str1.toLowerCase();
  str2= str2.toLowerCase();

  if (n1!=n2){
    return false;
  }

  let d1 = {};

  for(let i=0; i<n1; i++){
    if (d1[str1[i]]==undefined){
      d1[str1[i]]=1;
    }
    else{
      d1[str1[i]]+=1;
    }
  }

  for(let i=0; i<n1; i++){
    if (d1[str2[i]]==undefined){
      return false;
    }
    else{
      d1[str1[i]]-=1;
    }
  }

  for(let i=0; i<n2; i++){
    if (d1[str2[i]]!=0){
      return false;
    }
  }

  return true;

}

module.exports = isAnagram;
