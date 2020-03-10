module.exports = function check(str, config) {
  const pairs = config.map(element => element.join(""));
  let string = str,
   length;
  while (length !== string.length){
      length = string.length;
      pairs.forEach(e => {
          string = string.replace(e, "");
      });
  };

  return string.length === 0;
}
