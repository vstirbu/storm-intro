var result = {};

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
  var data = chunk.replace('\n', '');
  
  if (result[data]) {
    result[data]++;
  } else {
    result[data] = 1;
  }
  
  console.log(result);
});