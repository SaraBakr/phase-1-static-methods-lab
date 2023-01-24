class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.substring(0, 1).toUpperCase() + string.substring(1, string.length);
  }
  static sanitize(string) {
    return string.replace(/[^0-9a-zA-Z\.'-\s]/g, '');
  }
  static titleize(string) {
    let stringArray = string.split(' ');
    let wordArray = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    stringArray[0] = stringArray[0].substring(0, 1).toUpperCase() + stringArray[0].substring(1, stringArray[0].length)
    let newString = stringArray.map(string => {
      if (!wordArray.includes(string)) {
        return string.substring(0, 1).toUpperCase() + string.substring(1, string.length);
      }
      else {
        return string;
      }
    });
    return newString.join(' ');
  }
}
