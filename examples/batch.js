var data = 'the quick brown fox';

var wc = data.split(' ').reduce(function (result, value) {
  if (result[value]) {
    result[value]++;
  } else {
    result[value] = 1;
  }
  
  return result;
}, {});

console.log(wc);