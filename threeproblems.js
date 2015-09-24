/**
 * Created by Reed on 9/21/2015.
 */
function sumFor(data) {
  var sum = 0;

  for(var i = 0; i < data.length; i++) {
    sum += data[i];
  }

  return sum;
};

function sumWhile(data) {
  var sum = 0;
  var i = 0;

  while(i < data.length) {
    sum += data[i];
    i++;
  }

  return sum;
};

function sumRecursion(data) {
  var tData = data.slice(0);
  if(tData.length === 0) {
    return 0;
  }
  else {
    return tData.splice(0, 1)[0] + sumRecursion(tData);
  }
};

function sumTheSimpleWay(data) {
  return  _.reduce(data, function(memo, num){ return memo + num; }, 0);
};

function zipList(list1, list2) {
  var cList = [];
  for(var i = 0; i < list1.length; i++) {
    cList.push(list1[i]);
    cList.push(list2[i]);
  }

  return cList;
};

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
};

function fib() {
  var prev = 0;
  var next = 1;
  var fibList = [0, 1];

  for(var i = 2; i < 100; i++) {
    var temp = prev + next;
    fibList.push(temp);
    prev = next;
    next = temp;
  }

  return fibList;
};

var testData = [1, 2, 3, 4];
console.log(sumFor(testData));
console.log(sumWhile(testData));
console.log(sumRecursion(testData));
console.log(sumTheSimpleWay(testData));

var testList1 = ["a", "b", "c"];
var testList2 = [1, 2, 3];
console.log(zipList(testList1, testList2));
console.log(zipListTheSimpleWay(testList1, testList2));

console.log(fib());
console.log(fib().length);

//26 min