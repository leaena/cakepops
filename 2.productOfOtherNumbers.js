function getProductsOfAllIntsExceptAtIndex(values) {
  var productOfIndexes = [];
  var productBefore = 1;
  var productAfter = 1;
  for (var i = 0; i < values.length; i++) {
    productOfIndexes.push(productBefore);
    productBefore *= values[i];
  }
  for (var j = values.length - 1; j >= 0; j--) {
    productOfIndexes[j] *= productAfter;
    productAfter *= values[j];
  }
  return productOfIndexes;
}

console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]));
