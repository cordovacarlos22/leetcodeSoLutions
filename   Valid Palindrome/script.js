/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // converts sting to lower case and replace all special caracters and spaces global 
  const formatSting = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
  // converts string to array and reverse then back to string
  const reverseSting = formatSting.split('').reverse().join('');

  return formatSting === reverseSting



};