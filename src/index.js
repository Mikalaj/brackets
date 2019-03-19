module.exports = function check(str, bracketsConfig) {
  let stack = [];

  for (const ch of str) {
    if (stack.length === 0) {
      if (isOpenCh(ch, bracketsConfig)) {
        stack.push(ch);
      } else {
        return false;
      }
    } else {
      popCh = stack.pop();
      if (!isPair(popCh, ch, bracketsConfig)) {
        if (isOpenCh(ch, bracketsConfig)) {
          stack.push(popCh);
          stack.push(ch);
        } else {
          return false;
        }
      }
    }
  }

  return stack.length ? false : true;
}

function isPair(openCh, closeCh, pairs) {
  for (let pair of pairs) {
    if ((pair[0] === openCh) && (pair[1] === closeCh)) {
      return true;
    }
  }

  return false;
}

function isOpenCh(ch, pairs) {
  for (let pair of pairs) {
    if (pair[0] === ch) {
      return true;
    }
  }

  return false;
}